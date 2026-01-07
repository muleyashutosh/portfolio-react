import { LocationOn, Email, GitHub } from "@mui/icons-material";
import Tilt from "react-parallax-tilt";
import profile from "../assets/profile.jpg";
import data from "../utils/data";

const About = () => {
  const { about, resume, email, hero, socials } = data;

  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About me</h2>
        <div className="row about-wrapper">
          <div className="col-md-5 col-sm-12">
            <div className="about-wrapper__image">
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                scale={1.02}
                transitionSpeed={1000}
                gyroscope={true}
              >
                <img
                  className="img-fluid rounded shadow-lg"
                  height="auto"
                  width="300px"
                  src={profile}
                  alt="Ashutosh Muley - Senior Engineer at Sage"
                />
              </Tilt>
            </div>
          </div>
          <div className="col-md-7 col-sm-12">
            <div className="about-wrapper__info">
              {about.map((item, idx) => (
                <p key={idx} className="about-wrapper__info-text">
                  {item}
                </p>
              ))}
              <div className="about-wrapper__badges">
                <span className="about-badge">
                  <LocationOn fontSize="small" />
                  {hero.location}
                </span>
                <a href={`mailto:${email}`} className="about-badge about-badge--link">
                  <Email fontSize="small" />
                  {email}
                </a>
                <a href={socials.github} target="_blank" rel="noreferrer" className="about-badge about-badge--link">
                  <GitHub fontSize="small" />
                  GitHub
                </a>
              </div>
              <div className="about-wrapper__cta">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="cta-btn cta-btn--about"
                  href={resume}
                >
                  View Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
