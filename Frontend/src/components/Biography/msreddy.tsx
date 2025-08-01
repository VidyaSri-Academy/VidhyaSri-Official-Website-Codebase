import msreeddy from "../../assets/msreeddy.jpg";

const profileImage = msreeddy;

export default function BiographyPage6() {
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
              Dr. Muniswamy Reddy Shankar Reddy
            </h1>
            <p className="mb-4 text-xl md:text-2xl font-semibold text-blue-600">
              National Academic Director
            </p>

            <div className="mt-8 prose prose-lg text-gray-700 max-w-none leading-relaxed antialiased md:subpixel-antialiased text-justify py-8 gap-y-4 flex flex-col">
              <p>
                Professor Dr. Muniswamy Reddy Shankar Reddy (Prof. Dr. M.S.
                Reddy) serves as the National Academic Director at Vidyasri,
                bringing over four decades of distinguished experience in
                teaching, research, and academic administration. He has held
                several senior positions, including Registrar (Evaluation) at
                Bangalore University, Registrar (Administration) at Bangalore
                North University, and Special Officer at Maharani Cluster
                University. As a Professor and Chairman of the Department of
                Zoology and Coordinator of the Centre for Applied Genetics at
                Bangalore University, he made significant contributions to
                scientific research and curriculum development. A renowned
                expert in apiculture and genetics, Prof. Reddy has published
                over 220 research papers, presented at 138 conferences, and
                delivered keynote lectures in 56 international forums across 26
                countries. He has served as a consultant to <strong> international
                organizations like FAO and UNDP </strong> and contributed to national
                bodies such as UGC, the National Bee Board, and the Bureau of
                Indian Standards. Known for his commitment to educational
                excellence, environmental awareness, and policy advisory, Prof.
                Dr. Reddy continues to inspire academic growth and innovation at
                Vidyasri.
              </p>
              <p className="mt-6 font-semibold text-gray-900">
                Warm regards,
                <br />
                M.S Reddy,
                <br />
                National Academic Director,
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
