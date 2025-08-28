export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-20 text-center">
      <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
      <p className="text-gray-400 mb-8">Have a question or want to collaborate? Reach out directly.</p>
      <div className="flex gap-6 justify-center">
        <a href="mailto:sourishwb@gmail.com" target="_blank" className="p-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 hover:scale-110 transform transition">
          <img src="https://img.icons8.com/fluency/96/apple-mail.png" alt="Email" className="w-8 h-8"/>
        </a>
        <a href="https://www.linkedin.com/in/sourish-suri-b19b50235" target="_blank" className="p-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 hover:scale-110 transform transition">
          <img src="https://img.icons8.com/fluency/96/linkedin.png" alt="LinkedIn" className="w-8 h-8"/>
        </a>
        <a href="https://github.com/Sourish85" target="_blank" className="p-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 hover:scale-110 transform transition">
          <img src="https://img.icons8.com/fluency/96/github.png" alt="GitHub" className="w-8 h-8"/>
        </a>
      </div>
      <footer className="py-10 text-center text-gray-500 text-sm border-t border-white/10 mt-12">
        © {new Date().getFullYear()} Sourish Suri. Built with Next.js, Tailwind.
      </footer>
    </section>
  );
}
