import type { StaticImageData } from "next/image";

import bomber from "@/assets/img/companies/bomber.webp";
import djuraganKreatif from "@/assets/img/companies/djuragan-kreatif.webp";
import konncoStudio from "@/assets/img/companies/konnco-studio.webp";
import royalDparagon from "@/assets/img/companies/royal-dparagon.webp";
import telkomIndonesia from "@/assets/img/companies/telkom-indonesia.webp";

export type ExperienceId = "konncoStudio" | "bomber" | "telkom" | "royalDparagon" | "djuragan";

export type Experience = {
  id: ExperienceId;
  company: string;
  logo: StaticImageData;
  /** Logo box size in px. Falls back to LOGO_SIZE. */
  logoSize?: { height: number; maxWidth: number };
};

export const LOGO_SIZE = { height: 56, maxWidth: 112 };

export const experiences: Experience[] = [
  { id: "konncoStudio", company: "Konnco Studio", logo: konncoStudio, logoSize: { height: 56, maxWidth: 112 } },
  { id: "bomber", company: "Bomber Co., Ltd", logo: bomber, logoSize: { height: 45, maxWidth: 112 } },
  { id: "telkom", company: "Telkom Indonesia", logo: telkomIndonesia, logoSize: { height: 50, maxWidth: 112 } },
  { id: "royalDparagon", company: "PT. Royal DParagon Land", logo: royalDparagon, logoSize: { height: 56, maxWidth: 112 } },
  { id: "djuragan", company: "PT. Djuragan Kreatif Indonesia", logo: djuraganKreatif, logoSize: { height: 56, maxWidth: 112 } },
];
