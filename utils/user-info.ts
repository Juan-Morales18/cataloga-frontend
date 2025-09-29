import { fetchUserAttributes } from "aws-amplify/auth";

export async function getUserInfo() {
  try {
    const userAttributes = await fetchUserAttributes();

    return {
      email: userAttributes.email || "",
      name:
        userAttributes.name || userAttributes.email?.split("@")[0] || "Usuario",
      phone: userAttributes.phone_number || "",
    };
  } catch (error) {
    console.error("Error fetching user info:", error);
    return {
      email: "",
      name: "Usuario",
      phone: "",
    };
  }
}

export function getStoredUserInfo() {
  if (typeof window === "undefined") return null;

  return {
    name: localStorage.getItem("userName") || "Usuario",
    email: localStorage.getItem("userEmail") || "",
  };
}
