import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import stars from "../images/home/stars.png";
import "./Homepage.css";

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
          <div>Project grid</div>
        </Row>
      </Container>
    </div>
  );
}

export default Homepage;
