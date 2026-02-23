"use client";
import React from "react";
import { usePathname } from "next/navigation";
import DemoBookingPopup from "./DemoBookingPopup";

type TopStripProps = {
  text?: string;
};

export default function TopStrip({ text }: TopStripProps) {
  const pathname = usePathname();
  const [showDemoPopup, setShowDemoPopup] = React.useState(false);
  if (pathname?.startsWith("/admin")) return null;

  return (
    <>
      <div className="h-10 bg-purple-800 text-white">
        <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-center">
          <div className="flex items-center gap-2">
            <p className="text-xs font-medium text-center">
              {text ?? "New batches starting soon — Enroll today!"}
            </p>

            {/* <button
              onClick={() => setShowDemoPopup(true)}
              className="px-2 py-1 bg-white text-purple-800 rounded-md text-xs font-semibold hover:opacity-95"
              aria-label="Join Now"
            >
              Join Now
            </button> */}
          </div>
        </div>
      </div>

      {showDemoPopup && (
        <DemoBookingPopup onClose={() => setShowDemoPopup(false)} />
      )}
    </>
  );
}
