import "./CaseStudy.css";
import Container from "react-bootstrap/Container";
import TopSummary from "./blog/TopSummary";
import summaryPicture from "../images/brown-mma/after.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";
import before from "../images/brown-mma/before.png";
import dateTime from "../images/brown-mma/date-time.png";
import blurb from "../images/brown-mma/blurb.png";
import contrast from "../images/brown-mma/contrast.png";
import lowFi from "../images/brown-mma/desk-low.png";
import lowFiMobile from "../images/brown-mma/mobile-low.png";
import styleGuide from "../images/brown-mma/style-guide.png";
import demoGif from "../images/brown-mma/website-gif.gif";
import Carousel from "react-bootstrap/Carousel";

function BrownMMA() {
  return (
    <Container fluid className="content-container">
      <Row>
        <h1>BrownMMA</h1>
        <TopSummary
          details={[
            [
              "Overview:",
              "I redesigned the BrownMMA website to improve the user experience. I focused on improving usability, accessibility, and responsiveness to different screen sizes. ",
            ],
            ["Team:", "1 Designer/Developer"],
            ["Timeframe:", "Two weeks"],
          ]}
          imgSrc={summaryPicture}
        ></TopSummary>
      </Row>
      <Row className="my-4">
        <hr></hr>
      </Row>
      <Row className="mb-5">
        <Container className="section">
          <b className="caps-label">CONTEXT</b>
          <b className="section-heading">About the project</b>
          <p className="paragraph-text">
            This redesign was a project for my UI/UX class at Brown University.
            The assignment was to choose a website with a poor user experience
            and redesign it. Responsiveness to different screen sizes (mobile,
            tablet, desktop) was one of the major requirements of the project. I
            chose the BrownMMA website because I have tried to use it in the
            past and found little to no value from the interaction. I examined
            the key users and purpose of the webpage to inform my design
            decisions.
          </p>
        </Container>
      </Row>
      <Row>
        <Container className="section">
          <b className="caps-label">PROBLEM</b>
          <b className="section-heading">The Problem</b>
          <p className="paragraph-text">
            In general, the Brown MMA website does not present a digestible
            hierarchy of information. The things that people need to know are
            hidden. Elsewhere, key space is wasted. This detracts from both the
            <em>learnability</em> and <em>efficiency</em> of the website. To
            identify the most important information, I created two{" "}
            <b>personas:</b>
          </p>
        </Container>
      </Row>
      <Row className="my-2 py-4 bg-light">
        <Col lg={true}>
          <Container className="section">
            <b className="mid-heading">Avid August</b>
            <p className="paragraph-text">
              <em>Avid August</em> is a dedicated member of the club. He knows
              when regular practice times are and the vibe of each session. He
              checks the website to see when one-time events are or to get the
              contact information of the club members.
            </p>
            <ul>
              <li>
                When and where was that UFC watch party again? What day and time
                is the tournament?
              </li>
              <li>
                I need to contact the club leader because I am going to be late
                to the tournament.
              </li>
            </ul>
          </Container>
        </Col>
        <Col lg={true}>
          <Container className="section">
            <b className="mid-heading">Nervous Nelson</b>
            <p className="paragraph-text">
              <em>Nervous Nelson</em> has never attended a club meeting. He is
              trying to decide whether to go to a meeting. He is looking for
              basic information about the club. He also wants to know when and
              where meetings are if he decides to go.
            </p>
            <ul>
              <li>
                I wonder if I can just show up to this club. What would I need
                to wear and bring?
              </li>
              <li>Is this club for beginners, or is it tryout based?</li>
              <li>When and where would I go to attend a meeting?</li>
            </ul>
          </Container>
        </Col>
      </Row>
      <Row className="my-3 px-5">
        <Col>
          <div className="paragraph-text">
            Using these personas, there are three main usability issues with the
            current website:
          </div>
          <ol className="paragraph-text">
            <li>Hidden date and time details</li>
            <li>Lack of information for first-time/prospective attendees </li>
            <li>Poor accessibility</li>
          </ol>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Container className="section">
          <b className="mid-heading">1. Hidden date and time details</b>
          <p className="paragraph-text">
            Both experienced and new users rely on the website for basic time
            and place information. However, the home screen does not fill this
            need. A generic Brown bear picture occupies about 90% of the screen.
          </p>
        </Container>
        <Figure className="slide-image my-4">
          <Figure.Image src={before} />
          <Figure.Caption>
            Screenshot from the BrownMMA website homepage
          </Figure.Caption>
        </Figure>

        <Container className="section">
          <div className="paragraph-text">
            Currently, date/time information is
          </div>
          <ol className="paragraph-text">
            <li>Hidden in the middle of a paragraph</li>
            <li>
              Excludes the date and time for the kind of one-time events that
              Avid August (experienced member) is interested in.
            </li>
          </ol>
          <p className="paragraph-text">
            This can be seen below, underlined in white.{" "}
          </p>
        </Container>
        <Figure className="slide-image my-4">
          <Figure.Image src={dateTime} />
          <Figure.Caption>
            Screenshot from the BrownMMA website homepage
          </Figure.Caption>
        </Figure>
        <Container className="section">
          <b className="mid-heading">
            2. Lack of information for first-time/prospective attendees
          </b>
          <p className="paragraph-text">
            The only place on the entire website where this information is
            partially given is a small blurb at the bottom of the home page.
            However, the paragraph does not directly answer questions and leaves
            much unknown. This information could be the difference between
            Nervous Nelson checking out a meeting or not.
          </p>
        </Container>
        <Figure className="slide-image my-4">
          <Figure.Image src={blurb} />
          <Figure.Caption>
            Screenshot from the BrownMMA website homepage
          </Figure.Caption>
        </Figure>
        <Container className="section">
          <b className="mid-heading">3. Poor accessibility</b>
          <p className="paragraph-text">
            The current website has a few accessibility issues. There are a few
            contrast issues on the main homepage. WebAIM WAVE found these two:
          </p>
        </Container>
        <Figure className="slide-image my-4">
          <Figure.Image src={contrast} />
          <Figure.Caption>
            Screenshot from the WebAIM WAVE evaluation of BrownMMA website
          </Figure.Caption>
        </Figure>
      </Row>
      <Row className="my-4">
        <hr></hr>
      </Row>
      <Row>
        <Container className="section">
          <b className="caps-label">LO-FI PROTOTYPE</b>
          <b className="section-heading">Lo-Fi</b>
        </Container>
      </Row>
      <Row>
        <Figure>
          <Figure.Image src={lowFi} />
        </Figure>
        <Figure className="my-5">
          <Figure.Image src={lowFiMobile} />
        </Figure>
      </Row>
      <Row className="my-4">
        <hr></hr>
      </Row>
      <Row>
        <Container className="section">
          <b className="caps-label">HI-FI DESIGN</b>
          <b className="section-heading">Hi-Fi</b>
        </Container>
      </Row>
      <Row>
        <Figure>
          <Figure.Image src={styleGuide} />
        </Figure>
        <b className="mid-heading">Final Demo</b>
        <Figure>
          <Figure.Image src={demoGif} />
        </Figure>
      </Row>
      <Row className="my-4">
        <hr></hr>
      </Row>
      <Row>
        <Container className="section">
          <b className="caps-label">CONCLUSION</b>
          <b className="section-heading">Afterthoughts</b>
          <p className="paragraph-text">
            This project truly demonstrated the exponential growth of time as
            development progresses. The lo-fi design took a fraction of the time
            that the hi-fi design took. The website development was much more
            difficult than the hi-fi design. Luckily, by using multiple stages
            of prototyping, I felt confident that my final development time
            would be spent on something that was worth the effort.{" "}
          </p>
        </Container>
      </Row>
      <Row className="py-5 my-5"></Row>
    </Container>
  );
}

export default BrownMMA;
