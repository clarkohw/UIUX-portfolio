import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";
import Homepage from "./components/Homepage";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Navbar variant="light" bg="light">
        <Container>
          <Navbar.Brand href="/portfolio">Cozy Cat</Navbar.Brand>
          <Nav>
            <Nav.Link href="/portfolio#work">Work</Nav.Link>
            <Nav.Link href="/portfolio/about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/portfolio" element={<Homepage />}></Route>
          <Route path="/portfolio/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
