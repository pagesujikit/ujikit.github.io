import Image from "next/image";

import interfaceAppPhoto from "@/assets/img/interface-app-photo.webp";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import { CV_URL, EMAIL, whatsappUrl } from "@/data/site";

export function Contact({ dict }: { dict: Dictionary["contact"] }) {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-4xl leading-tight font-light text-neutral-500 sm:text-5xl">
            {dict.titlePrefix} <span className="text-ink">{dict.titleHighlight}</span>
          </h2>
          <p className="mt-6 max-w-sm text-neutral-500">
            {dict.body}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="border border-ink px-5 py-2 text-sm transition hover:bg-ink hover:text-white"
            >
              {dict.talk}
            </a>
            <a
              href={whatsappUrl(dict.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#25D366] px-5 py-2 text-sm text-[#128C7E] transition hover:bg-[#25D366] hover:text-white"
            >
              {dict.whatsapp}
            </a>
            <a href={CV_URL} className="bg-ink px-5 py-2 text-sm text-white transition hover:bg-neutral-700">
              {dict.cv}
            </a>
          </div>
        </div>
        <div className="relative aspect-4/3 overflow-hidden rounded-xs">
          <Image
            src={interfaceAppPhoto}
            alt="Ujik"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}
