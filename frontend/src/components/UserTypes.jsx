
import employerImage from "../assets/employer.jpg";
import jobSeekerImage from "../assets/job-seeker.jpg";
import { Users, UserRoundSearch, ArrowRight } from "lucide-react";


const UserTypes = () => {
  return (
    <section className="bg-[#F3F7FD] py-16">
    
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-20 md:grid-cols-2 lg:px-8">

        {/* For Businesses */}
        <div
          id="employers"
          className="relative h-[300px] overflow-hidden rounded-xl border border-gray-200 shadow-sm"
        >
          <img
            src={employerImage}
            alt="For Businesses"
            className="absolute inset-0 h-full w-full object-cover object-[60%_center]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 via-50% to-transparent" />

          <div className="relative z-10 flex h-full items-start gap-3 p-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <Users size={19} />
            </div>

            <div className="flex min-w-0 flex-col items-start">
              <h4 className="text-[17px] font-bold leading-5 text-[#102B55]">
                For Businesses
              </h4>

              <h5 className="mt-2 text-[14px] font-semibold leading-5 text-gray-800">
                Need reliable manpower?
              </h5>

              <p className="mt-1 max-w-[260px] text-[11px] leading-4 text-gray-600">
                Get skilled, semi-skilled or unskilled workforce as per your requirement.
              </p>

              <a
                href="#contact"
                className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-orange-500 px-3 py-2 text-[15px] font-semibold text-white no-underline hover:bg-orange-600"
              >
                Request Workforce
                <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>

        <div
          id="jobs"
          className="relative h-[300px] overflow-hidden rounded-xl border border-gray-200 shadow-sm"
        >
          <img
            src={jobSeekerImage}
            alt="For Job Seekers"
            className="absolute inset-0 h-full w-full object-cover object-[75%_center]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 via-50% to-transparent" />

          <div className="relative z-20 flex h-full items-start gap-3 p-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <UserRoundSearch size={19} />
            </div>

            <div className="flex min-w-0 flex-col items-start">
              <h4 className="text-[17px] font-bold leading-5 text-[#102B55]">
                For Job Seekers
              </h4>

              <h5 className="mt-2 max-w-[260px] text-[8px] font-semibold leading-5 text-gray-800">
                Looking for your next opportunity?
              </h5>

              <p className="mt-1 max-w-[300px] text-[11px] leading-4 text-gray-600">
                Explore job openings and build your career with Satya.
              </p>
              <a
                href="#jobs-list"
                className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-blue-600 px-3 py-2 text-[15px] font-semibold text-white no-underline hover:bg-blue-700"
              >
                Explore Jobs
                <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default UserTypes;
