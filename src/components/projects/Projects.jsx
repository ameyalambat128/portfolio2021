import "./projects.scss";
import { projects } from "../../constants/constants";
import Divider from "../style/Divider";
import Button from "@mui/material/Button";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="h1">Projects</div>
      <Divider />
      <div className="grid">
        {projects.map(({ image, title, description, tags, source }) => (
          <div className="blogCard">
            <img src={image} alt="img" className="image" />
            <br />
            <div className="title">{title}</div>
            <br />
            <div className="hr" />
            <br />
            <div className="desc">{description}</div>
            <br />
            <a
              href={source}
              target="_blank"
              rel="noopener noreferrer"
              className="source"
            >
              <Button variant="outlined" className="button">
                Learn more..
              </Button>
            </a>
            <br />
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
