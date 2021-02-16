import { NavbarComponent } from "./components/NavbarComponent";
import { Container, Col, Row, Display4,BDiv } from 'bootstrap-4-react';
import { About } from "./components/AboutComponent";
import { Project } from "./components/ProjectComponent";


function App() {
  const line = {
    display: 'inline-block',
    width: '1rem',
    height: '1rem',
    backgroundColor: '#145DA0'

  }
  return (

    <>
      <Container fluid>
        <NavbarComponent />
      </Container>
      <Container fluid id="container">
       
        <About />

        <Col style={line} border="top">
        </Col>
        <BDiv mx="auto" m="5" style={{ width: '200px'}}>
        <h1>Projects</h1>
      </BDiv>
        <Row mx="auto">
          
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
      </Container>
    </>

  )
}

export default App;
