export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 text-sm">
        <a href="#home" className="font-medium">
          ujik.
        </a>
        <ul className="flex items-center gap-5 sm:gap-8">
          <li>
            <a href="#home" className="font-medium">
              Beranda
            </a>
          </li>
          <li>
            <a href="#projects" className="hidden text-neutral-500 transition hover:text-ink sm:inline">
              Proyek
            </a>
          </li>
          <li>
            <a href="#experience" className="hidden text-neutral-500 transition hover:text-ink sm:inline">
              Perusahaan
            </a>
          </li>
          <li>
            <a href="#contact" className="text-neutral-500 transition hover:text-ink">
              Kontak
            </a>
          </li>
          <li>
            <a href="#about" className="text-neutral-500 transition hover:text-ink">
              Tentang
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
