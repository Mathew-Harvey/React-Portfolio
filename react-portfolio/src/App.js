import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Footer from './components/Footer'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      title: 'Mathew Harvey',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path:'/about'},
        {title: 'Contact', path: '/contact'}
      ],
      home:{
        title: "Hey there! I'm Mat Harvey.",
        subTitle: "Lets Discuss, Design and Digitalize your thoughts. " ,
        button: <button id="contactBtn"> Contact me </button>
      },
      about:{
        title: 'About Me',

      },
      contact:{
        title: 'Contact Me',

      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Mathew Harvey</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>

              </Nav>
            </Navbar.Collapse>
          </Navbar>
                <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} button={this.state.home.button} />} />
                <Route path="/about" render={() => <AboutPage title={this.state.about.title}/>}/>
                <Route path="/contact" render={() => <ContactPage title={this.state.contact.title}/>} />

          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;


// https://www.youtube.com/watch?v=S8gfztz7IzQ&list=PLnpdZyv-BjINbUjmTUsyziHz_4fa9hM5G&index=3