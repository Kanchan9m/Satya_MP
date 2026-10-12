import {ArrowRight,Phone,Mail,MapPin,ShieldCheck,Sparkles,Factory,Truck,Wrench,
  Building2,Utensils,Users,} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "For Businesses", href: "#employers" },
  { label: "For Job Seekers", href: "#job-seekers" },
  { label: "Contact Us", href: "#contact" },
];

const services = [
  { label: "Security Guards", icon: ShieldCheck },
  { label: "Housekeeping", icon: Sparkles },
  { label: "Factory Workers", icon: Factory },
  { label: "Drivers & Helpers", icon: Truck },
  { label: "Electricians & Plumbers", icon: Wrench },
  { label: "Office Staff", icon: Building2 },
  { label: "Hospitality Staff", icon: Utensils },
  { label: "Temporary & Permanent Staffing", icon: Users },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B2042] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10">

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">

          <div>
            <a
              href="#home"
              className="inline-block text-2xl font-extrabold tracking-tight"
            >
              SATYA <span className="text-orange-500">MANPOWER</span>
            </a>

            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-300">
              Connecting businesses with dependable workforce solutions
              and helping people find the right opportunities.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 rounded-lg
              bg-orange-500 px-5 py-3 text-sm font-semibold text-white
              transition-all duration-300 hover:bg-orange-600
              hover:shadow-lg hover:shadow-orange-500/20"
            >
              Contact Our Team
              <ArrowRight size={17} />
            </a>
          </div>

          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-300 transition-colors
                    duration-200 hover:text-orange-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold">Our Services</h3>

            <ul className="mt-5 space-y-3">
              {services.map(({ label, icon: Icon }) => (
                <li key={label}>
                  <a
                    href="#services"
                    className="group flex items-start gap-2 text-sm
                    leading-5 text-slate-300 transition-colors
                    duration-200 hover:text-orange-400"
                  >
                    <Icon
                      size={16}
                      className="mt-0.5 shrink-0 text-orange-500"
                    />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold">Get in Touch</h3>

            <ul className="mt-5 space-y-5">
              <li className="flex items-start gap-3">
                <Phone
                  size={19}
                  className="mt-0.5 shrink-0 text-orange-500"
                />
                <div>
                  <p className="text-xs text-slate-400">Call Us</p>
                  <a
                    href="tel:+919555688016"
                    className="mt-1 block text-sm text-slate-200
                    transition-colors hover:text-orange-400"
                  >
                    +91 9555688016
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Mail
                  size={19}
                  className="mt-0.5 shrink-0 text-orange-500"
                />
                <div>
                  <p className="text-xs text-slate-400">Email Us</p>
                  <a
                    href="mailto:sm.services2914@gmail.com"
                    className="mt-1 block break-all text-sm text-slate-200
                    transition-colors hover:text-orange-400"
                  >
                    sm.services2914@gmail.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MapPin
                  size={19}
                  className="mt-0.5 shrink-0 text-orange-500"
                />
                <div>
                  <p className="text-xs text-slate-400">Office Address</p>
                  <p className="mt-1 text-sm leading-6 text-slate-200">
                    235, Street 7/1, Block-B,
                    Sindhu Farm Road, Meethapur,
                    Badarpur, New Delhi – 110044
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-6">
          <div className="flex flex-col items-center justify-between gap-4
          text-center sm:flex-row sm:text-left">
            <p className="text-xs leading-5 text-slate-400">
              © {new Date().getFullYear()} Satya Manpower Services.
              All rights reserved.
            </p>

            <a
              href="#home"
              className="text-xs text-slate-400 transition-colors
              hover:text-orange-400"
            >
              Back to top ↑
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
