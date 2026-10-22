import { LottiePlayer } from "./lottie-player";

const tags = ["Programmer Web", "Programmer Aplikasi Mobile", "React", "Nest JS", "React JS"];

export function About() {
  return (
    <section id="about" className="bg-ink py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-4xl leading-tight font-light sm:text-5xl">
              Rekayasa dengan
              <br />
              Kejelasan dan Tujuan.
            </h2>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-neutral-300">
              Saya developer yang menyukai teknologi dan dunia otomotif. Saya fokus membangun software yang jelas
              dan andal &mdash; bukan hanya soal tampilannya, tetapi bagaimana cara kerjanya dan bagaimana ia
              menyelesaikan masalah nyata. Saya peduli pada detail: saya mengubah desain menjadi antarmuka
              pixel-perfect, dengan spasi, tipografi, dan warna yang presisi hingga ke piksel.
            </p>
          </div>
          <div className="overflow-hidden rounded-md">
            <LottiePlayer label="Selected app preview" className="mx-auto h-80 w-full p-4" />
          </div>
        </div>
        <ul className="mt-16 flex flex-wrap justify-between gap-x-6 gap-y-4 text-xs">
          {tags.map((t) => (
            <li key={t} className="border-b border-white/70 pb-1">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
