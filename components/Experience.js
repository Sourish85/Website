export default function Experience() {
  const experiences = [
    {
      role: "Data Science Intern",
      company: "Evoastra Ventures Pvt. Ltd.",
      date: "Jul - Aug 2025",
      desc: "Designed and implemented an image captioning pipeline combining CNN feature extraction (InceptionV3) with LSTM-based sequence generation.",
    },
    {
      role: "R&D Intern",
      company: "Valeo Ind. Pvt. Ltd.",
      date: "Aug - Oct 2024",
      desc: "Monitored sales trends for 200+ firms and developed forecasting models for inventory optimization.",
    },
    {
      role: "Machine Learning Intern",
      company: "JP Motors Ltd.",
      date: "May - Jul 2024",
      desc: "Applied regression and time-series methods on multi-year automobile sales data to forecast SKU-level demand.",
    },
  ];

  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp, i) => (
          <div key={i} className="relative border-l-2 border-cyan-400 pl-6 hover:bg-white/5 rounded-lg p-4 transition">
            <span className="absolute -left-3 top-2 w-6 h-6 bg-cyan-400 rounded-full"></span>
            <h3 className="font-semibold text-xl">{exp.role} — {exp.company}</h3>
            <p className="text-sm text-gray-400 mb-2">{exp.date}</p>
            <p className="text-gray-300">{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
