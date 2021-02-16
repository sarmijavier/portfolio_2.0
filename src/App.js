import { NavbarComponent } from "./components/NavbarComponent";
import { Container, Col, Row } from 'bootstrap-4-react';
import { About } from "./components/AboutComponent";
import { Project } from "./components/ProjectComponent";


function App() {
  return (

    <>
      <Container fluid>
        <NavbarComponent />
      </Container>
      <Container id="container">
       
        <About />
        <Row>
          <Col>
          <Project />
          </Col>
          <Col>
          <Project />
          </Col>
          <Col>
          <Project />
          </Col>
        </Row>
        <Project />
      </Container>
    </>

  )
}

export default App;
