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
import PlantStudio from "./components/PlantStudio";
import Storyboard from "./components/Storyboard";
import ContactBar from "./components/blog/ContactBar";

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" variant="light">
        <Container>
          <Navbar.Brand className="nav-name py-4" href="/UIUX-portfolio">
            <b>Clark Oh-Willeke</b>
          </Navbar.Brand>
          <Nav>
            <Nav.Link className="nav-name" href="/UIUX-portfolio/#work">
              <b>WORK</b>
            </Nav.Link>
            <Nav.Link className="nav-name" href="/UIUX-portfolio/about">
              <b>ABOUT</b>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route exact path="/UIUX-portfolio" element={<Homepage />}></Route>
          <Route exact path="/UIUX-portfolio/about" element={<About />}></Route>
          <Route
            exact
            path="/UIUX-portfolio/work/brown-mma"
            element={<BrownMMA />}
          ></Route>
          <Route
            exact
            path="/UIUX-portfolio/work/cinapse"
            element={<Cinapse />}
          ></Route>
          <Route
            path="/UIUX-portfolio/work/plant-studio"
            element={<PlantStudio />}
          ></Route>
          <Route
            exact
            path="/UIUX-portfolio/work/storyboard"
            element={<Storyboard />}
          ></Route>
        </Routes>
      </BrowserRouter>
      <ContactBar />
    </div>
  );
}

export default App;
