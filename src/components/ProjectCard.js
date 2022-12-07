import "./ProjectCard.css";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

/*
Props:
- Project name
- Image source
- Page link
*/
function ProjectCard(props) {
  return (
    <Container fluid className="project-card">
      <Image fluid src={props.imgSrc} />
      <Link to={"/portfolio/work/" + props.urlName}>
        <div className="overlay">
          <div className="text">{props.projectName}</div>
        </div>
      </Link>
    </Container>
  );
}

export default ProjectCard;
