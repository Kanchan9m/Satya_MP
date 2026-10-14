
import aboutImage from "../assets/about-us.avif";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-[#F3F7FD] py-14 md:py-20"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">

        {/* Left: Team Image */}
        <div className="relative">
          <img
            src={aboutImage}
            alt="Professional team working together"
            className="h-[320px] w-full rounded-xl object-cover shadow-md sm:h-[420px] lg:h-[500px]"
          />

          {/* Small decorative accent */}
          <div className="absolute -bottom-3 -left-3 -z-10 h-24 w-24 rounded-xl bg-orange-500/20" />
        </div>

        {/* Right: About Content */}
        <div>
          <p className="text-sm font-extrabold tracking-[0.25em] text-gray-400">
            ABOUT US
          </p>

          <h2 className="mt-4 text-lg font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-[46px]">
            Built on Trust,
            <br />
            {/* <span className="text-[#164A96]"> */}
            <span className="text-orange-500 font-bold">
              Driven by People
            </span>
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-600">
            At Satya Manpower Services, we believe that the right people are 
            the foundation of every successful business. As a dedicated manpower 
            and HR recruitment agency, we are committed to connecting talented
             professionals with trusted employers across various industries.

          </p>

          <p className="mt-4 text-sm leading-7 text-gray-500 sm:text-base">
            Founded with the vision of delivering reliable, efficient,
             and cost-effective staffing solutions, we help businesses find skilled, 
             semi-skilled, and unskilled manpower to meet their workforce needs. Whether 
             you require temporary staff, permanent employees, or contract-based hiring, 
             our experienced team ensures a smooth and hassle-free recruitment process.
          </p>

          {/* Contact Button */}
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 text-base font-semibold text-white no-underline transition duration-200 hover:bg-orange-500"
          >
            Learn More
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
