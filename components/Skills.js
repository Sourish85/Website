export default function Skills() {
  const skills = [
    { name: "Python", icon: "https://img.icons8.com/color/96/python.png" },
    { name: "C++", icon: "https://img.icons8.com/color/96/c-plus-plus-logo.png" },
    { name: "SQL", icon: "https://img.icons8.com/color/96/sql.png" },
    { name: "Machine Learning", icon: "https://img.icons8.com/color/96/artificial-intelligence.png" },
  ];

  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-20 text-center">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center hover:scale-110 transition">
            <img src={skill.icon} alt={skill.name} />
            <p className="mt-2">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
