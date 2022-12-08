import Container from "react-bootstrap/Container";
import TopSummary from "./blog/TopSummary";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";
import Figure from "react-bootstrap/Figure";
import printerSetup from "../images/storyboard/printer-sketch.png";
import helpfulHenry from "../images/storyboard/helpful-henry.png";
import studentSophie from "../images/storyboard/student-sophie.png";
import storyboard from "../images/storyboard/storyboard.png";

function Storyboard() {
  const Title = () => <h1>Storyboard and Personas</h1>;

  const Context = () => (
    <Row className="mb-5">
      <Container className="section">
        <b className="caps-label">CONTEXT</b>
        <b className="section-heading">About the project</b>
        <p className="paragraph-text">
          This project was part of my UI/UX course at Brown University. The
          assignment was to choose an interface and then observe real user
          interactions with that interface. This included interviewing a few
          users after an interaction. The assignment was to use this research to
          create two design tools: User personas and a storyboard.
        </p>
        <p className="paragraph-text">
          I choose the first-floor Page Robinson printer as my interface to
          observe. The computer next to the printer allows students to execute
          print jobs that they have uploaded to the PaperCut website. The
          PaperCut website (where you upload documents) is one aspect of this
          interface. However, I chose to focus on the in-person printer part of
          the interface.
        </p>
      </Container>
      <Figure>
        <Figure.Image src={printerSetup} />
      </Figure>
      <Container className="section">
        <b className="mid-heading">Interface</b>
        <p className="paragraph-text">
          The interface solves the problem of students needing to print class
          materials. The ID card allows the printer to associate the current
          user with their printing account. The computer screen allows students
          to access print jobs (uploaded documents) that they can print at any
          print station.
        </p>
      </Container>
    </Row>
  );

  const Research = () => (
    <Row className="mb-5">
      <Container className="section">
        <b className="caps-label">RESEARCH</b>
        <b className="section-heading">User Research</b>
        <b className="mid-heading">Observations</b>
        <ul className="paragraph-text">
          <li>
            Many students walked up to the print station, swiped their ID cards,
            and took their printed materials.
          </li>
          <li>
            Most students used the printer monitor (left in the sketch) to
            execute their print jobs. However, some students used direct print
            from their laptops.
          </li>
          <li>One more experienced student helped the another print.</li>
          <li>
            Two people working for Brown IT, arrived with reams of paper. They
            refilled the trays and used to smaller printer screen to check ink
            levels and print a test sheet.
          </li>
        </ul>

        <b className="mid-heading">Interview Questions</b>
        <ul className="paragraph-text">
          <li>Why did you need to use the printer?</li>
          <li>
            How often do you need to print things out (interact with the
            printer)?
          </li>
          <li>What was the easiest part of interacting with the printer?</li>
          <li>What was the hardest part of interacting with the printer?</li>
          <li>
            How did you initially figure out how to print? (if applicable)
          </li>
        </ul>

        <b className="mid-heading">Answers</b>
        <b className="paragraph-text">General</b>
        <ul className="paragraph-text">
          <li>
            2 of the 3 people I interviewed needed to use the printer to print
            their chemistry problem set (weekly). The third person I interviewed
            was a Brown IT worker who was checking on the status of the printer.
          </li>
        </ul>
        <b className="paragraph-text">Students</b>
        <ul className="paragraph-text">
          <li>
            Easiest for students: swiping the ID card to execute the print jobs,
            or using the direct print feature (after it had been set up).
          </li>
          <li>
            Hardest for students: initially setting up the direct print feature
            and customizing print jobs for things like double-sided printing
          </li>
        </ul>
        <b className="paragraph-text">IT Employee</b>
        <ul className="paragraph-text">
          <li>
            The IT employee uses the printer daily for maintenance. Checking ink
            levels and refiling paper is generally easy, while replacing parts
            or refiling printers with locks is more difficult.
          </li>
          <li>
            The IT employee also noted that sometimes the job can be difficult
            because it is monotonous, but enjoys the challenge of solving more
            difficult problems and helping students.
          </li>
        </ul>
      </Container>
    </Row>
  );

  const Personas = () => (
    <Row className="mb-5">
      <Container className="section">
        <b className="caps-label">PERSONAS</b>
        <b className="section-heading">Creating User Personas</b>
        <p className="paragraph-text">
          A persona is an imaginary person with thoughts, feelings, and goals.
          The key purpose of a persona is to allow the designer to empathize
          with the users. Good personas allow designers to create interfaces
          that make it easy for users to accomplish their goals.
        </p>
      </Container>
      <Carousel variant="dark">
        <Carousel.Item className="p-5">
          <img
            className="d-block w-100"
            src={helpfulHenry}
            alt="Henry persona"
          />
        </Carousel.Item>
        <Carousel.Item className="p-5">
          <img
            className="d-block w-100"
            src={studentSophie}
            alt="Sophie persona"
          />
        </Carousel.Item>
      </Carousel>
    </Row>
  );

  const Storyboard = () => (
    <Row className="mb-5">
      <Container className="section">
        <b className="caps-label">STORYBOARD</b>
        <b className="section-heading">Adding a story</b>
        <p className="paragraph-text">
          This storyboard imagines an interaction between Helpful Henry and the
          printers. It can be used to better empathize with users like Helpful
          Henry, putting an image and story behind the user.
        </p>
      </Container>
      <Figure>
        <Figure.Image src={storyboard} />
      </Figure>
    </Row>
  );

  const Reflection = () => (
    <Row className="mb-5">
      <Container className="section">
        <b className="caps-label">CONCLUSION</b>
        <b className="section-heading">Reflection</b>
        <p className="paragraph-text">
          This project helped me realize that for a given interface the user
          interactions may not be exactly what you expect them to be. I would
          never have thought to think of the maintenance perspective for the
          Brown printer system. Only through observation did I come across this
          user group. Ultimately, I wish I was able to capture more detailed
          observations on the interface that the IT worker was using, however I
          was still impressed by how much can be learned by sitting and watching
          users interact with an interface.
        </p>
      </Container>
    </Row>
  );

  return (
    <Container fluid className="px-5">
      <Title />
      <TopSummary
        details={[
          [
            "OVERVIEW",
            "A storyboard and set of personas for the Brown University printing system. ",
          ],
          ["TEAM", "1 UX Researcher"],
          ["TIMEFRAME", "2 Weeks"],
        ]}
      />
      <Row className="my-4">
        <hr></hr>
      </Row>
      <Context />
      <Row className="my-4">
        <hr></hr>
      </Row>
      <Research />
      <Row className="my-4">
        <hr></hr>
      </Row>
      <Personas />
      <Row className="my-4">
        <hr></hr>
      </Row>
      <Storyboard />
      <Row className="my-4">
        <hr></hr>
      </Row>
      <Reflection />
    </Container>
  );
}

export default Storyboard;
