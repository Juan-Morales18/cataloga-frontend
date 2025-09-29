import { ChevronsRight, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import tierrita from "@/public/tierrita.png";

export default async function Home() {
  return (
    <>
      <Link
        href={"/login"}
        className="absolute right-4 top-4 inline-flex items-center px-4 py-3 text-white bg-primary  rounded-2xl transition-all duration-300 backdrop-blur-sm border border-primary/20 hover:border-primary/30 hover:scale-105 shadow-lg text-md"
      >
        <User className="size-6" />
      </Link>

      <div className="max-w-4xl h-dvh p-4 mx-auto flex flex-col items-center space-y-8 md:space-y-16 justify-center text-center">
        <div className="md:space-y-32 space-y-16">
          <Image
            src={tierrita}
            alt="logo"
            width={800}
            height={800}
            className="w-64 md:w-100 mx-auto object-contain"
            priority
          />

          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed font-light">
            Descubre nuestro bazar con una cuidada selección de{" "}
            <span className="font-medium text-text-primary">
              sandalias, cremas corporales, ropa y productos de cuidado natural
            </span>
            . Todo lo que necesitas para tu bienestar y estilo en un solo lugar.
          </p>
        </div>

        <Link
          href={"/catalog"}
          className="inline-flex items-center text-white px-6 py-4 bg-primary hover:bg-primary-600  rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg text-md"
        >
          Explorar catálogo
          <ChevronsRight className="size-6" />
        </Link>
      </div>
    </>
  );
}
