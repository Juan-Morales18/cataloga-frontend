import { signOut } from "aws-amplify/auth";

export const signOutService = async () => {
  try {
    await signOut();
    return "SUCCESS";
  } catch (error) {
    console.error("Error al cerrar sesión: ", error);
    return "ERROR_SIGNING_OUT";
  }
};
