import "./projects.scss";
//import { GridContainer } from "./ProjectsStyles";
import { projects2 } from "../../constants/constants";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="grid">
        {projects2.map((project) => (
          <div className="blogCard">
            <img src={project.image} alt="img" className="image" />
            <br />
            <div className="title">{project.title}</div>
            <br />
            <div className="hr" />
            <br />
            <div className="desc">{project.description}</div>
            <br />
            <h4>Technologies</h4>
            <div className="tags">
              {project.tags.map((tag, id) => (
                <div key={id} className="tag">
                  {tag}
                </div>
              ))}
            </div>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
