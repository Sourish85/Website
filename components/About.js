export default function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-20 text-center">
      <h2 className="text-3xl font-bold mb-6">About</h2>
      <p className="text-gray-400 mb-6">
        First-year Data Science + Math-CS student at UCSD. 
        Exploring the intersection of <span className="text-cyan-400">quant finance</span>, 
        <span className="text-purple-400"> machine learning</span>, and 
        <span className="text-pink-400"> data-driven decision making</span>.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img src="https://img.icons8.com/color/240/artificial-intelligence.png" alt="AI" className="mx-auto"/>
        <img src="https://img.icons8.com/color/240/combo-chart--v1.png" alt="Finance" className="mx-auto"/>
      </div>
    </section>
  );
}
