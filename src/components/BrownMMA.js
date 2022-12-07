import "./CaseStudy.css";
import Container from "react-bootstrap/Container";
import TopSummary from "./blog/TopSummary";
import summaryPicture from "../images/brown-mma/after.png";

function BrownMMA() {
  return (
    <Container>
      <h1>BrownMMA</h1>
      <TopSummary
        details={[
          [
            "Overview:",
            "I redesigned the BrownMMA website to improve the user experience. I focused on improving usability, accessibility, and responsiveness to different screen sizes. ",
          ],
          ["Team:", "1 Designer/Developer"],
          ["Timeframe:", "Two weeks"],
          ["Initial website:", "https://brownmma.com/"],
          ["Redesign:", "https://cozycat17.github.io/responsive-redesign"],
        ]}
        imgSrc={summaryPicture}
      ></TopSummary>
    </Container>
  );
}

export default BrownMMA;
