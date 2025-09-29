"use client";

import { PasswordInput } from "@/components/ui/password-input";
import { Button } from "@/components/ui/button";
import { useActionState, useEffect, useTransition } from "react";
import { confirmNewPasswordAction } from "@/actions/auth";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PasswordRequirements } from "./components/password-requirements";
import { passwordSchema } from "@/lib/schemas";
import { passwordsEqual } from "@/utils/functions";

export function SetNewPasswordForm() {
  const [state, formAction] = useActionState(
    confirmNewPasswordAction,
    undefined
  );
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(passwordSchema),
    mode: "onBlur",
  });

  const router = useRouter();

  const newPassword = watch("newPassword") ?? "";
  const confirmNewPassword = watch("confirmNewPassword") ?? "";

  const isFormValid =
    isValid && passwordsEqual(newPassword, confirmNewPassword);

  const onSubmit = (data: {
    newPassword: string;
    confirmNewPassword: string;
  }) => {
    if (isFormValid) {
      startTransition(() => {
        const formData = new FormData();
        formData.append("confirmNewPassword", data.confirmNewPassword);
        formAction(formData);
      });
    }
  };

  useEffect(() => {
    if (state === "SUCCESS") {
      router.push("/catalog");
    }
  }, [state, router]);

  return (
    <div className="justify-center flex bg-background pt-16 md:pt-32">
      <div className="w-full max-w-md p-8 bg-background backdrop-blur-sm rounded-2xl shadow-2xl border border-primary/20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary mb-2">
            Establecer nueva contraseña
          </h2>
          <p className="text-text-secondary">
            Ingresa tu nueva contraseña para continuar
          </p>
        </div>

        {state === "ERROR_SETTING_NEW_PASSWORD" && (
          <div className="mb-4 p-3 bg-error/10 border border-error/20 rounded-lg">
            <p className="text-error text-sm text-center">{state}</p>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-primary"
            >
              Nueva contraseña
            </label>
            <PasswordInput
              id="password"
              placeholder="Contraseña"
              className="text-primary focus:bg-white/30 focus:border-primary/50"
              required
              minLength={8}
              {...register("newPassword")}
              errors={errors}
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="confirmNewPassword"
              className="text-sm font-medium text-primary"
            >
              Confirmar contraseña
            </label>
            <PasswordInput
              id="confirmNewPassword"
              placeholder="Confirmar contraseña"
              className="text-primary focus:bg-white/30 focus:border-primary/50"
              required
              minLength={8}
              {...register("confirmNewPassword")}
              errors={errors}
            />
          </div>

          <PasswordRequirements
            newPassword={newPassword}
            confirmNewPassword={confirmNewPassword}
          />

          <Button
            type="submit"
            disabled={state === "SUCCESS" || !isFormValid || isPending}
            className="w-full bg-primary hover:bg-primary-600 text-white transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50"
          >
            {isPending
              ? "Estableciendo contraseña..."
              : state === "SUCCESS"
              ? "Contraseña establecida"
              : "Establecer contraseña"}
          </Button>
        </form>
      </div>
    </div>
  );
}
