import profile from "./profile.jpg";
import data from "./data";

const About = () => {
  const { about, resume } = data;
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About me</h2>
        <div className="row about-wrapper">
          <div className="col-md-6 col-sm-12">
            <div className="about-wrapper__image">
              <img
                className="img-fluid rounded shadow-lg"
                height="auto"
                width="300px"
                src={profile}
                alt="Profile"
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="about-wrapper__info">
              {about.map((item, idx) => (
                <p key={idx} className="about-wrapper__info-text">
                  {item}
                </p>
              ))}
              <span className="d-flex mt-3">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="cta-btn cta-btn--resume"
                  href={resume}
                >
                  View Resume
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
