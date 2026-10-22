"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import type { Dictionary } from "@/app/[lang]/dictionaries";
import { LOGO_SIZE, experiences, type Experience as ExperienceItem } from "@/data/experiences";

type Dict = Dictionary["experience"];

const AUTO_SPEED = 40; // px per second
const RESUME_DELAY = 500; // ms of idle time before auto-scroll resumes

function ExperienceCard({ e, dict }: { e: ExperienceItem; dict: Dict }) {
  const t = dict.items[e.id];
  const { height, maxWidth } = { ...LOGO_SIZE, ...e.logoSize };
  return (
    <article className="flex h-56 w-72 shrink-0 snap-start flex-col justify-between rounded-xs bg-white p-5 shadow-xs">
      <div className="flex items-start justify-between">
        <div
          style={{ height, minWidth: height, maxWidth }}
          className="flex items-center justify-center overflow-hidden rounded-md bg-white"
        >
          <Image
            src={e.logo}
            alt={`${e.company} ${dict.logoAlt}`}
            draggable={false}
            sizes="112px"
            className="h-full w-auto max-w-full object-contain"
          />
        </div>
        <span className="text-xs text-neutral-500">{t.period}</span>
      </div>
      <div>
        <p className="font-medium">{t.role}</p>
        <p className="mt-1 text-xs text-neutral-500">{e.company}</p>
      </div>
      <p className="text-xs">{t.location}</p>
    </article>
  );
}

function ExperienceSet({ hidden, dict }: { hidden: boolean; dict: Dict }) {
  return (
    <div className="flex shrink-0 gap-5 pr-5" aria-hidden={hidden || undefined}>
      {experiences.map((e) => (
        <ExperienceCard key={e.id} e={e} dict={dict} />
      ))}
    </div>
  );
}

// Auto-scrolls like running text, and can also be swiped, dragged, wheel-scrolled or
// keyboard-scrolled. Three copies of the cards make the loop endless.
function useMarquee() {
  const track = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = track.current;
    if (!el) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const st = { pos: 0, lastSet: 0, hovering: false, dragging: false, idleUntil: 0, last: performance.now(), raf: 0, dragX: 0, dragLeft: 0 };

    const setWidth = () => el.scrollWidth / 3;
    // keep scrollLeft inside the middle copy so we can scroll forever in both directions
    const normalize = () => {
      const w = setWidth();
      if (el.scrollLeft < w) el.scrollLeft += w;
      else if (el.scrollLeft >= 2 * w) el.scrollLeft -= w;
    };
    const touch = () => {
      st.idleUntil = performance.now() + RESUME_DELAY;
    };

    const tick = (now: number) => {
      const dt = Math.min(now - st.last, 64);
      st.last = now;
      if (!reduceMotion && !st.hovering && !st.dragging && now > st.idleUntil) {
        st.pos += (AUTO_SPEED * dt) / 1000;
        el.scrollLeft = st.pos;
        st.lastSet = el.scrollLeft;
      }
      st.raf = requestAnimationFrame(tick);
    };

    const start = () => {
      el.scrollLeft = setWidth();
      st.pos = el.scrollLeft;
      st.last = performance.now();
      st.raf = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      // ignore scrolls we caused ourselves; otherwise the user moved it, so follow them
      if (Math.abs(el.scrollLeft - st.lastSet) >= 1) {
        touch();
        normalize();
        st.pos = el.scrollLeft;
      } else if (el.scrollLeft >= 2 * setWidth()) {
        normalize();
        st.pos = el.scrollLeft;
      }
      st.lastSet = el.scrollLeft;
    };
    const onEnter = () => {
      st.hovering = true;
    };
    const onLeave = () => {
      st.hovering = false;
      touch();
    };
    const onDown = (ev: PointerEvent) => {
      if (ev.pointerType !== "mouse") return;
      st.dragging = true;
      st.dragX = ev.clientX;
      st.dragLeft = el.scrollLeft;
      el.setPointerCapture(ev.pointerId);
    };
    const onMove = (ev: PointerEvent) => {
      if (!st.dragging) return;
      el.scrollLeft = st.dragLeft - (ev.clientX - st.dragX);
    };
    const endDrag = () => {
      st.dragging = false;
      touch();
    };

    const touchEvents = ["touchstart", "wheel", "keydown", "focusin"] as const;
    el.addEventListener("scroll", onScroll, { passive: true });
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    touchEvents.forEach((t) => el.addEventListener(t, touch, { passive: true }));
    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", endDrag);
    el.addEventListener("pointercancel", endDrag);

    // wait for layout (images/fonts) before measuring
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });

    return () => {
      cancelAnimationFrame(st.raf);
      window.removeEventListener("load", start);
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      touchEvents.forEach((t) => el.removeEventListener(t, touch));
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", endDrag);
      el.removeEventListener("pointercancel", endDrag);
    };
  }, []);

  return track;
}

export function Experience({ dict }: { dict: Dict }) {
  const track = useMarquee();

  return (
    <section id="experience" className="py-10">
      <h2 className="mx-auto max-w-3xl px-6 text-center text-3xl font-light text-neutral-500 sm:text-4xl">
        {dict.titlePrefix} <span className="text-ink">{dict.joined}</span> {dict.and}{" "}
        <span className="text-ink">{dict.shipped}</span>
      </h2>
      <div
        ref={track}
        tabIndex={0}
        aria-label={dict.ariaLabel}
        className="fade-edges no-scrollbar mx-auto mt-12 max-w-6xl cursor-grab overflow-x-auto pb-4 select-none active:cursor-grabbing"
      >
        <div className="flex w-max">
          <ExperienceSet hidden={false} dict={dict} />
          <ExperienceSet hidden dict={dict} />
          <ExperienceSet hidden dict={dict} />
        </div>
      </div>
    </section>
  );
}
