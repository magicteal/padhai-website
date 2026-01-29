"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

type FbqFunction = (...args: any[]) => void;

declare global {
  interface Window {
    fbq?: FbqFunction;
  }
}

export default function FacebookPixelPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const hasTrackedInitialPageView = useRef(false);

  useEffect(() => {
    // The inline pixel snippet already tracks the initial PageView.
    if (!hasTrackedInitialPageView.current) {
      hasTrackedInitialPageView.current = true;
      return;
    }

    if (typeof window === "undefined") return;
    if (typeof window.fbq !== "function") return;

    window.fbq("track", "PageView");
  }, [pathname, searchParams]);

  return null;
}
