import { Row, Col, BDiv, Figure } from 'bootstrap-4-react';
import techImage from './technologies.png';


export const About = () => {
    return (
        <>

            <Row className="animate__animated animate__backInLeft">
                <Col col="sm-12 md-6 lg-6" border="right">
                    <BDiv mx="auto" m="5" style={{ width: '100%' }}>
                        <spma>
                            The life
                            is a sprint full of constantly learning, researching and helping.
                        </spma>
                    </BDiv>


                </Col>
                <Col col="sm-12 md-6 lg-6" border="right">
                    <BDiv mx="auto" m="5" style={{ width: '100%' }}>
                        <spam>
                            Hi, my name is H Javier Sarmiento Y,<br /> I'm a computer science student with passion for technology. Always learning,
                            improving my knowledge and skills. Willing to accept challenges and giving the 110% of me.
                        </spam>
                    </BDiv>
                </Col>

            </Row>

            <Row>

                <Col col="12">
                    <BDiv mx="auto" m="5"  >
                        <h4>technologies</h4>
                    </BDiv>
                </Col>


                <Col text="center">
                    <Figure>
                        <Figure.Image mx="auto" style={{ background: '#015249', width: '60%' }} src={techImage} />
                    </Figure>
                </Col>

            </Row>


        </>
    )
}