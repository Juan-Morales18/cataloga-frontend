import { Check, CircleMinus } from "lucide-react";
import { PASSWORD_REQUIRMENTS } from "@/utils/constants/set-new-password";
import { passwordsEqual } from "@/utils/functions";

type PasswordRequirementsProps = {
  newPassword: string;
  confirmNewPassword: string;
};

export function PasswordRequirements({
  newPassword,
  confirmNewPassword,
}: PasswordRequirementsProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor="passwordRequirements"
        className="text-sm font-medium text-text-primary"
      >
        Requisitos de contraseña
      </label>

      <div className="text-sm text-primary">
        {PASSWORD_REQUIRMENTS.map((requirement) => (
          <div key={requirement.message} className="flex items-center gap-2">
            {newPassword?.match(requirement.regex) ? (
              <Check className="h-4 w-4 text-success" />
            ) : (
              <CircleMinus className="h-4 w-4 text-text-secondary" />
            )}

            <p className="text-text-secondary">{requirement.message}</p>
          </div>
        ))}

        <div className="flex items-center gap-2">
          {passwordsEqual(newPassword, confirmNewPassword) ? (
            <Check className="h-4 w-4 text-success" />
          ) : (
            <CircleMinus className="h-4 w-4 text-text-secondary" />
          )}

          <p className="text-text-secondary">
            {passwordsEqual(newPassword, confirmNewPassword)
              ? "Las contraseñas coinciden"
              : "Las contraseñas no coinciden"}
          </p>
        </div>
      </div>
    </div>
  );
}
