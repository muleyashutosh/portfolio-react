import Tilt from "react-parallax-tilt";

const Project = ({ data }) => {
  const { title, description, liveUrl, sourceUrl, backendUrl, screenshot } = data;
  
  // Determine button layout based on available URLs
  const hasLive = Boolean(liveUrl);
  const hasBackend = Boolean(backendUrl);
  
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
          <div className="project-wrapper__buttons">
            {hasLive ? (
              <>
                {/* Live project: See Live + Source Code */}
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
                  className="cta-btn cta-btn--secondary"
                  href={sourceUrl}
                >
                  Source Code
                </a>
              </>
            ) : hasBackend ? (
              <>
                {/* Not live, two repos: Disabled See Live + Frontend + Backend */}
                <span className="cta-btn cta-btn--disabled">
                  See Live
                </span>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="cta-btn cta-btn--secondary"
                  href={sourceUrl}
                >
                  Frontend
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="cta-btn cta-btn--secondary"
                  href={backendUrl}
                >
                  Backend
                </a>
              </>
            ) : (
              <>
                {/* Not live, single source: Disabled See Live + Source Code */}
                <span className="cta-btn cta-btn--disabled">
                  See Live
                </span>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="cta-btn cta-btn--secondary"
                  href={sourceUrl}
                >
                  Source Code
                </a>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="col-lg-8 col-sm-12">
        <div className="project-wrapper__image">
          <Tilt tiltReverse={true} tiltMaxAngleX={3} tiltMaxAngleY={3}>
            <div data-tilt className="thumbnail rounded">
              <img className="img-fluid" src={screenshot} alt={title} />
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default Project;
