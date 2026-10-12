import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Jobs", href: "#jobs" },
  { label: "For Employers", href: "#employers" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <nav className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex min-h-[88px] w-full items-center justify-between gap-6">

          <a href="#home" className="shrink-0 text-left no-underline" onClick={() => setMenuOpen(false)}
          >
            <span className="block text-3xl font-extrabold leading-tight tracking-tight text-[#102B55]">
              SATYA<span className="text-orange-500">.</span>
            </span>
            <span className="mt-0.5 block text-xs font-medium tracking-wide text-gray-500">
              Manpower Services
            </span>
          </a>

          <div className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href}
                className="whitespace-nowrap text-base font-semibold text-gray-700 no-underline transition-colors duration-200 hover:text-orange-500"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-orange-500 px-5 py-3 text-base font-bold text-white no-underline shadow-sm transition duration-200 hover:bg-orange-600 hover:shadow-md"
            >
              Request Manpower
              <ArrowRight size={16} />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-[#102B55] transition hover:bg-gray-50 lg:hidden"
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-gray-100 py-4 lg:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-gray-700 no-underline transition hover:bg-orange-50 hover:text-orange-600"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-white no-underline hover:bg-orange-600"
              >
                Request Manpower
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
