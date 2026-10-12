import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "For Businesses", href: "#employers" },
  { label: "For Job Seekers", href: "#jobs" },
  { label: "Contact Us", href: "#contact" },
];

const services = [
  "Skilled Manpower",
  "Semi-Skilled Manpower",
  "Unskilled Manpower",
  "Permanent Staffing",
  "Temporary Staffing",
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-[#0B2145] text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Company Information */}
          <div>
            <a
              href="#home"
              className="inline-block text-2xl font-bold text-white no-underline"
            >
              SATYA <span className="text-orange-400">MANPOWER</span>
            </a>

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-300">
              Connecting businesses with the right workforce through
              reliable, flexible, and quality manpower solutions.
            </p>

            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-2 rounded-md bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white no-underline transition hover:bg-orange-600"
            >
              Contact Our Team
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>

            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-300 no-underline transition hover:text-orange-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold">Our Services</h3>

            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-sm text-gray-300"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-semibold">Get in Touch</h3>

            <div className="mt-4 space-y-4">
              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-orange-400" />
                <p className="text-sm text-gray-300">
                  +91 XXXXXXXXXX
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-orange-400" />
                <p className="break-all text-sm text-gray-300">
                  info@satyamanpower.com
                </p>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-orange-400" />
                <p className="text-sm leading-6 text-gray-300">
                  Add your office address here
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-white/15 pt-6">
          <p className="text-center text-sm text-gray-400">
            © {currentYear} Satya Manpower Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
