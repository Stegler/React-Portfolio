import React from 'react';
import "./style.css";
import PortfolioPic from '../../images/portfoliopic.png'
import { Container, Col, Image, Jumbotron, Row } from 'react-bootstrap';

class Title extends React.Component {

    render() {
        return (
            <div>
                <Jumbotron style={{ paddingBottom: "50px", marginBottom: "0px", background: "black", color: "white" }} fluid>
                    <Container>
                        <Row>
                            <Col>
                                <h1 style={{ fontSize: "70px", paddingTop: "50px" }}>DAVID STEGER</h1>
                                <h1 style={{ fontSize: "30px", paddingLeft: "6px" }}>Full Stack Developer</h1>
                            </Col>
                            <Col className="image-container">
                                    <Image className="image" src={PortfolioPic} roundedCircle />
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default Title;
