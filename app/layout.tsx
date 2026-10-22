import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Ujikit Portofolio",
  verification: {
    google: "iYAyJVM6wjDKcg4kjy3sTsONL0-74Z-4yDTBjpGVK1o",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${spaceGrotesk.variable} antialiased`}>
      <body className="bg-paper font-sans text-ink">{children}</body>
    </html>
  );
}
