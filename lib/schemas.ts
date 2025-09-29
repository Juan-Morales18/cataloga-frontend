import { REGEX } from "@/utils/constants/set-new-password";
import { passwordsEqual } from "@/utils/functions";
import z from "zod";

export const passwordSchema = z
  .object({
    newPassword: z
      .string()
      .min(8)
      .regex(REGEX.numbers)
      .regex(REGEX.uppercase)
      .regex(REGEX.lowercase)
      .regex(REGEX.special),
    confirmNewPassword: z.string(),
  })
  .refine((data) => passwordsEqual(data.newPassword, data.confirmNewPassword), {
    path: ["confirmNewPassword"],
  });
