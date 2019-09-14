import React, { Component } from 'react'
import { Accordion, Button, Card, Container } from 'react-bootstrap';

export default class Menu extends Component {
    render() {
        return (
            <div>
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            About Me
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Container>Hello, my name's David Steger. I am a recent UW full-stack bootcamp graduate with passion for web development and front end design. I graduated from Central Washington University as a biology major but quickly found my true interests in technology. The ongoing rise of tech has made such a positive impact in my life that I wanted to be a part of that innovation, which has brought me to where I am today. A growing software developer learning each day the craft of building elegant, usefull and efficeint web applications! This is the beginning of my journey and I cannot wait to see how it unfolds.</Container>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            Projects
                            </Accordion.Toggle>

                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <Container>

                                    <Card style={{ width: '30rem' }}>
                                        <Card.Img variant="top" src="holder.js/100px180" />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                        </Card.Text>

                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>

                                </Container>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            Contact
    </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>Contact info</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        )
    }
}
