import type { Dictionary } from "@/app/[lang]/dictionaries";
import { LottiePlayer } from "./lottie-player";

export function About({ dict }: { dict: Dictionary["about"] }) {
  return (
    <section id="about" className="bg-ink py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-4xl leading-tight font-light whitespace-pre-line sm:text-5xl">{dict.title}</h2>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-neutral-300">
              {dict.body}
            </p>
          </div>
          <div className="overflow-hidden rounded-md">
            <LottiePlayer label={dict.animationLabel} className="mx-auto h-80 w-full p-4" />
          </div>
        </div>
        <ul className="mt-16 flex flex-wrap justify-between gap-x-6 gap-y-4 text-xs">
          {dict.tags.map((t) => (
            <li key={t} className="border-b border-white/70 pb-1">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
