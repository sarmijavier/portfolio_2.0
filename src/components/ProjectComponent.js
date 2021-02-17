import { Card, Figure } from 'bootstrap-4-react';


export const Project = ({ name, url, description, link }) => {
    console.log(link)
    return (
        <Card  text="center" className='animate__animated animate__bounceIn' m="2" border="dark" >
            <Card.Body>
                <Card.Title mx="auto" style={{ color: '#015249', height: '2rem' }} > {name} </Card.Title>
                <Figure>
                    <Figure.Image mx="auto" style={{ background: '#015249', width: '60%' }} src={url}/>
                    <Figure.Caption style={{ background: '#015249', color:'white' }}>{ description }</Figure.Caption>
                </Figure>
                <Card.Link target='_blank' href={link} style={{ color: '#015249', height: '2rem' }}>see on GitHub</Card.Link>
            </Card.Body>
        </Card>
    )
}