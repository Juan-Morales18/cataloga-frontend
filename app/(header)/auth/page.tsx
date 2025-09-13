import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AuthPage() {
  return (
    <div className="flex items-center justify-center mt-16">
      <div className="w-full max-w-md p-8 bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Inicia sesión</h2>
          <p className="text-white/80">Accede a tu cuenta de Cataloga</p>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-white">
              Correo electrónico
            </label>
            <Input
              id="email"
              type="email"
              placeholder="tu@email.com"
              name="email"
              className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30 focus:border-white/50"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-white"
            >
              Contraseña
            </label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              name="password"
              className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30 focus:border-white/50"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 transition-all duration-300"
          >
            Iniciar sesión
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-white/70 text-sm">
            ¿No tienes cuenta?{" "}
            <a href="#" className="text-white hover:text-white/80 underline">
              Regístrate aquí
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
