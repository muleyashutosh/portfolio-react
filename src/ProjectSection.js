import Project from "./Project";
import data from "./data";
const ProjectSection = () => {
  const { projects } = data;
  return (
    <section id="projects">
      <div className="container">
        <div className="project-wrapper">
          <h2 className="section-title dark-blue-text">Projects</h2>
          {projects.map((item, idx) => (
            <Project key={idx} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
