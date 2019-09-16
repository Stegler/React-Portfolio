import React, { Component } from 'react'
import { Accordion, Button, Card, Container } from 'react-bootstrap';
import ClickyGame from '../../images/clickygame.png'
import Netscape from '../../images/netscape.png'

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
                                <Container>Hello, my name's David Steger. I am a recent UW full-stack bootcamp graduate with a passion for web development and front end design. I graduated from Central Washington University as a biology major but quickly found my true interest in technology. The ongoing rise of tech has made such a positive impact in my life that I wanted to be a part of that innovation, which has brought me to where I am today! A growing software developer learning the craft of building elegant, usefull and efficeint web applications each day! It's exciting to be on the cutting edge of how most of the world is run today. I cannot wait to see how my journey unfolds.</Container>
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

                                    <Card style={{ width: '100%', marginBottom: '20px' }}>
                                        <Card.Img variant="top" src={ ClickyGame } />
                                        <Card.Body>
                                            <Card.Title>Car Click Memory Game</Card.Title>
                                            <Card.Text>
                                                Test your memory in this Car Click Memory Game!
                                        </Card.Text>

                                        <a href="https://github.com/Stegler/Clicky-Game" variant="info"><Button variant="info">GitHub</Button></a>
                                        </Card.Body>
                                    </Card>

                                    <Card style={{ width: '100%' }}>
                                        <Card.Img variant="top" src={ Netscape } />
                                        <Card.Body>
                                            <Card.Title>Cave Runner</Card.Title>
                                            <Card.Text>
                                                2D Platform game. Collect the coins as fast as you can! See where you rank on the leaderboards!
                                        </Card.Text>

                                        <a href="https://github.com/Stegler/Netscape" variant="info"><Button variant="info">GitHub</Button></a>

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
                            <Card.Body>Email: d.steger@ymail.com |
                                Phone: 360-528-1280
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        )
    }
}
