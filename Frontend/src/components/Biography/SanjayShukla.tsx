import React from "react";
import Sanjay from "../../assets/Sanjay.jpg";

const profileImage = Sanjay;

export default function BiographyPage3() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-12 py-12">
        {/* Main content wrapper with flex layout */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Left Side: Image */}
          <div className="w-full my-auto h-auto md:w-1/3 lg:w-1/4 flex-shrink-0">
            <img
              src={profileImage}
              alt="Portrait of Sanjay Shukla"
              aria-label="Portrait of Sanjay Shukla"
              className="w-full max-w-xs md:max-w-none h-auto rounded-lg shadow-xl object-cover object-center mx-auto"
            />
          </div>

          {/* Right Side: Biography */}
          <div className="w-full md:w-2/3 lg:w-3/4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-2">
              Mr. Sanjay Shukla
            </h1>
            <p className="mb-4 text-xl md:text-2xl font-semibold text-blue-600">
              National Director Operation
            </p>

            <div className="mt-8 prose prose-lg text-gray-700 max-w-none leading-relaxed antialiased md:subpixel-antialiased text-justify py-8 gap-y-4 flex flex-col">
              <p>
                Mr. Sanjay Shukla is a distinguished Physics educator and
                academic leader who has played a transformative role in the
                Indian education sector. Since 2003, he has been instrumental in
                designing and implementing integrated IIT-JEE and NEET
                preparatory programs in Kota, Rajasthan—empowering thousands of
                aspirants to secure admissions into top-tier institutions like
                the IITs and leading medical colleges. As Director of
                Administration and Academics at VIDHYASRI, Mr. Shukla spearheads
                pedagogical innovation, academic quality assurance, and
                strategic program development. His teaching methodology
                integrates conceptual rigor with creative delivery, fostering
                analytical thinking and deep subject comprehension. With over
                three decades of experience in curriculum design, instructional
                systems, and talent development, Mr. Shukla has redefined the
                landscape of competitive exam preparation in India. His enduring
                contributions continue to shape academic excellence and inspire
                future leaders.
              </p>
              <p className="mt-6 font-semibold text-gray-900">
                Warm regards,
                <br />
                Sanjay Shukla,
                <br />
                National Director Operation,
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