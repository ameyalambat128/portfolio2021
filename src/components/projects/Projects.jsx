import "./projects.scss";

import { projects } from "../../constants/constants";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h1 className="h1">Projects</h1>
      <div className="grid">
        {projects.map(({ image, title, description, tags }) => (
          <div className="blogCard">
            <img src={image} alt="img" className="image" />
            <br />
            <div className="title">{title}</div>
            <br />
            <div className="hr" />
            <br />
            <div className="desc">{description}</div>
            <br />
            <h4>Technologies</h4>
            <div className="tags">
              {tags.map((tag, id) => (
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
