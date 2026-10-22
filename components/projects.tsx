"use client";

import Image from "next/image";
import { useState } from "react";

import { projectFilters, projects, type ProjectCategory } from "@/data/projects";

export function Projects() {
  const [active, setActive] = useState<"all" | ProjectCategory>("all");
  const visible = active === "all" ? projects : projects.filter((p) => p.categories.includes(active));

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-3xl font-light text-neutral-500 sm:text-4xl">
        Proyek yang telah saya <span className="text-ink">bangun dan rilis dengan sukses.</span>
      </h2>
      <div className="mt-10 flex flex-wrap gap-2 text-sm" role="group" aria-label="Filter proyek">
        {projectFilters.map((f) => {
          const on = f.key === active;
          return (
            <button
              key={f.key}
              type="button"
              aria-pressed={on}
              onClick={() => setActive(f.key)}
              className={`rounded-full border px-4 py-1.5 transition ${
                on
                  ? "border-ink bg-ink text-white"
                  : "border-neutral-300 text-neutral-600 hover:border-ink hover:text-ink"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>
      <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {visible.length === 0 && (
          <p className="col-span-full text-sm text-neutral-500">Belum ada proyek di kategori ini.</p>
        )}
        {visible.map((p) => (
          <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="group block">
            <div
              className={`relative aspect-4/3 overflow-hidden rounded-xs bg-linear-to-br ${p.cover} transition group-hover:opacity-90`}
            >
              <Image
                src={p.image}
                alt={`${p.name} preview`}
                fill
                sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="mt-3 flex justify-between text-sm">
              <span className="font-medium">{p.name}</span>
            </div>
            <div className="mt-1 flex justify-between text-xs text-neutral-400">{p.type}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
