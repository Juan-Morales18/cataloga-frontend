"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Package,
  Users,
  Settings,
  BarChart3,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { signOutService } from "@/services/auth";

const navigation = [
  {
    name: "Panel",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "Productos",
    href: "/admin/products",
    icon: Package,
  },
  {
    name: "Usuarios",
    href: "/admin/users",
    icon: Users,
  },
  {
    name: "Analíticas",
    href: "/admin/analytics",
    icon: BarChart3,
  },
  {
    name: "Configuración",
    href: "/admin/settings",
    icon: Settings,
  },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignOut = async () => {
    setIsLoading(true);
    const response = await signOutService();
    setIsLoading(false);

    if (response === "SUCCESS") {
      router.replace("/login");
    } else {
      toast.error("Error al cerrar sesión", {
        description: "Por favor, intenta nuevamente",
        position: "top-center",
      });
    }
  };

  return (
    <div className="flex h-full w-64 flex-col bg-card border-r border-border">
      <div className="flex h-16 items-center px-6 border-b border-border">
        <h1 className="text-xl font-bold text-text-primary">Tierrita Admin</h1>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-white"
                  : "text-text-secondary hover:text-text-primary hover:bg-muted"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border">
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 text-text-secondary hover:text-text-primary hover:cursor-pointer"
          onClick={handleSignOut}
          disabled={isLoading}
        >
          <LogOut className="h-4 w-4" />
          {isLoading ? "Cerrando sesión..." : "Cerrar Sesión"}
        </Button>
      </div>
    </div>
  );
}
