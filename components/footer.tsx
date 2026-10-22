import type { Dictionary } from "@/app/[lang]/dictionaries";
import { EMAIL, socials } from "@/data/site";

export function Footer({ dict }: { dict: Dictionary["footer"] }) {
  return (
    <footer className="bg-linear-to-b from-ink to-neutral-800 text-white">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-10 px-6 py-14 md:flex-row">
        <div>
          <p className="text-xl">ujik.</p>
          <p className="mt-2 text-sm text-neutral-300">{dict.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener"
                className="border border-white/60 px-4 py-1.5 transition hover:bg-white hover:text-ink"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
        <div className="md:text-right">
          <p className="text-sm text-neutral-300">{dict.open}</p>
          <a href={`mailto:${EMAIL}`} className="mt-3 inline-block rounded-full bg-white px-5 py-2 text-sm text-ink">
            {EMAIL}
          </a>
        </div>
      </div>
      <p className="pb-6 text-center text-xs text-neutral-400">{dict.rights}</p>
    </footer>
  );
}
