import { cookies } from "next/headers";

import { createServerRunner, NextServer } from "@aws-amplify/adapter-nextjs";
import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";
import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth/server";

import { configuration } from "./configuration";

export const { runWithAmplifyServerContext } = createServerRunner({
  config: configuration,
});

export const cookiesClient = generateServerClientUsingCookies({
  config: configuration,
  cookies,
});

export async function getCurrentUserServer() {
  try {
    const currentUser = await runWithAmplifyServerContext({
      nextServerContext: { cookies },
      operation: (contextSpec) => getCurrentUser(contextSpec),
    });

    return currentUser;
  } catch (error) {
    console.error(error);
  }
}

export async function getSessionServer(context: NextServer.Context) {
  const result = await runWithAmplifyServerContext({
    nextServerContext: context,
    operation: async (contextSpec) => {
      try {
        const session = await fetchAuthSession(contextSpec);

        if (!session.tokens?.accessToken) {
          throw new Error("No access token found");
        }

        return session;
      } catch (error) {
        console.error("Session error:", error);
        return null;
      }
    },
  });

  return result;
}
