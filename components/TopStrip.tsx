"use client";
import { usePathname } from "next/navigation";

type TopStripProps = {
  text?: string;
};

export default function TopStrip({ text }: TopStripProps) {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-10 bg-purple-800 text-white">
      <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-center">
        <p className="text-center text-sm font-medium">
          {text ?? "New batches starting soon — Enroll today!"}
        </p>
      </div>
    </div>
  );
}
