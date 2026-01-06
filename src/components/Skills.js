import {
  Storage,
  Code,
  DataObject,
  Cloud,
  Settings,
  Terminal,
} from "@mui/icons-material";
import data from "../utils/data";

const iconMap = {
  languages: <Terminal />,
  backend: <Storage />,
  frontend: <Code />,
  database: <DataObject />,
  devops: <Settings />,
  cloud: <Cloud />,
};

const Skills = () => {
  const { skills } = data;

  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title dark-blue-text">Skills & Technologies</h2>
        <div className="skills-wrapper">
          <div className="skills-grid">
            {Object.entries(skills).map(([key, category]) => (
              <div key={key} className="skill-card">
                <div className="skill-card__header">
                  <span className="skill-card__icon">{iconMap[key]}</span>
                  <h3 className="skill-card__title">{category.title}</h3>
                </div>
                <div className="skill-card__items">
                  {category.items.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

