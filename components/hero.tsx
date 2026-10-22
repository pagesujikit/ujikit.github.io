import Image from "next/image";

import interfaceAppPhoto from "@/assets/img/interface-app-photo.webp";
import { projects } from "@/data/projects";
import { WHATSAPP_URL } from "@/data/site";
import { TypingText } from "./typing-text";

const stats = [
  { value: "5+", label: <>Pencapaian di berbagai perusahaan teknologi</> },
  { value: "6+", label: <>Tahun Pengalaman<br />Membangun software</> },
  // Matches the legacy page, which showed projects.length - 1
  { value: `${projects.length - 1}+`, label: <>Proyek Selesai<br />Aplikasi web &amp; mobile</> },
];

export function Hero() {
  return (
    <section id="home" className="grid-bg relative overflow-hidden bg-neutral-100 pt-28">
      <div className="mx-auto grid max-w-6xl items-end gap-8 px-6 md:grid-cols-2">
        <div className="pb-14 md:pb-24">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-ink/70 bg-white px-3 py-1 text-xs">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Fauzi Zaki{" "}
            <span className="text-neutral-500">
              / <TypingText text="Frontend Developer" />
            </span>
          </span>
          <h1 className="text-4xl leading-tight font-light text-neutral-500 sm:text-5xl md:text-6xl">
            Mau bangun <span className="font-normal text-ink">Website</span> atau{" "}
            <span className="font-normal text-ink">Android / iOS?</span>
          </h1>
          <p className="mt-6 max-w-sm text-neutral-500">
            Panggil saja saya <strong className="font-medium text-ink">Ujik</strong>. Saya mengubah ide website
            menjadi solusi nyata &mdash; solusi &amp; pengembangan adalah passion saya.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="border border-ink px-5 py-2 text-sm transition hover:bg-ink hover:text-white">
              Ayo Ngobrol
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#25D366] px-5 py-2 text-sm text-[#128C7E] transition hover:bg-[#25D366] hover:text-white"
            >
              WhatsApp
            </a>
            <a href="#projects" className="bg-ink px-5 py-2 text-sm text-white transition hover:bg-neutral-700">
              Lihat Karya Saya
            </a>
          </div>
          <dl className="mt-12 grid max-w-md grid-cols-3 gap-4 text-sm">
            {stats.map((s) => (
              <div key={s.value} className="border-l border-ink pl-3">
                <dt className="text-3xl font-light">{s.value}</dt>
                <dd className="mt-1 text-xs text-neutral-500">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="flex justify-center">
          <Image
            src={interfaceAppPhoto}
            alt="Ujik"
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="h-80 w-auto object-contain md:h-160"
          />
        </div>
      </div>
    </section>
  );
}
