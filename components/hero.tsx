import Image from "next/image";

import interfaceAppPhoto from "@/assets/img/interface-app-photo.webp";
import { projects } from "@/data/projects";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import { whatsappUrl } from "@/data/site";
import { TypingText } from "./typing-text";

export function Hero({ dict, whatsappMessage }: { dict: Dictionary["hero"]; whatsappMessage: string }) {
  const stats = [
    { value: "5+", label: dict.stats.achievements },
    { value: "6+", label: dict.stats.years },
    // Matches the legacy page, which showed projects.length - 1
    { value: `${projects.length - 1}+`, label: dict.stats.projects },
  ];

  return (
    <section id="home" className="grid-bg relative overflow-hidden bg-neutral-100 pt-28">
      <div className="mx-auto grid max-w-6xl items-end gap-8 px-6 md:grid-cols-2">
        <div className="pb-14 md:pb-24">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-ink/70 bg-white px-3 py-1 text-xs">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Fauzi Zaki{" "}
            <span className="text-neutral-500">
              / <TypingText text={dict.role} />
            </span>
          </span>
          <h1 className="text-4xl leading-tight font-light text-neutral-500 sm:text-5xl md:text-6xl">
            {dict.titlePrefix} <span className="font-normal text-ink">{dict.website}</span> {dict.or}{" "}
            <span className="font-normal text-ink">{dict.mobile}</span>
          </h1>
          <p className="mt-6 max-w-sm text-neutral-500">
            {dict.introPrefix} <strong className="font-medium text-ink">{dict.introName}</strong>. {dict.introSuffix}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="border border-ink px-5 py-2 text-sm transition hover:bg-ink hover:text-white">
              {dict.talk}
            </a>
            <a
              href={whatsappUrl(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#25D366] px-5 py-2 text-sm text-[#128C7E] transition hover:bg-[#25D366] hover:text-white"
            >
              {dict.whatsapp}
            </a>
            <a href="#projects" className="bg-ink px-5 py-2 text-sm text-white transition hover:bg-neutral-700">
              {dict.work}
            </a>
          </div>
          <dl className="mt-12 grid max-w-md grid-cols-3 gap-4 text-sm">
            {stats.map((s) => (
              <div key={s.value} className="border-l border-ink pl-3">
                <dt className="text-3xl font-light">{s.value}</dt>
                <dd className="mt-1 text-xs whitespace-pre-line text-neutral-500">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="flex justify-center">
          <Image
            src={interfaceAppPhoto}
            alt={dict.imageAlt}
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="h-80 w-auto object-contain md:h-160"
          />
        </div>
      </div>
    </section>
  );
}
