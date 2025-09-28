"use client";

import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";

export async function getSessionData() {
  try {
    console.log("=== FETCHING SESSION DATA ===");

    // Try to get current user first
    let currentUser = null;
    try {
      currentUser = await getCurrentUser();
      console.log("Current user found:", currentUser);
    } catch (userError) {
      console.log(
        "No current user found:",
        userError instanceof Error ? userError.message : "Unknown error"
      );
    }

    // Then try to get the session
    let session = null;
    try {
      session = await fetchAuthSession();
      console.log("Session found:", !!session);
      console.log("Session tokens:", !!session?.tokens);
      console.log("User sub:", session?.userSub);
      console.log("Access token:", !!session?.tokens?.accessToken);
    } catch (sessionError) {
      console.log(
        "No session found:",
        sessionError instanceof Error ? sessionError.message : "Unknown error"
      );
    }

    console.log("=================================");

    // Determine authentication status
    const hasValidSession = session?.tokens?.accessToken !== undefined;
    const hasUser = currentUser !== null;
    const isAuthenticated = hasValidSession || hasUser;

    return {
      isAuthenticated: isAuthenticated,
      userSub: session?.userSub || currentUser?.userId,
      tokens: session?.tokens,
      session: session,
      currentUser: currentUser,
    };
  } catch (error) {
    console.error("Error fetching session: ", error);
    return {
      isAuthenticated: false,
      userSub: null,
      tokens: null,
      session: null,
      currentUser: null,
    };
  }
}

export function getSessionFromCookies() {
  if (typeof window === "undefined") return null;

  try {
    // Read from the new amplify-session cookie
    const amplifySessionCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("amplify-session="))
      ?.split("=")[1];

    if (amplifySessionCookie) {
      const sessionData = JSON.parse(decodeURIComponent(amplifySessionCookie));
      console.log("Session from cookies:", sessionData);
      return sessionData;
    }

    // Fallback to old user-id cookie
    const userId = document.cookie
      .split("; ")
      .find((row) => row.startsWith("user-id="))
      ?.split("=")[1];

    return {
      userSub: userId,
      isAuthenticated: !!userId,
      timestamp: null,
    };
  } catch (error) {
    console.error("Error reading session from cookies:", error);
    return null;
  }
}

export function getSessionFromHeaders() {
  if (typeof window === "undefined") return null;

  try {
    // This would be available if you set headers in middleware
    const userId = document
      .querySelector('meta[name="x-user-id"]')
      ?.getAttribute("content");
    const accessToken = document
      .querySelector('meta[name="x-access-token"]')
      ?.getAttribute("content");

    return {
      userId,
      accessToken,
    };
  } catch (error) {
    console.error("Error reading session from headers:", error);
    return null;
  }
}

// New function to get session from multiple sources
export async function getSessionFromAllSources() {
  console.log("=== GETTING SESSION FROM ALL SOURCES ===");

  // Try direct Amplify session first
  const amplifySession = await getSessionData();
  console.log("Amplify session:", amplifySession);

  // Try cookies
  const cookieSession = getSessionFromCookies();
  console.log("Cookie session:", cookieSession);

  // Try headers
  const headerSession = getSessionFromHeaders();
  console.log("Header session:", headerSession);

  // Return the most reliable source
  if (amplifySession.isAuthenticated) {
    return amplifySession;
  } else if (cookieSession?.isAuthenticated) {
    return {
      isAuthenticated: true,
      userSub: cookieSession.userSub,
      tokens: null,
      session: null,
    };
  } else if (headerSession?.userId) {
    return {
      isAuthenticated: true,
      userSub: headerSession.userId,
      tokens: null,
      session: null,
    };
  }

  return {
    isAuthenticated: false,
    userSub: null,
    tokens: null,
    session: null,
  };
}
