import { Navbar, Nav, Collapse } from 'bootstrap-4-react';
import './About.css';


export const NavbarComponent = () => {
  return (

    <>
      <Nav border="bottom" mb="5" justifyContent="center">
        <Nav.Item>
          <Nav.Link href="#about" id="nav" style={{ color:"white"  }}>about_me</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="#project" id="nav" mb="2" style={{ color:"white"  }}>my_projects</Nav.Link>
        </Nav.Item>
        
        <Nav.Item>
          <Nav.Link href="#contact" id="nav" style={{ color:"white" }}>contact_me</Nav.Link>
        </Nav.Item>
      </Nav>
    </>

  )
}

