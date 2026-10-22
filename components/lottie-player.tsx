"use client";

import { useEffect, useRef } from "react";

import animationData from "@/assets/lottie/phone-lottie.json";

export function LottiePlayer({ label, className }: { label: string; className?: string }) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;
    let anim: { destroy: () => void } | undefined;
    let cancelled = false;

    // lottie-web touches `document` on import, so load it on the client only
    import("lottie-web").then(({ default: lottie }) => {
      if (cancelled || !container.current) return;
      anim = lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData,
      });
    });

    return () => {
      cancelled = true;
      anim?.destroy();
    };
  }, []);

  return <div ref={container} role="img" aria-label={label} className={className} />;
}
