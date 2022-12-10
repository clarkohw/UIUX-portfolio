import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import cat from "../images/about/cat.jpeg";
import "./CaseStudy.css";
import "./About.css";

function About() {
  return (
    <h1>ABOUT</h1>
    // <Container className="section">
    //   <Row>
    //     <Col>
    //       <Image className="personal-picture" src={cat} rounded />
    //     </Col>
    //     <Col>
    //       <h1>About Me</h1>
    //       <p className="paragraph-text">
    //         As a software engineer, I am passionate about using my technical
    //         skills and knowledge to build innovative and high-quality software
    //         solutions. I have a strong foundation in computer science
    //         principles, and I have experience with a range of programming
    //         languages and technologies, including Java, Python, and React.
    //       </p>
    //       <p className="paragraph-text">
    //         Throughout my career, I have gained experience working on a variety
    //         of projects, from web applications and mobile apps to data analysis
    //         and machine learning. I am comfortable working independently as well
    //         as in a team environment, and I am always looking for opportunities
    //         to learn and grow as a software engineer.
    //       </p>
    //       <p className="paragraph-text">
    //         I am committed to staying up-to-date with the latest developments in
    //         the field and continuously improving my skills. I am a
    //         problem-solver by nature, and I enjoy tackling challenging technical
    //         problems and finding creative solutions.
    //       </p>
    //     </Col>
    //   </Row>
    // </Container>
  );
}

export default About;
