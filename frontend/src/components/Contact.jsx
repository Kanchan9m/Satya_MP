import { useState } from "react";
import { Phone, Mail, MapPin, ExternalLink  } from "lucide-react";


const OFFICE_ADDRESS =
  "235 Street 7/1 Block-B Sindhu Farm Road Meethapur Badarpur New Delhi 110044";

const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1604.2614014594344!2d77.31763565129474!3d28.492567388238893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce71d1aa2779d%3A0x9a3b1bc1a734adb6!2sSindhu%20Farm%20Rd%2C%20Mithapur%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1791871602745!5m2!1sen!2sin`;

const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  OFFICE_ADDRESS
)}`;


const Contact = () => {

  return (
    <section id="contact" className="bg-[#F3F7FD] py-12">

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mx-auto mb-9 max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.22em] text-orange-600 sm:text-sm">
            <span className="h-px w-7 bg-orange-500" />
            Contact Us
            <span className="h-px w-7 bg-orange-500" />
          </div>

          <h2 className="text-lg font-extrabold leading-tight tracking-tight text-[#102B55] sm:text-4xl lg:text-[44px]">
            Let's Build Your{" "}
            <span className="text-orange-600">
              Workforce Together
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Tell us what your business needs. Our team is here to
            help you find the right manpower solutions for your
            requirements.
          </p>
        </div>
        <div className="grid items-stretch gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-7">

          <div className="flex min-w-0 flex-col overflow-hidden rounded-3xl border border-white bg-white p-5 shadow-[0_12px_40px_rgba(16,43,85,0.07)] sm:p-7 lg:p-8">

            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
                  <MapPin size={25} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
                    Our Office
                  </p>

                  <h3 className="mt-1 text-2xl font-extrabold text-[#102B55] sm:text-3xl">
                    Head Office
                  </h3>
                </div>
              </div>

              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-orange-50 px-4 py-3 text-sm font-semibold text-orange-600 transition hover:bg-orange-500 hover:text-white"
              >
                Get Directions
                <ExternalLink size={16} />
              </a>
            </div>

            <p className="mt-5 pl-0 text-sm leading-7 text-slate-600 sm:pl-16 sm:text-base">
              235, Street 7/1, Block-B, Sindhu Farm Road,
              Meethapur, Badarpur, New Delhi – 110044
            </p>

            <div className="my-7 border-t border-slate-200" />

            <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
              <a
                href="tel:+918882891620"
                className="group flex min-w-0 items-center gap-3"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-600 transition group-hover:bg-orange-500 group-hover:text-white">
                  <Phone size={20} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-slate-500">Call Us</p>
                  <p className="mt-1 break-words text-sm font-semibold text-[#102B55] transition group-hover:text-orange-600">
                    +91-8882891620 | +91-9555688016
                  </p>
                </div>
              </a>

              <a
                href="mailto:sm.services2914@gmail.com"
                className="group flex min-w-0 items-center gap-3"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-600 transition group-hover:bg-orange-500 group-hover:text-white">
                  <Mail size={20} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-slate-500">Email Us</p>
                  <p className="mt-1 break-all text-sm font-semibold text-[#102B55] transition group-hover:text-orange-600">
                    sm.services2914@gmail.com
                  </p>
                </div>
              </a>
            </div>

            <div className="relative mt-6 h-[230px] shrink-0 overflow-hidden rounded-2xl border border-slate-200 sm:h-[250px]">
              <iframe
                title="Satya Manpower office location"
                src={mapUrl}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        
        <div className="min-w-0 overflow-hidden rounded-xl border border-slate-200">
        
        <iframe aria-label='Send us a Message'
          height="700"
          width="100%"
          style={{ border: "none" }}
         src='https://forms.zohopublic.in/skvkanchan2003gm1/form/ContactUs/formperma/q9ze_QmTTnkLzzKDqakZ_T8N_COv93vkrkGBydvzYGE' >
        </iframe>
        </div>

      </div>
      </div>
    </section>
  );
};

export default Contact;
