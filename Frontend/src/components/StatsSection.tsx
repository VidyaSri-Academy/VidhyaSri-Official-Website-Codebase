import React from "react";

export default function StatsSection() {
  const stats = [
    {
      icon: "📺",
      title: "Daily Live",
      subtitle: "Interactive classes",
    },
    {
      icon: "📝",
      title: "10 Million +",
      subtitle: "Tests, sample papers & notes",
    },
    {
      icon: "❓",
      title: "24 x 7",
      subtitle: "Doubt solving sessions",
    },
    {
      icon: "🏅",
      title: "100 +",
      subtitle: "Offline centres",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="text-5xl md:text-6xl mb-3">{item.icon}</div>
              <div className="text-xl md:text-2xl font-bold text-slate-900 mb-1">
                {item.title}
              </div>
              <div className="text-sm md:text-base text-gray-600">
                {item.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
