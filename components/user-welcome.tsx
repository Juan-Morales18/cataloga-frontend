"use client";

import { useEffect, useState } from "react";
import { getStoredUserInfo } from "@/utils/user-info";

export function UserWelcome() {
  const [userInfo, setUserInfo] = useState<{
    name: string;
    email: string;
  } | null>(null);

  useEffect(() => {
    const info = getStoredUserInfo();
    setUserInfo(info);
  }, []);

  if (!userInfo) return null;

  return (
    <div className="text-center mb-6">
      <h1 className="text-2xl font-bold text-primary mb-2">
        ¡Bienvenido, {userInfo.name}! 👋
      </h1>
      <p className="text-text-secondary">
        Explora nuestro bazar de productos naturales
      </p>
    </div>
  );
}
