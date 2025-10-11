import profile from "../assets/profile.jpg";
import data from "../utils/data";

const resumeUrl =
  "https://docs.google.com/document/d/1JdRTRu4G_GzR7kmx_nOznzewybcRnTZo/edit?usp=sharing&ouid=110232544566602709812&rtpof=true&sd=true";

const About = () => {
  const { about } = data;
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
                  href={resumeUrl}
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
