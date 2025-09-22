import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AuthPage() {
  return (
    <div className="flex items-center justify-center mt-16">
      <div className="w-full max-w-md p-8 bg-background backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-terracotta-500 mb-2">
            Inicia sesión
          </h2>
          <p className="text-terracotta-500">Accede a tu cuenta de Tierrita</p>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-primary">
              Correo electrónico
            </label>
            <Input
              id="email"
              type="email"
              placeholder="tu@email.com"
              name="email"
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
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              name="password"
              className="text-primary focus:bg-white/30 focus:border-white/50"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-primary border border-white/30 hover:cursor-pointer hover:border-white/50 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Iniciar sesión
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
