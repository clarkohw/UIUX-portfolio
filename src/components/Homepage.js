import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import stars from "../images/home/stars.png";
import brownMMA from "../images/home/brown-mma-mockup.png";
import cinapse from "../images/home/cinapse-mockup.png";
import plantStudio from "../images/home/plant-gen-mockup.png";
import "./Homepage.css";
import ProjectCard from "./blog/ProjectCard";

function Homepage() {
  return (
    <div>
      <Container
        className="home-slide"
        style={{ backgroundImage: `url(${stars})` }}
      >
        <Row
          className="align-items-center justify-content-center"
          style={{ height: "100%" }}
        >
          <Col>
            <h1 className="huge-text">
              <b>Hello, I'm Cozy Cat</b>
            </h1>
            <p style={{ fontSize: "48px", color: "white" }}>
              Computer science student at Brown University
            </p>
          </Col>
        </Row>
      </Container>
      <Container fluid="md">
        <Row className="align-items-md-center">
          <Col>
            <hr></hr>
          </Col>
          <Col md="auto">
            <div style={{ fontSize: "36px" }}>
              <b>My Projects</b>
            </div>
          </Col>
          <Col>
            <hr></hr>
          </Col>
        </Row>
        <Row>
          <Col>
            <ProjectCard
              imgSrc={brownMMA}
              projectName="BrownMMA"
              urlName="brown-mma"
            ></ProjectCard>
          </Col>
          <Col>
            <ProjectCard
              imgSrc={cinapse}
              projectName="Cinapse"
              urlName="cinapse"
            ></ProjectCard>
          </Col>
          <Row className="justify-content-md-start">
            <Col>
              <ProjectCard
                imgSrc={plantStudio}
                projectName="Plant Studio"
                urlName="plant-studio"
              ></ProjectCard>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
}

export default Homepage;
