export const passwordsEqual = (
  newPassword: string,
  confirmNewPassword: string
) => {
  return (
    newPassword.length > 0 &&
    confirmNewPassword.length > 0 &&
    newPassword === confirmNewPassword
  );
};
