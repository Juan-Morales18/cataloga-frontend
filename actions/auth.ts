import { SignInStepValues } from "@/utils/constants/sign-in-step-values";
import { confirmSignIn, signIn } from "aws-amplify/auth";

const KNOWN_SIGN_IN_STEPS = [
  SignInStepValues.DONE,
  SignInStepValues.CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED,
];

export async function signInAction(
  state: string | undefined,
  formData: FormData
) {
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));

  try {
    const res = await signIn({
      username: email,
      password,
    });

    if (KNOWN_SIGN_IN_STEPS.includes(res.nextStep.signInStep)) {
      return res.nextStep.signInStep;
    }

    return "ERROR_SIGNING_IN";
  } catch (error) {
    console.error("Error al intentar iniciar sesión: ", error);
    return "ERROR_SIGNING_IN";
  }
}

export async function confirmNewPasswordAction(
  state: string | undefined,
  formData: FormData
) {
  const newPassword = String(formData.get("confirmNewPassword"));

  try {
    await confirmSignIn({
      challengeResponse: newPassword,
    });

    return "SUCCESS";
  } catch (e) {
    console.error("Error al confirmar la nueva contraseña: ", e);
    return "ERROR_SETTING_NEW_PASSWORD";
  }
}
