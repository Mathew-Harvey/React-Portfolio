import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import '../App.css';

function Hero(props) {
    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py=5">
                    <Col md={7} sm={6}>

                        <div id='titleContainer'>
                            {props.title}
                        </div>
                
                        <div id='btnContainer'>
                            {props.button} 
                        </div>
                    </Col>
                    <Col md={4} sm={6}>

                        <div id='avatarContainer'>
                           {props.avatar}
                        </div>

                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;