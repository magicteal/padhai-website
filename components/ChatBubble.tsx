"use client";
import React from "react";
import { CheckCheck, Mic, Paperclip } from "lucide-react";

type MessageProps = {
  text: string;
  align: "left" | "right";
  user?: {
    name: string;
    avatar: string;
    online?: boolean;
  };
  time?: string;
  status?: "sent" | "delivered" | "read";
  reaction?: string;
};

export default function MessageBubble({
  text,
  align,

  time = "12:45 PM",
  status = "read",
  
}: MessageProps) {
  const right = align === "right";

  return (
    <div className={`flex items-end gap-3 ${right ? "justify-end" : "justify-start"}`}>

      {/* Bubble */}
      <div className="relative ]">

        <div
          className={`px-4 py-2 text-sm shadow-md bg-white
          ${right ? " rounded-tl-xl rounded-tr-xl rounded-bl-xl" : " rounded-tr-xl rounded-tl-xl rounded-br-xl"}
          `}
        >
          <p className="leading-relaxed text-xl text-purple-600">{text}</p>

          <div className="flex items-center justify-end gap-1 text-xs text-purple-600 mt-1">
            <span>{time}</span>
            {right && (
              <CheckCheck
                size={14}
                className={status === "read" ? "text-blue-500" : "text-gray-400"}
              />
            )}
          </div>
        </div>

       
      </div>

    </div>
  );
}
