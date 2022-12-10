import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";
import "./TopSummary.css";
import "../CaseStudy.css";
/*
Props:
- details: [[label, value]]
- img src

*/
function TopSummary(props) {
  return (
    <Container className="mx-0">
      <Row>
        <Col>
          {props.details.map((pair) => (
            <Stack className="align-items-start">
              <b className="caps-label">{pair[0]}</b>
              <p className="paragraph-text">{pair[1]}</p>
            </Stack>
          ))}
        </Col>
        <Col>
          <Image className="side-image" src={props.imgSrc}></Image>
        </Col>
      </Row>
    </Container>
  );
}

export default TopSummary;
