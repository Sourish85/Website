import { useEffect, useState } from "react";

export default function Hero() {
  const sentences = [
    "Hi, I’m <span class='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400'>Sourish Suri</span>",
    "Aspiring Quant Researcher & Trader",
    "ML Builder, Finance x Data Science",
  ];

  const [text, setText] = useState("");
  const [part, setPart] = useState(0);
  const [offset, setOffset] = useState(0);
  const [forwards, setForwards] = useState(true);
  const [skipCount, setSkipCount] = useState(0);
  const skipDelay = 15;
  const speed = 100;

  useEffect(() => {
    const interval = setInterval(() => {
      const sentence = sentences[part];
      if (forwards) {
        if (offset >= sentence.length) {
          setSkipCount(skipCount + 1);
          if (skipCount === skipDelay) {
            setForwards(false);
            setSkipCount(0);
          }
        }
      } else {
        if (offset === 0) {
          setForwards(true);
          setPart((part + 1) % sentences.length);
        }
      }
      setText(sentence.substring(0, offset));
      if (skipCount === 0) setOffset(offset + (forwards ? 1 : -1));
    }, speed);

    return () => clearInterval(interval);
  });

  return (
    <section className="max-w-6xl mx-auto px-6 py-28 text-center">
      <h1
        id="hero-typing"
        className="text-5xl font-extrabold leading-tight"
        dangerouslySetInnerHTML={{ __html: text }}
      ></h1>
    </section>
  );
}
