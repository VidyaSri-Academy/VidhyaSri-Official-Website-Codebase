import Asutosh from "../../assets/Asutosh.jpg";

const profileImage = Asutosh;

export default function BiographyPage5() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-12 py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Left Side: Image */}
          <div className="w-full my-auto h-auto md:w-1/3 lg:w-1/4 flex-shrink-0">
            <img
              src={profileImage}
              alt="Portrait of Prasad Rao Kotnani"
              aria-label="Portrait of Prasad Rao Kotnani"
              className="w-full max-w-xs md:max-w-none h-auto rounded-lg shadow-xl object-cover object-center mx-auto"
            />
          </div>

          {/* Right Side: Biography */}
          <div className="w-full md:w-2/3 lg:w-3/4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-2">
              Mr. Ashutosh Kumar
            </h1>
            <p className="mb-4 text-xl md:text-2xl font-semibold text-blue-600">
              Director Business Development
            </p>

            <div className="mt-8 prose prose-lg text-gray-700 max-w-none leading-relaxed antialiased md:subpixel-antialiased text-justify py-8 gap-y-4 flex flex-col">
              <p>
                Mr. Ashutosh Kumar is a passionate and dynamic educator with
                over 10+ years of teaching experience across India, specializing
                in JEE Mains, NDA, Olympiads, and CBSE board preparation. As
                Academic Head, he combines innovative teaching methods with
                strong motivational and interpersonal skills to enhance student
                engagement and performance. His background also includes
                professional experience at Infosys, where he collaborated with
                Indian and international clients, enriching his communication
                and business acumen. A natural motivator and strategic thinker,
                he excels in driving academic success while contributing to
                institutional growth and development. His ability to inspire and
                lead makes him a powerful force in both education and business
                leadership.
              </p>
              <p className="mt-6 font-semibold text-gray-900">
                Warm regards,
                <br />
                Ashutosh Kumar,
                <br />
                Director Business Development,
                <br />
                VidhyaSri Academy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
