
import heroImage from "../assets/Hero-sectionimage.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[520px] overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Satya Manpower Workforce"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* White Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-white from-0% via-white/80 via-35% via-white/70 via-50% to-transparent to-70%"
      />


      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex min-h-[520px] items-center">
          <div className="max-w-[550px]">

            <h1 className="text-4xl font-bold leading-[1.1] text-[#0B2A55] md:text-5xl lg:text-[52px]">
              Connecting Businesses
              <br />
              With the Right Workforce
            </h1>

            <p className="mt-5 max-w-[500px] text-base leading-relaxed text-gray-700 md:text-lg">
              Skilled, semi-skilled and unskilled manpower solutions
              for businesses across various industries.
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
