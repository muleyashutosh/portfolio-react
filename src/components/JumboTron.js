import { useState, useEffect } from "react";

const JumboTron = () => {
  const phrase = "Senior Backend Engineer at Sage";
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (displayText.length < phrase.length) {
      const timeout = setTimeout(() => {
        setDisplayText(phrase.slice(0, displayText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [displayText, phrase]);

  return (
    <section id="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title load-hidden">
            Hi, my name is <span className="text-color-main">Ashutosh Muley</span>
          </h1>
          <h2 className="hero-subtitle load-hidden">
            I'm a <span className="hero-role">{displayText}<span className="hero-cursor">|</span></span>
          </h2>
          <div className="hero-cta load-hidden">
            <button
              className="cta-btn cta-btn--hero"
              onClick={() => {
                document
                  .getElementById("experience")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              View My Work
            </button>
            <button
              className="cta-btn cta-btn--secondary"
              onClick={() => {
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JumboTron;
