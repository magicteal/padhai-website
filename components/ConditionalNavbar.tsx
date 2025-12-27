"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import TopStrip from "./TopStrip";

export default function ConditionalNavbar() {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");
  if (isAdmin) return null;
  return (
    <>
      <TopStrip text="Bangalore Parents Are Choosing This - Join In" />
      <Navbar hasTopStrip />
    </>
  );
}
