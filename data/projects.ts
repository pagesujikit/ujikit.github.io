import type { StaticImageData } from "next/image";

import clevis from "@/assets/img/clevis.webp";
import djuraganVoucher from "@/assets/img/djuragan-voucher.webp";
import djurkam from "@/assets/img/djurkam.webp";
import dparagon from "@/assets/img/dparagon.webp";
import golferImage from "@/assets/img/golfer-image.webp";
import golferImage2 from "@/assets/img/golfer-image2.webp";
import tompsBuilding from "@/assets/img/tomps-building-image.webp";

export type ProjectCategory = "web" | "mobile" | "pos" | "other";

export type ProjectId =
  | "golferWeb"
  | "golferMobile"
  | "golferPos"
  | "tompsBuilding"
  | "clevisPartner"
  | "djuraganVoucher"
  | "djurkam"
  | "dparagon";

export type Project = {
  id: ProjectId;
  name: string;
  categories: ProjectCategory[];
  /** Tailwind gradient classes shown behind the image. */
  cover: string;
  image: StaticImageData;
  url: string;
};

// Newest first.
export const projects: Project[] = [
  { id: "golferWeb", name: "Golfer Web", categories: ["web"], cover: "from-emerald-400 via-lime-200 to-green-600", image: golferImage, url: "https://topgolfer.app/zh" },
  { id: "golferMobile", name: "Golfer Mobile", categories: ["mobile"], cover: "from-green-500 via-emerald-200 to-lime-300", image: golferImage, url: "https://play.google.com/store/apps/details?id=com.bomber.golferapp&hl=id" },
  { id: "golferPos", name: "Golfer POS", categories: ["pos"], cover: "from-neutral-800 via-green-600 to-emerald-300", image: golferImage2, url: "https://play.google.com/store/apps/details?id=com.bomber.golferpos&hl=id" },
  { id: "tompsBuilding", name: "Tomps Building", categories: ["mobile"], cover: "from-amber-300 via-orange-300 to-neutral-700", image: tompsBuilding, url: "https://play.google.com/store/apps/details?id=com.hunianaja&hl=id" },
  { id: "clevisPartner", name: "Clevis Partner", categories: ["mobile"], cover: "from-sky-300 via-cyan-600 to-teal-800", image: clevis, url: "https://play.google.com/store/apps/details?id=com.clevis.app&hl=id" },
  { id: "djuraganVoucher", name: "Djuragan Voucher (GORDIG.ID)", categories: ["mobile"], cover: "from-sky-200 via-blue-400 to-indigo-600", image: djuraganVoucher, url: "https://play.google.com/store/apps/details?id=com.djuraganvoucher.member&hl=id" },
  { id: "djurkam", name: "Djuragan Kamar (DJURKAM)", categories: ["mobile"], cover: "from-yellow-300 via-amber-500 to-neutral-800", image: djurkam, url: "https://play.google.com/store/apps/details?id=com.djuragankamar.ids&hl=id" },
  { id: "dparagon", name: "D'Paragon", categories: ["mobile"], cover: "from-neutral-800 via-sky-400 to-cyan-300", image: dparagon, url: "https://play.google.com/store/apps/details?id=com.dparagon.app&hl=id" },
];

export const projectFilters = ["all", "web", "mobile", "pos"] as const;
export type ProjectFilter = (typeof projectFilters)[number];
