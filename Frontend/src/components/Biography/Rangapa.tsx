
import Rangappa from "../../assets/Rangappa.jpg";

const profileImage = Rangappa;

export default function BiographyPage() {
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
              Prof.M.Rangappa
            </h1>
            <p className="mb-4 text-xl md:text-2xl font-semibold text-blue-600">
              Managing Director
            </p>

            <div className="mt-8 prose prose-lg text-gray-700 max-w-none leading-relaxed antialiased md:subpixel-antialiased text-justify py-8 gap-y-4 flex flex-col">
              <p>
                It is with profound enthusiasm that I extend a warm welcome to
                VidhyaSri—a pioneering institution at the forefront of academic
                innovation and intellectual empowerment. As a beacon of
                educational excellence, VidhyaSri is committed to illuminating
                the trajectory toward scholastic brilliance and constructing a
                robust foundation for future-ready individuals.
              </p>
              <p>
                In my capacity as the Managing Director, I am steadfast in our
                mission to drive holistic development by seamlessly integrating
                academic rigour with value-based education. Our pedagogical
                approach is rooted in evidence-based instructional design,
                adaptive learning technologies, and learner-centric
                methodologies, ensuring that students are not only equipped with
                domain-specific knowledge but also with the competencies
                essential for the 21st-century global landscape.
              </p>
              <p>
                Our meticulously curated curriculum, delivered by a
                distinguished faculty of subject-matter experts, provides
                comprehensive and strategic preparation for a broad spectrum of
                competitive and academic examinations. Through data-driven
                assessment models, personalized learning pathways, and a
                technology-augmented learning ecosystem, we empower students to
                transcend conventional boundaries and achieve exemplary
                outcomes.
              </p>
              <p>
                At VidhyaSri, we do more than educate—we engineer potential,
                catalyze innovation, and nurture leadership. Our ecosystem is
                designed to foster resilience, critical thinking, and ethical
                grounding—attributes that are imperative for success in an
                increasingly complex and dynamic world.
              </p>
              <p>
                I extend an earnest invitation to join us in this transformative
                educational journey. Together, let us shape not just proficient
                learners, but visionary thinkers and impactful contributors to
                society. At VidhyaSri, education is not merely a pursuit—it is
                the catalyst for enduring change and boundless achievement.
              </p>
              <p className="mt-6 font-semibold text-gray-900">
                Warm regards,
                <br />
                Prof. M. Rangappa
                <br />
                Managing Director
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
