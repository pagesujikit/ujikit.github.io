import { skills } from "@/data/skills";

export function Skills() {
  return (
    <section id="what-i-do" className="mx-auto max-w-6xl px-6 pt-20">
      <h2 className="text-3xl font-light text-ink sm:text-4xl">Apa yang Saya Kerjakan</h2>
      <p className="mt-3 max-w-xl text-neutral-500">
        Membangun aplikasi web yang skalabel, pengalaman mobile berperforma tinggi, dan infrastruktur server yang
        andal.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {skills.map((s) => (
          <article key={s.title} className="flex flex-col rounded-md bg-white p-6 shadow-xs">
            <h3 className="text-lg font-medium">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-500">{s.description}</p>
            <p className="mt-auto pt-6 text-xs tracking-wide text-neutral-400 uppercase">Teknologi Utama</p>
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
