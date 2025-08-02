
import PrasadRao from "../../assets/Parsadrao.jpg";

const profileImage = PrasadRao;

export default function BiographyPage2() {
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
              Prasad Rao Kotnani
            </h1>
            <p className="mb-4 text-xl md:text-2xl font-semibold text-blue-600">
              National Director Admin
            </p>

            <div className="mt-8 prose prose-lg text-gray-700 max-w-none leading-relaxed antialiased md:subpixel-antialiased text-justify py-8 gap-y-4 flex flex-col">
              <p>
                Prasad Rao Kotnani is a dynamic entrepreneur and visionary
                leader known for building and scaling high-impact organizations
                across IT, BPO, and EdTech sectors. With over three decades of
                experience, he has founded and led two successful ventures — MAP
                Systems and Invensis Technologies — employing over 6,000
                professionals globally.
              </p>
              <p>
                In 1993, he launched MAP Systems with a single rented computer,
                transforming it into a 300+ member strong IT and EdTech company.
                MAP Systems offers cutting-edge services in publishing, creative
                design, and software development. Under his leadership, the
                company expanded into education technology with platforms like
                MAP My Classes (ERP + LMS) and MAP My Tutor (online exam prep),
                empowering institutions and learners through innovative digital
                solutions.
              </p>
              <p>
                In 2000, he founded Invensis Technologies, now a global BPO/KPO
                powerhouse delivering solutions in logistics, healthcare,
                finance, and accounting. With a sharp focus on operational
                excellence and customer satisfaction, the company has become a
                trusted partner to businesses worldwide.
              </p>
              <p>
                Prasad's core strengths include strategic recruitment, training,
                sales, marketing, and operations management. His leadership is
                defined by innovation, efficiency, and a deep commitment to
                empowering people through technology.
              </p>
              <p>
                His legacy continues to inspire, proving that with vision,
                resilience, and execution, extraordinary success is possible.
              </p>
              <p className="mt-6 font-semibold text-gray-900">
                Warm regards,
                <br />
                Prasad Rao Kotnani,
                <br />
                National Director Admin,
                <br />
                VidhyaSri Academy @ MapMyTutor
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
