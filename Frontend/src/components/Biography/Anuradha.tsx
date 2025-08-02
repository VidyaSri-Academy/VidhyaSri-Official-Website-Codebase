
import Anuradha from "../../assets/Anuradha.jpg";

const profileImage = Anuradha;

export default function BiographyPage4() {
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
              Anuradha Mahendra Aher
            </h1>
            <p className="mb-4 text-xl md:text-2xl font-semibold text-blue-600">
              Region Director Business Development
            </p>

            <div className="mt-8 prose prose-lg text-gray-700 max-w-none leading-relaxed antialiased md:subpixel-antialiased text-justify py-8 gap-y-4 flex flex-col">
              <p>
                Anuradha Aher, daughter of renowned social worker and politician
                <strong> Mahendra Aher Patil</strong>, is a committed advocate for education and
                social upliftment. Armed with a degree and a Post Graduate
                Diploma in Business Management from NMIMS, Mumbai, she blends
                professional expertise with purposeful action. She focuses on
                empowering women and alleviating poverty through education,
                offering full scholarships to underprivileged students. Her
                mission extends beyond access, aiming to equip students with the
                tools to transform their futures.
              </p>
              <p>
                Through her work, she carries forward her father's legacy,
                fostering a more inclusive and equitable society.
              </p>
              <p className="mt-6 font-semibold text-gray-900">
                Warm regards,
                <br />
                Ms.Anuradha Mahendra Aher,
                <br />
                Region Director Business Development,
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
