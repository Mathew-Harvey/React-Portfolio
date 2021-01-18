import React from 'react';
import Untitled1 from '../assets/images/Untitled1.png';
import Untitled2 from '../assets/images/Untitled2.png';
import Untitled3 from '../assets/images/Untitled3.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Card from '../components/Card'


class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0, 
                    title: 'First project', 
                    subTitle: 'First project description', 
                    imgSrc: Untitled1, 
                    link: 'http://thebodyweightgym.net',
                    selected: false
                },
                {
                    id: 1, 
                    title: 'Second project', 
                    subTitle: 'Second project description', 
                    imgSrc: Untitled2, 
                    link: 'http://thebodyweightgym.net',
                    selected: false
                },   
                {
                    id: 2, 
                    title: 'Third project', 
                    subTitle: 'Third project description', 
                    imgSrc: Untitled3, 
                    link: 'http://thebodyweightgym.net',
                    selected: false
                },
            ],
        }
    }

    handleCardClick = (id) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems= (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;