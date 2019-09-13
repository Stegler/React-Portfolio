import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

class Title extends React.Component {

    render() {
        return (
            <div>
                <Jumbotron fluid>
                    <Container>
                        <h1>David Steger</h1>
                        <p>MERN Stack Developer</p>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default Title;
