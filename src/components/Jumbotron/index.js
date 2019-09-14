import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

class Title extends React.Component {

    render() {
        return (
            <div>
                <Jumbotron style={{ paddingBottom: "200px", marginBottom: "0px"}} fluid>
                    <Container className="montserrat">
                        <h1 style={{ fontSize: "70px" }}>DAVID STEGER</h1>
                        <h1 style={{ fontSize: "30px", paddingLeft: "6px" }}>MERN Stack Developer</h1>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default Title;
