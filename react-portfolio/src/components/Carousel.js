import React from 'react';
import automata from '../assets/images/automata.gif';
import tbwg from '../assets/images/tbwg.gif';
import wishlist from '../assets/images/wishlist.gif';
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
                    title: 'Cellular Automata', 
                    subTitle: 'This is a celluar Automaton invented by John Conways - Game of Life', 
                    imgSrc: automata, 
                    link: 'https://mathew-harvey.github.io/game_of_life/',
                    repoLink: 'https://github.com/Mathew-Harvey/game_of_life',
                    selected: false
                },
                {
                    id: 1, 
                    title: 'The Bodyweight Gym Online', 
                    subTitle: 'Its exercise, but not as you know it. Train at home, follow along.', 
                    imgSrc: tbwg, 
                    link: 'https://mathew-harvey.github.io/The-Bodyweight-Gym-Online/index.html',
                    repoLink: 'https://github.com/Mathew-Harvey/The-Bodyweight-Gym-Online',
                    selected: false
                },   
                {
                    id: 2, 
                    title: 'The Wishlist', 
                    subTitle: 'Pushing CSS forward: Enter - The Wishlist App.', 
                    imgSrc: wishlist, 
                    link: 'https://festive-wish-list.herokuapp.com/',
                    repoLink: 'https://github.com/Mathew-Harvey/wish-list',
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