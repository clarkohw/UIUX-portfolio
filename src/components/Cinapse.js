import "./CaseStudy.css";
import Container from "react-bootstrap/Container";
import TopSummary from "./blog/TopSummary";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";
import summaryImage from "../images/cinapse/top-summary.png";

function Cinapse() {
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
        <p className="paragraph-text"></p>
      </Container>
    </Row>
  );
  return (
    <Container fluid className="px-5">
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
      <Row className="mb-5">
        <Container className="section">
          <b className="caps-label">CONTEXT</b>
          <b className="section-heading">About the project</b>
          <p className="paragraph-text">
            This project was for my UI/UX class at Brown University. The
            assignment was to choose a Y-combinator startup and iteratively
            design the product based on only the company description. This
            included sketching, wireframing, designing, critiques, and user
            testing. The finished product was an interactive Figma prototype.{" "}
          </p>
        </Container>
      </Row>
      <Row className="my-4">
        <hr></hr>
      </Row>
      <Problem></Problem>
      <Row className="my-4">
        <hr></hr>
      </Row>
      <Development></Development>
    </Container>
  );
}

export default Cinapse;
