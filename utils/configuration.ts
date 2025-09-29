import { type ResourcesConfig } from "aws-amplify";

export const configuration: ResourcesConfig = {
  Auth: {
    Cognito: {
      userPoolId: String(process.env.COGNITO_USER_POOL_ID),
      userPoolClientId: String(process.env.COGNITO_CLIENT_ID),
      loginWith: {
        email: true,
      },
    },
  },
};
