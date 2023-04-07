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
      <Image className="mockup" src={props.imgSrc} fluid />
      <Link to={"/UIUX-portfolio/work/" + props.urlName}>
        <div className="overlay">
          <b className="text">{props.projectName}</b>
        </div>
      </Link>
    </Container>
  );
}

export default ProjectCard;
