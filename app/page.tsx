import { BookOpen, ChevronsRight, User } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link
        href={"/auth"}
        className="absolute right-4 top-4 inline-flex items-center px-4 py-3 bg-white/20 hover:bg-white/30 text-white rounded-2xl transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/30 hover:scale-105 shadow-lg text-md"
      >
        <User className="size-6" />
      </Link>

      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center p-2 bg-white/20 rounded-2xl mb-6 backdrop-blur-sm">
          <BookOpen className="size-16 text-white" />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          <span className="bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent">
            Cataloga
          </span>
        </h1>

        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
          Deja de buscar entre innumerables mensajes de WhatsApp.{" "}
          <span className="font-medium text-white">Cataloga centraliza</span>{" "}
          todos los productos, novedades y ofertas que necesitas en un solo
          lugar.
        </p>

        <div className="mt-12">
          <Link
            href={"/catalog"}
            className="inline-flex items-center px-6 py-4 bg-white/20 hover:bg-white/30 text-white rounded-2xl transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/30 hover:scale-105 shadow-lg text-md"
          >
            Explorar catálogo
            <ChevronsRight className="size-6" />
          </Link>
        </div>
      </div>
    </>
  );
}
