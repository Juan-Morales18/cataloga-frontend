import { BookOpen } from "lucide-react";

export default function HeaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex items-center gap-2">
        <div className="inline-flex items-center justify-center p-2 bg-white/20 rounded-2xl mb-6 backdrop-blur-sm">
          <BookOpen className="size-8 text-white" />
        </div>
        <h3 className="text-4xl font-bold text-white mb-4 tracking-tight">
          <span className="bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent">
            Cataloga
          </span>
        </h3>
      </div>

      {children}
    </>
  );
}
