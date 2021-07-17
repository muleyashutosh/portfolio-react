const JumboTron = () => {
  return (
    <div id="hero" className="jumbotron">
      <div className="container">
        <h1 className="hero-title load-hidden">
          Hi, my name is <span className="text-color-main">Ashutosh Muley</span>
          <br />
          I'm a Software Engineer.
        </h1>
        <span className="hero-cta load-hidden">
          <p
            className="cta-btn cta-btn--hero"
            role="button"
            onClick={() => {
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Know more
          </p>
        </span>
      </div>
    </div>
  );
};

export default JumboTron;
