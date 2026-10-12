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
    <section id="contact" className="bg-[#F3F7FD] py-12">
      {/* <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 md:grid-cols-2 lg:px-8"> */}

        {/* Contact Information */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
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
        {/* <div> */}
        <div className="grid items gap-6 lg:grid-cols-2 lg:gap-7">
          <div>
          <p className="text-base font-bold uppercase tracking-wider text-orange-500">
            We're Here to Help
          </p>

          <h2 className="mt-2 max-w-md text-base font-bold text-[#102B55]">
            Get in Touch with Our Team
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
        <div className="min-w-0 overflow-hidden rounded-xl border border-slate-200">

        
        <iframe aria-label='Send us a Message'
          height="600"
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
