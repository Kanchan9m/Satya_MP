
import { motion } from "motion/react";
import { Target, Eye, ArrowUpRight } from "lucide-react";

const MissionVision = () => {
  const cardAnimation = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <section
      id="mission-vision"
      className="relative overflow-hidden bg-[#F3F7FD] py-5 sm:py-16 lg:py-20"
    >
      <div className="pointer-events-none absolute -left-32 top-20 h-64 w-64 rounded-full bg-orange-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-64 w-64 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-9 text-center sm:mb-12">
            
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-orange-600">
            Our Purpose
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#102B55] sm:text-4xl lg:text-5xl">
            What Guides{" "}
            <span className="text-orange-500">Satya Manpower</span>
          </h2>

        </motion.div>

        {/* Mission & Vision Cards */}
        <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">

          <motion.article
            {...cardAnimation}
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 shadow-[0_8px_30px_rgba(16,43,85,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(16,43,85,0.10)] sm:p-9 lg:p-10"
          >
            <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-orange-50 transition-colors duration-300 group-hover:bg-orange-100/70" />

            <div className="relative flex flex-1 flex-col">
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition-transform duration-300 group-hover:scale-105">
                  <Target size={28} strokeWidth={1.8} />
                </div>

                <span className="text-4xl font-extrabold text-orange-100/90">
                  01
                </span>
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
                What Drives Us
              </p>

              <h3 className="mt-2 text-2xl font-bold text-[#102B55] sm:text-3xl">
                Our Mission
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                To provide dependable manpower solutions by connecting
                the right talent with the right opportunities while
                maintaining professionalism, integrity, and customer
                satisfaction.
              </p>

              <div className="mt-auto pt-7">
                <div className="h-1 w-12 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-20" />
              </div>
            </div>
          </motion.article>

          <motion.article
            {...cardAnimation}
            transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-[#102B55] p-7 shadow-[0_12px_35px_rgba(16,43,85,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(16,43,85,0.20)] sm:p-9 lg:p-10"
          >
            {/* Minimal decorative circles */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full border border-white/10" />

            <div className="relative flex flex-1 flex-col">
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-orange-400 ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-105">
                  <Eye size={28} strokeWidth={1.8} />
                </div>

                <span className="text-4xl font-extrabold text-white/10">
                  02
                </span>
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-orange-400">
                Where We're Going
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                Our Vision
              </h3>

              <p className="mt-4 text-sm leading-7 text-blue-100 sm:text-base sm:leading-8">
                To become one of India's most trusted manpower and HR
                service providers, delivering quality workforce
                solutions that support business growth and create
                opportunities for job seekers.
              </p>

              <div className="mt-auto flex items-center gap-2 pt-7 text-sm font-semibold text-orange-400">
                Building a stronger workforce
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
            </div>
          </motion.article>

        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 text-center sm:mt-10 sm:flex-row sm:gap-4"
        >
          <span className="hidden h-px w-10 bg-orange-300 sm:block" />

          <p className="text-sm font-semibold text-[#102B55] sm:text-base">
            Connecting talent. Supporting growth. Building trust.
          </p>

          <span className="hidden h-px w-10 bg-orange-300 sm:block" />
        </motion.div>

      </div>
    </section>
  );
};

export default MissionVision;
