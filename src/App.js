import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";
import Homepage from "./components/Homepage";
import About from "./components/About";
import BrownMMA from "./components/BrownMMA";
import ScrollToTop from "./components/blog/ScrollToTop";
import Cinapse from "./components/Cinapse";

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
        <ScrollToTop />
        <Routes>
          <Route path="/portfolio" element={<Homepage />}></Route>
          <Route
            path="/portfolio/work/brown-mma"
            element={<BrownMMA />}
          ></Route>
          <Route path="/portfolio/work/cinapse" element={<Cinapse />}></Route>
          <Route path="/portfolio/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
