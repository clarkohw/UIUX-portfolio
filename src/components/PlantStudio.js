import Container from "react-bootstrap/Container";
import TopSummary from "./blog/TopSummary";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Carousel from "react-bootstrap/Carousel";
import Stack from "react-bootstrap/Stack";
import cherry from "../images/plant-studio/cherry.png";
import cactus from "../images/plant-studio/cactus.png";
import volcano from "../images/plant-studio/volcano.png";
import tree2 from "../images/plant-studio/tree2.png";
import tree4 from "../images/plant-studio/tree4.png";
import binaryTree1 from "../images/plant-studio/binary-tree1.png";
import binaryTree2 from "../images/plant-studio/binary-tree2.png";
import binaryTree3 from "../images/plant-studio/binary-tree3.png";
import binaryTree4 from "../images/plant-studio/binary-tree4.png";
import basicMovement from "../images/plant-studio/basic-movement.png";
import stringInstructions from "../images/plant-studio/string-instructions.png";
import thetaChange from "../images/plant-studio/theta-change.gif";
import "./CaseStudy.css";
import { Figure } from "react-bootstrap";

function PlantStudio() {
  const Title = () => <h1>Plant Studio</h1>;

  const Context = () => (
    <Row className="mb-5">
      <Container className="section">
        <b className="caps-label">CONTEXT</b>
        <b className="section-heading">About the project</b>
        <p className="paragraph-text">
          This project was an assignment from CS1230: Graphics at Brown
          University. The class focuses on the technical pipeline that allows a
          list of coordinates to turn into something like a Pixar movie. The
          assignment was to design a demo using graphics topics from the class.
          Each group member was responsible for one technical element. We chose
          procedural generation, toon-shading, and animation.
          <b>
            {" "}
            My responsibility was to create a program to generate realistic 3D
            plant geometry.
          </b>
        </p>
      </Container>
    </Row>
  );

  const Problem = () => (
    <Row className="mb-5">
      <Container className="section">
        <b className="caps-label">PROBLEM</b>
        <b className="section-heading">Problem</b>
        <b className="mid-heading">
          How can a computer generate realistic geometry of a plant?
        </b>
        <p className="paragraph-text">
          Luckily this has already been answered: L-Systems!
        </p>
        <p className="paragraph-text">
          A Lindenmayer system is a recursive process where an initial
          string/set of instructions is expanded based on a set of rules. It was
          developed by a botanist who studied plant growth. The final string
          becomes an instruction set for the journey of a pen. This pen is also
          called a “turtle” because the directions mimic a turtle walking around
          a page. You can think of the string expansion as finding and replacing
          in a word document.
        </p>
      </Container>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Example: Binary tree drawing</Accordion.Header>
          <Accordion.Body>
            <Container>
              <Row className="justify-content-center">
                <Col>
                  <Container className="section">
                    {" "}
                    <b className="paragraph-text">Initial String: </b>
                    <div className="paragraph-text">0</div>
                    <div className="p-3"></div>
                    <b className="paragraph-text">Rules: </b>
                    <div className="paragraph-text">1 -> 11</div>
                    <div className="paragraph-text">0 -> 1[0]0</div>{" "}
                    <div className="p-3"></div>
                    <b className="paragraph-text">Key: </b>
                    <div className="paragraph-text">
                      0 = Draw a line segment ending in a leaf
                    </div>
                    <div className="paragraph-text">
                      1 = Draw a line segment
                    </div>
                    <div className="paragraph-text">
                      [ = Store current position and angle, then turn left 45
                      degress
                    </div>
                    <div className="paragraph-text">
                      ] = Restore position and angle to stored values, then turn
                      right 45 degress
                    </div>
                    <div className="p-3"></div>
                    <b className="paragraph-text">String expansion</b>
                    <div className="paragraph-text">Recursion 0: “0”</div>
                    <div className="paragraph-text">Recursion 1: “1[0]0”</div>
                    <div className="paragraph-text">
                      Recursion 2: “11[1[0]0]1[0]0”
                    </div>
                    <div className="paragraph-text">
                      Recursion 3: “1111[11[1[0]0]1[0]0]11[1[0]0]1[0]0”
                    </div>
                  </Container>
                </Col>
                <Col>
                  <Stack>
                    <Figure>
                      <Figure.Image src={binaryTree1} />
                      <Figure.Caption>Initial string</Figure.Caption>
                    </Figure>
                    <Figure>
                      <Figure.Image src={binaryTree2} />
                      <Figure.Caption>Recursion 1</Figure.Caption>
                    </Figure>
                    <Figure>
                      <Figure.Image src={binaryTree3} />
                      <Figure.Caption>Recursion 2</Figure.Caption>
                    </Figure>
                    <Figure>
                      <Figure.Image src={binaryTree4} />
                      <Figure.Caption>Recursion 3</Figure.Caption>
                    </Figure>
                  </Stack>
                </Col>
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Row>
  );

  const Development = () => (
    <Row className="mb-5 justify-content-center">
      <Container className="section">
        <b className="caps-label">DEVELOPMENT</b>
        <b className="section-heading">Development</b>
        <b className="mid-heading">Step 1: Turtle </b>
        <p className="paragraph-text">
          The first requirement to use the L-System approach was to have a
          “turtle” or pen that could take in instructions and produce a line
          drawing. I used simple object-oriented programming to create a turtle
          class with a location and direction and basic methods like “go
          forward” and “rotate by this many degrees on an axis.”{" "}
        </p>
        <p className="paragraph-text">
          I started by making sure that the location of my turtle in 3D space
          would accurately output a transformation matrix that could be applied
          to a cylinder (translate, rotate, and scale). The goal was to produce
          connected lines. The example below shows the result of “going forward”
          and “rotating” by 45 degrees a specified number of times.
        </p>
      </Container>
      <Figure>
        <Figure.Image className="slide-image" src={basicMovement} />
      </Figure>
      <Container className="section">
        <b className="mid-heading">Step 2: Take a string of instructions </b>
        <p className="paragraph-text">
          Eventually, I modified this turtle class to follow a string of
          instructions. So that I could give it a string like
        </p>
      </Container>
      <p className="block-quote">
        FF-[-F+F+F]+[+F-F-F]FF-[-F+F+F]+[+F-F-F]-[-FF-[-F+F+F]+[+F-F-F]+FF-[-F+F+F]+[+F-F-F]+FF-[-F+F+F]+[+F-F-F]]+[+FF-[-F+F+F]+[+F-F-F]-FF-[-F+F+F]+[+F-F-F]-FF-[-F+F+F]+[+F-F-F]]”
      </p>
      <Container className="section">
        <p className="paragraph-text">And get a “drawing” like this:</p>
      </Container>
      <Figure>
        <Figure.Image className="slide-image" src={stringInstructions} />
      </Figure>
      <Container className="section">
        <b className="mid-heading">
          Step 3: Use a slider to control rotation angle{" "}
        </b>
        <p className="paragraph-text">
          Another key part of the interactive component was an interactive
          slider to control the angle of rotation for the turtle.{" "}
        </p>
      </Container>
      <Figure>
        <Figure.Image className="slide-image" src={thetaChange} />
      </Figure>
    </Row>
  );

  const FinalDemo = () => (
    <Row className="mb-5">
      <Container className="section">
        <b className="caps-label">DEMO</b>
        <b className="section-heading">Final Demo</b>
        <p className="paragraph-text">
          With a little scene setting, some custom 3D l-systems, toon-shading
          and animation… this was the final demo.{" "}
        </p>
      </Container>
      <iframe
        width="500"
        height="700"
        src="https://www.youtube.com/embed/H-tc11oEQF0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        className="mb-5"
      ></iframe>
      <Container className="section">
        <b className="mid-heading">Demo images</b>
      </Container>
      <Carousel variant="dark">
        <Carousel.Item className="p-5">
          <img className="d-block w-100" src={cactus} alt="Cactus" />
        </Carousel.Item>
        <Carousel.Item className="p-5">
          <img className="d-block w-100" src={tree2} alt="Tree1" />
        </Carousel.Item>
        <Carousel.Item className="p-5">
          <img className="d-block w-100" src={tree4} alt="Tree2" />
        </Carousel.Item>
        <Carousel.Item className="p-5">
          <img className="d-block w-100" src={volcano} alt="Volcano plant" />
        </Carousel.Item>
        <Carousel.Item className="p-5">
          <img className="d-block w-100" src={cherry} alt="Cherry tree" />
        </Carousel.Item>
      </Carousel>
    </Row>
  );

  const Reflection = () => (
    <Row className="mb-5">
      <Container className="section">
        <b className="caps-label">CONCLUSION</b>
        <b className="section-heading">Reflection</b>
        <p className="paragraph-text">
          This project was all about managing a complicated task with many
          moving parts. As the resident expert in GitHub, I managed the team
          branching/merging workflow. Another thing I learned in graphics that I
          will take into the rest of my development is the importance of
          incremental testing. This is something that I already heavily believed
          in. However, in graphics knowing you can trust the work you have
          already completed can save you hours.
        </p>
      </Container>
    </Row>
  );
  return (
    <Container fluid className="content-container">
      <Title />
      <TopSummary
        details={[
          [
            "OVERVIEW",
            "An animated 3D plant generator with user-modifiable parameters to control growth and movement. ",
          ],
          ["TEAM", "3 Developers "],
          ["ROLE", "Design, L System implementation"],
          ["TIMEFRAME", "4 Weeks"],
        ]}
        imgSrc={cherry}
      />
      <Row className="my-4">
        <hr></hr>
      </Row>
      <Context />
      <Row className="my-4">
        <hr></hr>
      </Row>
      <Problem />
      <Row className="my-4">
        <hr></hr>
      </Row>
      <Development />
      <Row className="my-4">
        <hr></hr>
      </Row>
      <FinalDemo />
      <Row className="my-4">
        <hr></hr>
      </Row>
      <Reflection />
    </Container>
  );
}

export default PlantStudio;
