import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { label: "Home", href: "/" },
    { label: "Plans", href: "/plans" },
    { label: "Classes", href: "/classes" },
    { label: "Trainers", href: "/trainers" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/95 text-slate-100 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="/" className="flex items-center gap-3">
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=945,h=683,fit=crop/AE02e48N13fqNoMG/logo-black-mnlnexDn47U9NrQ6.png"
            alt="Sky Gym logo"
            className="h-11 w-11 rounded-full border border-white/10 object-cover shadow-sm"
          />
          <div className="leading-tight">
            <p className="text-lg font-semibold tracking-[0.25em]">SKY GYM</p>
            <p className="text-[10px] uppercase tracking-[0.35em] text-slate-400">
              Strength • Training • Community
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-4 md:flex">
          <ul className="flex items-center gap-6 text-sm font-medium">
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition hover:text-amber-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="/signin" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-400">
            Login
          </a>
        </div>

        <button
          type="button"
          className="rounded-md border border-white/10 p-2 text-sm md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#050505] px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-3 text-sm">
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="block transition hover:text-amber-400">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="/signin" className="block font-semibold text-amber-400">
                Login
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
