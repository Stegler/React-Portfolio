import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

class Title extends React.Component {

    render() {
        return (
            <div>
                <Jumbotron fluid>
                    <Container className="montserrat">
                        <h1>DAVID STEGER</h1>
                        <p>MERN Stack Developer</p>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default Title;
