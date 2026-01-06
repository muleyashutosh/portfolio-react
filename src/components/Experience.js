import { useState } from "react";
import { ExpandMore, ExpandLess, Work } from "@mui/icons-material";
import data from "../utils/data";

const Experience = () => {
  const { experience } = data;
  const [expandedCompany, setExpandedCompany] = useState(0);

  const toggleCompany = (index) => {
    setExpandedCompany(expandedCompany === index ? -1 : index);
  };

  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title dark-blue-text">Experience</h2>
        <div className="experience-wrapper">
          <div className="timeline">
            {experience.map((company, companyIndex) => (
              <div
                key={company.company}
                className={`timeline__item ${
                  expandedCompany === companyIndex ? "timeline__item--expanded" : ""
                }`}
              >
                <div className="timeline__marker">
                  <div className="timeline__logo">{company.logo}</div>
                </div>
                <div className="timeline__content">
                  <div
                    className="timeline__header"
                    onClick={() => toggleCompany(companyIndex)}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => e.key === "Enter" && toggleCompany(companyIndex)}
                  >
                    <div className="timeline__company-info">
                      <h3 className="timeline__company">{company.company}</h3>
                      <span className="timeline__duration">{company.totalDuration}</span>
                    </div>
                    <span className="timeline__expand-icon">
                      {expandedCompany === companyIndex ? <ExpandLess /> : <ExpandMore />}
                    </span>
                  </div>

                  <div
                    className={`timeline__roles ${
                      expandedCompany === companyIndex ? "timeline__roles--visible" : ""
                    }`}
                  >
                    {company.roles.map((role, roleIndex) => (
                      <div key={roleIndex} className="role">
                        <div className="role__header">
                          <Work className="role__icon" />
                          <div className="role__info">
                            <h4 className="role__title">{role.title}</h4>
                            <span className="role__duration">{role.duration}</span>
                          </div>
                        </div>
                        {role.highlights.length > 0 && (
                          <ul className="role__highlights">
                            {role.highlights.map((highlight, hIndex) => (
                              <li key={hIndex}>{highlight}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

