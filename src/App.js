import { NavbarComponent } from "./components/NavbarComponent";
import { Container } from 'bootstrap-4-react';
import { About } from "./components/AboutComponent";


function App() {
  return (

    <>
      <Container fluid>
        <NavbarComponent />
      </Container>
      <Container id="container">
       
        <About />
      </Container>
    </>

  )
}

export default App;
