import Link from "next/link";
import Image from "next/image";
import tierrita from "@/public/tierrita.png";

export default function HeaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Link href={"/"} className="flex items-center gap-2">
        <Image
          src={tierrita}
          alt="Tierrita logo"
          width={256}
          height={256}
          className="w-48 ml-4 mt-4"
          priority
        />
      </Link>

      {children}
    </>
  );
}
