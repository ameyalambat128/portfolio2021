import "./projects.scss";

import { projects2 } from "../../constants/constants";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="grid">
        {projects2.map(({ image, description, tags, title }) => (
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
