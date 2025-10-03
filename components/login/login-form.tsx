"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signInAction } from "@/actions/auth";
import { useActionState, useEffect, useState } from "react";
import { SignInStepValues } from "@/utils/constants/sign-in-step-values";
import { PasswordInput } from "../ui/password-input";
import { useRouter } from "next/navigation";

const REDIRECT_STEPS = [
  SignInStepValues.DONE,
  SignInStepValues.CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED,
];

const REDIRECT_PATHS = {
  [SignInStepValues.DONE]: "/admin",
  [SignInStepValues.CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED]:
    "/login/set-new-password",
};

export function LoginForm() {
  const [state, formAction, isPending] = useActionState(
    signInAction,
    undefined
  );

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  useEffect(() => {
    if (state && REDIRECT_STEPS.includes(state)) {
      setFormData({ email: "", password: "" });
      router.push(REDIRECT_PATHS[state]);
    }
  }, [state, router]);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const hasError = state && !REDIRECT_STEPS.includes(state);

  return (
    <div className="flex items-center justify-center mt-16">
      <div className="w-full max-w-md p-8 bg-background backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-terracotta-500 mb-2">
            Inicia sesión
          </h2>
          <p className="text-terracotta-500">Accede a tu cuenta de Tierrita</p>
        </div>

        {hasError && (
          <div className="mb-4 p-3 bg-error/10 border border-error/20 rounded-lg">
            <p className="text-error text-sm text-center">
              Error: revisa tu correo electrónico y contraseña
            </p>
          </div>
        )}

        <form className="space-y-6" action={formAction}>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-primary">
              Correo electrónico
            </label>
            <Input
              id="email"
              type="email"
              placeholder="tu@email.com"
              name="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="text-primary  focus:bg-white/30 focus:border-white/50"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-primary"
            >
              Contraseña
            </label>
            <PasswordInput
              id="password"
              placeholder="••••••••"
              name="password"
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              className="text-primary focus:bg-white/30 focus:border-white/50"
              required
            />
          </div>

          <Button
            type="submit"
            disabled={isPending}
            className="w-full bg-primary border border-white/30 hover:cursor-pointer hover:border-white/50 transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? "Iniciando sesión..." : "Iniciar sesión"}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-primary text-sm">
            ¿No tienes cuenta?{" "}
            <a href="#" className="text-primary underline">
              Regístrate aquí
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
