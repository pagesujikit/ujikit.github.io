"use client";

import { useEffect, useState } from "react";

export function TypingText({ text }: { text: string }) {
  const [shown, setShown] = useState(text);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let i = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      i += deleting ? -1 : 1;
      setShown(text.slice(0, i));
      let delay = deleting ? 50 : 110;
      if (!deleting && i === text.length) {
        deleting = true;
        delay = 1800;
      } else if (deleting && i === 0) {
        deleting = false;
        delay = 500;
      }
      timer = setTimeout(tick, delay);
    };

    // keep the full text for SSR / first paint, then restart typing from empty
    timer = setTimeout(() => {
      setShown("");
      timer = setTimeout(tick, 150);
    }, 400);
    return () => clearTimeout(timer);
  }, [text]);

  return (
    <>
      <span>{shown}</span>
      <span className="typing-cursor" />
    </>
  );
}
