
import skilledImage from "../assets/security.jpg";
import semiSkilledImage from "../assets/semi-skilled.png";
import unskilledImage from "../assets/unskilled.avif";
import permanentImage from "../assets/permanent.png";
import temporaryImage from "../assets/temporary.png";

const services = [
  {
    title: "Skilled Workforce",
    description: "Trained professionals for specialized roles.",
    image: skilledImage,
  },
  {
    title: "Semi-Skilled Workforce",
    description: "Experienced workers for operational roles.",
    image: semiSkilledImage,
  },
  {
    title: "Unskilled Workforce",
    description: "General workforce for various industries.",
    image: unskilledImage,
  },
  {
    title: "Permanent Staffing",
    description: "Long-term workforce solutions.",
    image: permanentImage,
  },
  {
    title: "Temporary & Contract Staffing",
    description: "Flexible staffing for short-term needs.",
    image: temporaryImage,
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-[#F3F7FD] py-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <div className="mb-7 text-center">
          <h2 className="text-2xl font-bold text-[#102B55]">
            Our Manpower Services
          </h2>

          <p className="mt-2 text-sm text-gray-600">
            Flexible workforce solutions for all types of businesses.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className="h-32 w-full object-cover"
              />

              <div className="p-3">
                <h3 className="text-sm font-bold leading-5 text-[#102B55]">
                  {service.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
