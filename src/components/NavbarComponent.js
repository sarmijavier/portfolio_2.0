import { Navbar, Nav, Collapse } from 'bootstrap-4-react';
import './About.css';


export const NavbarComponent = ()  => {
  return (

    <>

        <Navbar expand="lg" light bg="light">
          <Navbar.Brand  href="#">
            HJSY
        </Navbar.Brand>
          <Navbar.Toggler target="#navbarSupportedContent" />
          <Collapse navbar id="navbarSupportedContent">
            <Navbar.Nav mr="auto">
              <Nav.Item active>
                <Nav.Link   href="#">About me</Nav.Link>
              </Nav.Item>
             
              <Nav.Item active>
                <Nav.Link   href="#">Projects</Nav.Link>
              </Nav.Item>
             
              <Nav.Item active>
                <Nav.Link   href="#">Contact me</Nav.Link>
              </Nav.Item>
             
            </Navbar.Nav>
          </Collapse>
        </Navbar>
      </>

  )
}

