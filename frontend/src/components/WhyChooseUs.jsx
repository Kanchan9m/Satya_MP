
import {
  ShieldCheck,
  Users,
  Zap,
  Settings,
  MessageCircle,
} from "lucide-react";

const benefits = [
  {
    title: "Professional & Reliable",
    description: "Dependable workforce for your business.",
    Icon: ShieldCheck,
    color: "text-orange-500",
  },
  {
    title: "Wide Range of Workforce",
    description: "Workers for different industries and roles.",
    Icon: Users,
    color: "text-blue-600",
  },
  {
    title: "Fast Hiring Process",
    description: "Find suitable candidates efficiently.",
    Icon: Zap,
    color: "text-orange-500",
  },
  {
    title: "Customized Staffing Solutions",
    description: "Staffing based on your requirements.",
    Icon: Settings,
    color: "text-blue-600",
  },
  {
    title: "Transparent Communication",
    description: "Clear communication throughout the process.",
    Icon: MessageCircle,
    color: "text-blue-600",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#F3F7FD] py-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* Section heading */}
        <div className="mb-7 text-center">
          <h2 className="text-2xl font-bold text-[#102B55]">
            Why Choose Satya Manpower?
          </h2>

          <p className="mt-2 text-sm text-gray-600">
            We are committed to providing reliable and quality manpower solutions.
          </p>
        </div>

        {/* Benefit cards */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {benefits.map(({ title, description, Icon, color }) => (
            <div
              key={title}
              className="flex min-h-[150px] flex-col items-center justify-center rounded-xl border border-gray-200 bg-white p-4 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <Icon size={30} className={color} strokeWidth={2.2} />

              <h3 className="mt-3 text-sm font-bold leading-5 text-[#102B55]">
                {title}
              </h3>

              <p className="mt-2 text-xs leading-4 text-gray-500">
                {description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
