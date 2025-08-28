export default function Projects() {
  const projects = [
    {
      title: "SYLVASYNTH",
      link: "https://github.com/Sourish85/CNN-CROP-DIS-DETECTOR",
      desc: "Agritech startup developing a CNN-based crop disease detection platform, achieving 94% accuracy on 250,000+ images.",
      icon: "https://img.icons8.com/color/96/plant-under-sun.png",
    },
    {
      title: "University of Pennsylvania Collaboration",
      link: "https://arxiv.org/abs/2507.09375v1",
      desc: "Research in LLMs and robotics, co-authored CNN-based crop pathology classification (arXiv).",
      icon: "https://img.icons8.com/color/96/university.png",
    },
  ];

  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-10 text-center">Research & Projects</h2>
      <div className="space-y-6">
        {projects.map((proj, i) => (
          <a
            key={i}
            href={proj.link}
            target="_blank"
            className="group block bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition"
          >
            <h3 className="text-2xl font-semibold">{proj.title}</h3>
            <p className="text-sm text-gray-400">{proj.desc}</p>
            <img src={proj.icon} alt={proj.title} className="mt-4 opacity-70 group-hover:opacity-100 transition"/>
          </a>
        ))}
      </div>
    </section>
  );
}
