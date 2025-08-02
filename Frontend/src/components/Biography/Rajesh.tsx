
import Rajesh from "../../assets/Rajeshr.jpg"

const profileImage = Rajesh;

export default function Mentor1() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-12 py-12">
        {/* Main content wrapper with flex layout */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Left Side: Image */}
          <div className="w-full my-auto h-auto md:w-1/3 lg:w-1/4 flex-shrink-0">
            <img
              src={profileImage}
              alt="Portrait of Prof.M.Rangappa"
              className="w-full max-w-xs md:max-w-none h-auto rounded-lg shadow-xl object-cover object-center mx-auto"
            />
          </div>

          {/* Right Side: Biography */}
          <div className="w-full md:w-2/3 lg:w-3/4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-2">
              Rajesh Ramesh Dhaktode
            </h1>
            <p className="mb-4 text-xl md:text-2xl font-semibold text-blue-600">
              Mentor, VidhyaSri Academy
            </p>

            <div className="mt-8 prose prose-lg text-gray-700 max-w-none leading-relaxed antialiased md:subpixel-antialiased text-justify py-8 gap-y-4 flex flex-col">
              <p>
                Rajesh is a seasoned business and human resources leader with
                over 30 years of diverse experience in Operations and HRD across
                the hospitality, leisure, and food services industries. His
                career spans renowned sectors including hotels, cruise liners,
                airport catering, theme and water parks, casinos, and QSR
                businesses. He has worked extensively across India, the Middle
                East, and Europe, driving HR operations, talent acquisition, and
                organizational transformation. Rajesh was most recently
                associated with Adlabs Entertainment Ltd. as Vice President -
                Corporate HRD, where he played a pivotal role in the
                establishment and operational success of Imagica Theme Park,
                Aquamagica Water Park, and the upcoming Novotel Imagica Khopoli.
                His leadership was instrumental in setting up the organization's
                shared services and HR systems during both project and
                operational phases. Previously, he held senior HR leadership
                roles at Thunderbird Resorts (now part of Delta Corp) and DHPL,
                where he contributed to strategic HR transformation across
                operations in Central and South America, the Far East, and Asia.
                His tenure with P&O Cruises (Carnival Corporation) saw him
                transition from shipboard operations to HR, managing scheduling,
                crew rotations, and talent management globally. In India, Rajesh
                has worked with reputed organizations such as Pan India Food
                Services Pvt. Ltd. (Future Group), Blue Foods, and Travel Food
                Services, where he supported business expansion and operational
                excellence nationwide. Renowned for his people-centric approach,
                Rajesh excels in building service-oriented, profit-centered
                organizations. His strengths include cross-functional
                leadership, strategic execution, managing business complexity at
                scale, and creating high-performance, values-driven workplace
                cultures. His leadership style emphasizes action, practical
                innovation, and an inspiring, engaging work environment.
              </p>
              <p className="mt-6 font-semibold text-gray-900">
                Warm regards,
                <br />
                Rajesh Ramesh Dhaktode
                <br />
                Mentor, VidhyaSri Academy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
