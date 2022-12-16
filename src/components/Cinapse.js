import "./CaseStudy.css";
import Container from "react-bootstrap/Container";
import TopSummary from "./blog/TopSummary";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";
import summaryImage from "../images/cinapse/top-summary.png";
import sketch1 from "../images/cinapse/sketch-1.png";
import sketch3 from "../images/cinapse/sketch-3.png";
import wireframe from "../images/cinapse/annotated_wireframe.png";
import originalHiFi from "../images/cinapse/hi-fi-original.gif";
import homeFeedback from "../images/cinapse/hi_fi_feedback_home.png";
import inboxFeedback from "../images/cinapse/hi_fi_feedback_inbox.png";
import addFeedback from "../images/cinapse/hi_fi_feedback_add.png";
import finalHiFi from "../images/cinapse/hi-fi-updated.gif";
import email from "../images/cinapse/email.png";
import Carousel from "react-bootstrap/Carousel";

function Cinapse() {
  const Title = () => <h1> Cinapse</h1>;

  const Context = () => (
    <Row className="mb-5">
      <Container className="section">
        <b className="caps-label">CONTEXT</b>
        <b className="section-heading">About the project</b>
        <p className="paragraph-text">
          This project was for my UI/UX class at Brown University. The
          assignment was to choose a Y-combinator startup and iteratively design
          the product based on only the company description. This included
          sketching, wireframing, designing, critiques, and user testing. The
          finished product was an interactive Figma prototype.
        </p>
      </Container>
    </Row>
  );

  const Problem = () => (
    <Row className="mb-5">
      <Container className="section">
        <b className="caps-label">PROBLEM</b>
        <b className="section-heading">Problem:</b>
        <p className="paragraph-text">
          The main problem for this project was figuring out two things
          <ol>
            <li>What are the needs of the users?</li>
            <li>How do we design an app that fulfills these needs?</li>
          </ol>
        </p>
        <b className="mid-heading">What are the needs of the users?</b>
        <div className="paragraph-text">
          We imagined two main users of the app.
          <ol>
            <li>
              Producers and showrunners
              <ul>
                <li>
                  Producers primarily need to use the app to disseminate
                  information. The app should allow them to distribute call
                  sheets, production documents, and shoot day updates.
                </li>
              </ul>
            </li>
            <li>
              Crew members (actors, camera people, lighting, etc.)
              <ul>
                <li>
                  Crew members primarily need to use to app to keep track of
                  when and where they are needed throughout the production
                  process. Additionally, the app should allow them to contact
                  other crew members and log work hours.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </Container>
    </Row>
  );

  const Development = () => (
    <Row className="mb-5">
      <Container className="section">
        <b className="caps-label">DEVEOPMENT PROCESS</b>
        <b className="section-heading">Development</b>
        <b className="mid-heading">Sketches</b>
        <p className="paragraph-text">
          We started the process by brainstorming various directions to take the
          interface on paper.
        </p>
      </Container>
      <Carousel variant="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={sketch1} alt="First sketch" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={sketch3} alt="Second sketch" />
        </Carousel.Item>
      </Carousel>
      <Container className="section">
        <b className="mid-heading">Lo-Fi Design</b>
        <p className="paragraph-text">
          Using these sketches, we compiled our ideas into a single wireframe
          design.
        </p>
      </Container>
      <Figure>
        <Figure.Image src={wireframe} />
      </Figure>
      <Container className="section">
        <b className="mid-heading">Hi-Fi Protoype</b>
        <p className="paragraph-text">This was the inital hi-fi prototype.</p>
      </Container>
      <Figure>
        <Figure.Image src={originalHiFi} />
      </Figure>
    </Row>
  );

  const Critique = () => (
    <Row className="mb-5">
      <Container className="section">
        <b className="caps-label">FEEDBACK</b>
        <b className="section-heading">Peer Critiques</b>
        <p className="paragraph-text">
          A classroom of 20-30 people was given 5 minutes to explore the hi-fi
          prototype we created. Then they gave feedback on their experience
          using the prototype. This feedback was extremely helpful. I was
          surprised at the small changes which made really large impacts on the
          way interaction worked.
        </p>
      </Container>
      <Carousel variant="dark">
        <Carousel.Item className="p-5">
          <img className="d-block w-100" src={homeFeedback} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item className="p-5">
          <img
            className="d-block w-100"
            src={inboxFeedback}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item className="p-5">
          <img className="d-block w-100" src={addFeedback} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <Container className="section">
        <b className="mt-5 mid-heading">Final Hi-Fi Design</b>
      </Container>
      <Figure>
        <Figure.Image src={finalHiFi} />
      </Figure>
    </Row>
  );

  const UserTesting = () => (
    <Row className="mb-5">
      <Container className="section">
        <b className="caps-label">TESTING</b>
        <b className="section-heading">User testing</b>
        <p className="paragraph-text">
          Each group was given three sessions of user testing. During these
          sessions, we designed a task that would allow the user to explore most
          of the app’s functionality. The first big takeaway from the user
          testing experiments was that improvements from critique made a huge
          difference. All three users in the experiment heavily used the changes
          from the critique.
        </p>
        <p className="paragraph-text">
          Surprises:
          <ol>
            <li>
              Two users were confused about where they would{" "}
              <b>check for new messages</b>. This was something that we
              overlooked and were not expecting. From the testing, it is clear
              that a red notification with the number of unread messages would
              make this interaction much clearer.
            </li>
            <li>
              Two users were{" "}
              <b>
                unsure if the information they were seeing had been updated{" "}
              </b>
              or if it was updated or if it was “old information.” This
              indicates that it would be helpful to provide some kind of
              confirmation or highlighting of updated information the first time
              a user sees it. This makes a lot of sense but was also not an
              anticipated problem.
            </li>
          </ol>
        </p>
      </Container>
    </Row>
  );

  const Contact = () => (
    <Row className="mb-5">
      <Container className="section">
        <b className="caps-label">CONTACT</b>
        <b className="section-heading">Contacting Cinapse</b>
        <p className="paragraph-text">
          The last part of the project was contacting the startup whose product
          we had designed. I sent an email and was lucky enough to get this
          response from the CEO:
        </p>
      </Container>
      <Figure>
        <Figure.Image src={email} />
      </Figure>
    </Row>
  );

  const Reflection = () => (
    <Row className="mb-5">
      <Container className="section">
        <b className="caps-label">CONCLUSION</b>
        <b className="section-heading">Reflection</b>
        <p className="paragraph-text">
          This was a fast-paced project that showed me and unique design
          challenge. My biggest takeaway from this project was the immense value
          of getting feedback on your design and user testing. With only two
          quick rounds of feedback, we identified so many ways to improve the
          user experience.
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
            "Interactive design for an app that allows film and television crews to manage production documents and daily workflows.",
          ],
          ["TEAM", "4 Designers"],
          ["ROLE", "Designer"],
          ["TIMELINE", "2 Weeks"],
        ]}
        imgSrc={summaryImage}
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
      <Critique />
      <Row className="my-4">
        <hr></hr>
      </Row>
      <UserTesting />
      <Row className="my-4">
        <hr></hr>
      </Row>
      <Contact />
      <Row className="my-4">
        <hr></hr>
      </Row>
      <Reflection />
      <Row className="py-5 my-5"></Row>
    </Container>
  );
}

export default Cinapse;
