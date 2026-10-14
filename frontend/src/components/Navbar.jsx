import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "../assets/logo.png";

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
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-[#E0E4E6] shadow-sm">
      <nav className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex min-h-[88px] w-full items-center justify-between gap-6">

          <a href="#home"
              className="flex shrink-0 items-center gap-3"
              aria-label="Satya Manpower Services home"
            >
              <img
                src={logo}
                alt="Satya Manpower logo"
                className="h-13 w-13 shrink-0 object-contain"
              />
            <div className="flex flex-col justify-center">
              <span className="text-4xl font-extrabold leading-none tracking-wide text-[#565D63] sm:text-3xl">
                SMS
              </span>

              <span className="mt-2 whitespace-nowrap text-sm font-medium leading-tight text-[#565D63] sm:text-base">
                Satya Manpower Services
              </span>
            </div>
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
