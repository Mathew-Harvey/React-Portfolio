import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Title from './Title';
import '../App.css';

function Hero(props) {
    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py=5">
                    <Col md={8} sm={6}>

                        <div id='titleContainer'>
                            {props.title }
                            </div>
                            {/* {props.subTitle && <h3 className="display-4 font-weight-light">{props.subTitle}</h3>} */}
                            <div id='btnContainer'>
                            {props.button}
                            </div>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;