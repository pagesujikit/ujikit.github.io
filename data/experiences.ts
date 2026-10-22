import type { StaticImageData } from "next/image";

import bomber from "@/assets/img/companies/bomber.webp";
import djuraganKreatif from "@/assets/img/companies/djuragan-kreatif.webp";
import konncoStudio from "@/assets/img/companies/konnco-studio.webp";
import royalDparagon from "@/assets/img/companies/royal-dparagon.webp";
import telkomIndonesia from "@/assets/img/companies/telkom-indonesia.webp";

export type Experience = {
  period: string;
  role: string;
  company: string;
  location: string;
  logo: StaticImageData;
  /** Logo box size in px. Falls back to LOGO_SIZE. */
  logoSize?: { height: number; maxWidth: number };
};

export const LOGO_SIZE = { height: 56, maxWidth: 112 };

export const experiences: Experience[] = [
  { period: "September 2026", role: "Frontend Developer", company: "Konnco Studio", location: "Bantul, Yogyakarta · Onsite", logo: konncoStudio, logoSize: { height: 56, maxWidth: 112 } },
  { period: "Jun 2025 – Jul 2026", role: "Fullstack Developer", company: "Bomber Co., Ltd", location: "Taiwan · Remote", logo: bomber, logoSize: { height: 45, maxWidth: 112 } },
  { period: "Feb 2021 – Mar 2025", role: "Frontend Developer (Middle)", company: "Telkom Indonesia", location: "Jakarta Selatan · Onsite", logo: telkomIndonesia, logoSize: { height: 50, maxWidth: 112 } },
  { period: "Jul 2019 – Des 2020", role: "Mobile Developer (Lead)", company: "PT. Royal DParagon Land", location: "Sleman, Yogyakarta · Onsite", logo: royalDparagon, logoSize: { height: 56, maxWidth: 112 } },
  { period: "Jul 2019 – Des 2020", role: "Mobile Developer", company: "PT. Djuragan Kreatif Indonesia", location: "Yogyakarta · Remote (Freelance)", logo: djuraganKreatif, logoSize: { height: 56, maxWidth: 112 } },
];
