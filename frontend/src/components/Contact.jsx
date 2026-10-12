
import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const contactInfo = [
  {
    title: "Call Us",
    value: "+91 9555688016",
    Icon: Phone,
  },
  {
    title: "Email Us",
    value: "sm.services2914@gmail.com",
    Icon: Mail,
  },
  {
    title: "Visit Us",
    value: "235 street- 7/1 Block-B Sindhu Farm Road Meethapur Badarpur ​New Delhi - 110044",
    Icon: MapPin,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Connect your backend API here to send the message.
    console.log("Contact form data:", formData);
  };

  return (
    <section id="contact" className="bg-slate-50 py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 md:grid-cols-2 lg:px-8">

        {/* Contact Information */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
            Get in Touch
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#102B55]">
            Let's Work Together
          </h2>

          <p className="mt-3 max-w-md text-sm leading-6 text-gray-600">
            Need reliable manpower for your business? Contact our team
            and tell us about your workforce requirements.
          </p>

          <div className="mt-7 space-y-5">
            {contactInfo.map(({ title, value, Icon }) => (
              <div key={title} className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Icon size={20} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[#102B55]">
                    {title}
                  </h3>

                  <p className="mt-1 text-sm text-gray-600">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7"
        >
          <h3 className="mb-5 text-xl font-bold text-[#102B55]">
            Send Us a Message
          </h3>

          <div className="space-y-4">
            <div>
              <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-gray-700">
                Full Name
              </label>

              <input
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                autoComplete="name"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-gray-700">
                  Email Address
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label htmlFor="contact-phone" className="mb-1.5 block text-sm font-medium text-gray-700">
                  Phone Number
                </label>

                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  autoComplete="tel"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-gray-700">
                Your Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your requirements..."
                rows={4}
                required
                className="w-full resize-y rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              Send Message
            </button>
          </div>
        </form>

      </div>
    </section>
  );
};

export default Contact;
