import Link from "next/link";

import type { Dictionary } from "@/app/[lang]/dictionaries";
import { locales, localePath, type Locale } from "@/lib/i18n";

export function Navbar({ lang, dict }: { lang: Locale; dict: Dictionary["nav"] }) {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 text-sm">
        <a href="#home" className="font-medium">
          ujik.
        </a>
        <ul className="flex items-center gap-5 sm:gap-8">
          <li>
            <a href="#home" className="font-medium">
              {dict.home}
            </a>
          </li>
          <li>
            <a href="#projects" className="hidden text-neutral-500 transition hover:text-ink sm:inline">
              {dict.projects}
            </a>
          </li>
          <li>
            <a href="#experience" className="hidden text-neutral-500 transition hover:text-ink sm:inline">
              {dict.companies}
            </a>
          </li>
          <li>
            <a href="#contact" className="text-neutral-500 transition hover:text-ink">
              {dict.contact}
            </a>
          </li>
          <li>
            <a href="#about" className="text-neutral-500 transition hover:text-ink">
              {dict.about}
            </a>
          </li>
          <li className="flex items-center gap-1 text-xs" aria-label={dict.language}>
            {locales.map((l, i) => (
              <span key={l} className="flex items-center gap-1">
                {i > 0 && <span className="text-neutral-300">/</span>}
                {l === lang ? (
                  <span className="font-medium" aria-current="true">
                    {l.toUpperCase()}
                  </span>
                ) : (
                  <Link href={localePath(l)} hrefLang={l} className="text-neutral-400 transition hover:text-ink">
                    {l.toUpperCase()}
                  </Link>
                )}
              </span>
            ))}
          </li>
        </ul>
      </nav>
    </header>
  );
}
