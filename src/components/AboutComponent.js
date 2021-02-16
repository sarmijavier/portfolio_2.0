import { Row, Col } from 'bootstrap-4-react';



export const About = () => {

    const boxStyle = {
        display: 'inline-block',
        width: '5rem',
        height: '20rem',
        margin: '.25rem',
        backgroundColor: '#145DA0'
      }
    return (
        <>
        <Row>
            <Col style={boxStyle} border="right" className="animate__animated animate__backInLeft" >
                <span mr="5" >
                    <br />
                    <br />
                    <br />
                    <br />
                    
                    Hola mi nombre es Javier, y soy un apasionado por la tecnología.
                </span>

            </Col>
            <Col> 
                    <br />
                    <br />
                    <br />
                    <br />
                <Row>
                    <Col offset="lg-4">                
                        <h2 className="animate__animated animate__backInLeft" >Soy Desarrollador</h2>
                    </Col>
                    <Col></Col>
                    <Col offset="lg-8">                
                        <h2 className="animate__animated animate__backInLeft" >De Software</h2>
                    </Col>
                
                </Row>       
                
            </Col>
            <Col></Col>
        </Row>

    
        </>
    )
}