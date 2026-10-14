import heroImage from "../assets/Hero-sectionimage.png";
import { motion } from "motion/react"

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[520px] overflow-hidden"
    >
      <img
        src={heroImage}
        alt="Satya Manpower Workforce"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-white from-0% via-white/80 via-35% via-white/70 via-50% to-transparent to-70%"/>

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex min-h-[520px] items-center">
          <div className="max-w-[550px]">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 2, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold
                        leading-[1.1] tracking-tight text-[#102B55]"
              >
                Connecting Businesses
                <br />
                With the Right Workforce
            </motion.h1>


            <p className="mt-5 max-w-[500px] text-base leading-relaxed text-gray-700 md:text-lg">
              {/* Skilled, semi-skilled and unskilled manpower solutions
              for businesses across various industries. */}
              From skilled Labour to workforce contractors, we deliver
               relieable staffing solutions for all industries.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-lg bg-orange-500 px-6 py-3 font-semibold text-base text-white no-underline shadow-md transition duration-200 hover:bg-orange-600"
              >
                Request Manpower
              </a>
              <a
                href="#jobs"
                className="rounded-lg border-2 border-blue-500 bg-white px-6 py-3 font-semibold text-base text-blue no-underline transition duration-200 hover:bg-blue-500 hover:text-white"
              >
                Find a Job
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
