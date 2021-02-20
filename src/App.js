import { NavbarComponent } from "./components/NavbarComponent";
import { Container, Col, Row, BDiv } from 'bootstrap-4-react';
import { About } from "./components/AboutComponent";
import { Footer } from "./components/FooterComponent";
import { Project } from "./components/ProjectComponent";
import { projects } from "./projects/project";
import React, { useState } from 'react';




const App = ({ defautlProjects = projects }) => {

  const [projects, setProjects] = useState(defautlProjects)
  return (


    <>

      <Container fluid id="container">
        <NavbarComponent />

        <Row>
          <Col col="12">
            <BDiv mx="auto" m="5"  >
              <h4 id="about" >about_me</h4>
            </BDiv>
          </Col>

        </Row>

        <About />



        <Row>
          <Col col="12">
            <BDiv mx="auto" m="5"  >
              <h4 id="project">my_projects</h4>
            </BDiv>

          </Col>
        </Row>
        <Row mx="auto">

          {
            projects.map(project => (
              <Col col="sm-12 md-6 lg-6"  >
                <Project
                  key={project.name}
                  name={project.name}
                  url={project.url}
                  description={project.description}
                  link={project.link} />
              </Col>
            ))
          }

        </Row>
        <Col col="12">
          <BDiv mx="auto" m="5"  >
            <h4 id="contact">contact_me</h4>
          </BDiv>

        </Col>
        <Footer />
      </Container>
    </>

  )
}

export default App;
