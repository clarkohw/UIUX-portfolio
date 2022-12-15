import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import cat from "../images/about/cat.jpeg";
import "./CaseStudy.css";
import "./About.css";

function About() {
  return (
    <Container className="section">
      <Row>
        <Col>
          <Image className="personal-picture" src={cat} rounded />
        </Col>
        <Col>
          <h1>About Me</h1>
          <p className="paragraph-text">
            I am a senior studying computer science at Brown University. Ever
            since I took CS17 in my freshman year of college, I have been trying
            to become absorbed in the world of CS. I love everything about the
            process, from brainstorming ideas to coding them into reality and
            even debugging.
          </p>
          <p className="paragraph-text">
            I love problem-solving and the feeling when parts of your code
            finally connect: like the first time you successfully connect the
            frontend and backend of a project, or when you get something to
            appear on the screen for the first time or when you see the message
            <em className="tests-passed"> All tests passed!</em>
          </p>
          <p className="paragraph-text">
            Although I love learning about the technical aspects of CS, I also
            love its creativity. The ability to uniquely synthesize ideas into
            an app or art project using code is amazing. I my free time I like
            to write songs and train Jiu-Jitsu.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
