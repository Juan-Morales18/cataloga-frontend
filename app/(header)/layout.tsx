import { BookOpen } from "lucide-react";
import Link from "next/link";

export default function HeaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Link href={"/"} className="flex items-center gap-2">
        <div className="flex items-center justify-center p-2 bg-white/20 rounded-2xl mb-6 backdrop-blur-sm">
          <BookOpen className="size-8 text-white" />
        </div>
        <p className="text-4xl font-bold text-white mb-4 tracking-tight">
          <span className="bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent">
            Cataloga
          </span>
        </p>
      </Link>

      {children}
    </>
  );
}
