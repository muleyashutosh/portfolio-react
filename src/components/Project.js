import Tilt from "react-parallax-tilt";

const Project = ({ data }) => {
  const { title, description, liveUrl, sourceUrl, screenshot } = data;
  return (
    <div className="row">
      <div className="col-lg-4 col-sm-12">
        <div className="project-wrapper__text">
          <h3 className="project-wrapper__text-title">{title}</h3>
          <div>
            <ul className="mb-4">
              {description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <a
            target="_blank"
            rel="noreferrer"
            className="cta-btn cta-btn--hero"
            href={liveUrl}
          >
            See Live
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="cta-btn text-color-main"
            href={sourceUrl}
          >
            Source Code
          </a>
        </div>
      </div>
      <div className="col-lg-8 col-sm-12">
        <div className="project-wrapper__image">
          <a href={liveUrl} target="_blank" rel="noreferrer">
            <Tilt tiltReverse={true} tiltMaxAngleX={3} tiltMaxAngleY={3}>
              <div data-tilt className="thumbnail rounded">
                <img className="img-fluid" src={screenshot} alt="screenshot" />
              </div>
            </Tilt>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
