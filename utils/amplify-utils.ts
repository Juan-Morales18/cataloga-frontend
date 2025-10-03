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

export async function getAutheticatedUser(context: NextServer.Context) {
  return await runWithAmplifyServerContext({
    nextServerContext: context,
    operation: async (contextSpec) => {
      try {
        const session = await fetchAuthSession(contextSpec);
        if (!session.tokens) {
          return;
        }

        const user = {
          ...(await getCurrentUser(contextSpec)),
          token: session.tokens.accessToken.toString(),
        };

        return user;
      } catch (error) {
        console.error(error);
      }
    },
  });
}
