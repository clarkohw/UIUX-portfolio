import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";
import "./TopSummary.css";
/*
Props:
- details: [[label, value]]
- img src

*/
function TopSummary(props) {
  return (
    <Container>
      <Row>
        <Col>
          {props.details.map((pair) => (
            <Stack className="align-items-start">
              <b>{pair[0]}</b>
              <p>{pair[1]}</p>
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
