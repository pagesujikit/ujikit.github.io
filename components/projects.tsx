"use client";

import Image from "next/image";
import { useState } from "react";

import type { Dictionary } from "@/app/[lang]/dictionaries";
import { projectFilters, projects, type ProjectFilter } from "@/data/projects";

export function Projects({ dict }: { dict: Dictionary["projects"] }) {
  const [active, setActive] = useState<ProjectFilter>("all");
  const visible = active === "all" ? projects : projects.filter((p) => p.categories.includes(active));

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-3xl font-light text-neutral-500 sm:text-4xl">
        {dict.titlePrefix} <span className="text-ink">{dict.titleHighlight}</span>
      </h2>
      <div className="mt-10 flex flex-wrap gap-2 text-sm" role="group" aria-label={dict.filterLabel}>
        {projectFilters.map((f) => {
          const on = f === active;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={on}
              onClick={() => setActive(f)}
              className={`rounded-full border px-4 py-1.5 transition ${
                on
                  ? "border-ink bg-ink text-white"
                  : "border-neutral-300 text-neutral-600 hover:border-ink hover:text-ink"
              }`}
            >
              {dict.filters[f]}
            </button>
          );
        })}
      </div>
      <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {visible.length === 0 && (
          <p className="col-span-full text-sm text-neutral-500">{dict.empty}</p>
        )}
        {visible.map((p) => (
          <a key={p.id} href={p.url} target="_blank" rel="noopener noreferrer" className="group block">
            <div
              className={`relative aspect-4/3 overflow-hidden rounded-xs bg-linear-to-br ${p.cover} transition group-hover:opacity-90`}
            >
              <Image
                src={p.image}
                alt={`${p.name} ${dict.previewAlt}`}
                fill
                sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="mt-3 flex justify-between text-sm">
              <span className="font-medium">{p.name}</span>
            </div>
            <div className="mt-1 flex justify-between text-xs text-neutral-400">{dict.items[p.id]}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
