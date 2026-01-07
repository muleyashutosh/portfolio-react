import { useState, useEffect } from "react";

const JumboTron = () => {
  const roles = ["Senior Backend Engineer @ Sage", "Tech Enthusiast", "Music Lover"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typeSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

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
