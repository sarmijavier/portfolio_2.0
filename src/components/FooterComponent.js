import { Row, Col, BDiv } from 'bootstrap-4-react';
import { SocialIcon } from 'react-social-icons';



export const Footer = () => {

    return (
        <>
            <Row>
                <Col mx="auto"  style={{ width: '200px' }}>
                    <BDiv text="center" mx="auto" border="bottom" style={{ width: '400px' }}>
                        <BDiv m="1">
                            <SocialIcon style={{ margin:'0rem 1rem 1rem 0rem'}} target='_blank' url="https://twitter.com/SarmiJavier" network="twitter" />
                        </BDiv>
                        <SocialIcon style={{ margin:'0rem 1rem 2rem 0rem'}} target='_blank' url="https://github.com/sarmijavier#--twitter" network="github" />
                        <SocialIcon style={{ margin:'0rem 1rem 2rem 0rem'}} target='_blank' url="https://www.instagram.com/y4huarcani/" network="instagram" />
                        <SocialIcon style={{ margin:'0rem 1rem 2rem 0rem'}} target='_blank' url="https://www.linkedin.com/in/h-javier-sarmiento-y-28085a19a/" network="linkedin" />
                    </BDiv>
                </Col>
            </Row>
            <Row>



                <Col mx="auto" m="5" style={{ width: '200px' }}>
                    <BDiv text="center" mx="auto" border="bottom" style={{ width: '400px' }}>
                        "The beginning is the most important part of the work." Platon.
                    </BDiv>
                </Col>
            </Row>
        </>
    )


}