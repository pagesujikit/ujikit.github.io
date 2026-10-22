import type { Dictionary } from "@/app/[lang]/dictionaries";
import { skills } from "@/data/skills";

export function Skills({ dict }: { dict: Dictionary["skills"] }) {
  return (
    <section id="what-i-do" className="mx-auto max-w-6xl px-6 pt-20">
      <h2 className="text-3xl font-light text-ink sm:text-4xl">{dict.title}</h2>
      <p className="mt-3 max-w-xl text-neutral-500">
        {dict.subtitle}
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {skills.map((s) => (
          <article key={s.id} className="flex flex-col rounded-md bg-white p-6 shadow-xs">
            <h3 className="text-lg font-medium">{dict.items[s.id].title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-500">{dict.items[s.id].description}</p>
            <p className="mt-auto pt-6 text-xs tracking-wide text-neutral-400 uppercase">{dict.stackLabel}</p>
            <ul className="mt-2 flex flex-wrap gap-2 text-xs">
              {s.tech.map((t) => (
                <li key={t} className="rounded-full border border-neutral-300 px-3 py-1">
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
