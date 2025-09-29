"use client";

import { useState } from "react";
import { Input } from "./input";
import { Button } from "./button";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";
import { FieldErrors, FieldValues } from "react-hook-form";

interface PasswordInputProps extends React.ComponentProps<"input"> {
  className?: string;
  errors?: FieldErrors<FieldValues>;
  showErrorMessage?: boolean;
}

export function PasswordInput({
  className,
  errors,
  showErrorMessage,
  ...props
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const fieldError = props.name && errors?.[props.name];

  return (
    <div className="space-y-1">
      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          className={cn(
            "pr-10",
            fieldError && "border-red-500 focus:border-red-500",
            className
          )}
          {...props}
        />

        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
          onClick={togglePasswordVisibility}
          tabIndex={-1}
        >
          {showPassword ? (
            <EyeOff className="h-4 w-4 text-muted-foreground" />
          ) : (
            <Eye className="h-4 w-4 text-muted-foreground" />
          )}

          <span className="sr-only">
            {showPassword ? "Hide password" : "Show password"}
          </span>
        </Button>
      </div>

      {fieldError && showErrorMessage && (
        <p className="text-sm text-red-500 mt-1">
          {typeof fieldError === "string"
            ? fieldError
            : String(fieldError?.message || "Invalid input")}
        </p>
      )}
    </div>
  );
}
