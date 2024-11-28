import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";

export function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-3xl md:text-5xl lg:text-7xl font-sans py-10 relative z-20 font-bold tracking-tight select-none">
        NETWITX.com
        <br />
        We&apos;re Launching Soon..
      </h2>

      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        We&apos;re revolutionizing custom websites and hosting. The future of
        your online success starts here—stay tuned!
      </p>
    </BackgroundLines>
  );
}
