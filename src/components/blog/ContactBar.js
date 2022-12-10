import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ContactBar.css";

const ContactBar = () => {
  return (
    <Container fluid className="bg-light py-3 mt-5">
      <Row>
        <Col xs={12} className="text-center">
          <h4>Get In Touch</h4>
          <p>Interested in working together? I'd love to hear from you!</p>
          <p>Email: cozycat@example.com</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactBar;
