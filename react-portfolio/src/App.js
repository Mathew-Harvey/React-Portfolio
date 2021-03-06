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
import Title from './components/Title';
import AboutTitle from './components/AboutTitle';
import ContactTitle from './components/ContactTitle';
import avatar from './assets/images/avatar.jpg'




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
        title:<h1><Title></Title></h1>,
        avatar: avatar,
        button: <button id="contactBtn"> <Link className="nav-link" to="/contact"><b id='contactBtnTxt'>Contact me</b></Link></button>
      },
      about:{
        title: <AboutTitle></AboutTitle>, 
        avatar: avatar,

      },
      contact:{
        title: <ContactTitle></ContactTitle>,
        avatar: avatar,

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
                <Route path="/" exact render={() => <HomePage title={this.state.home.title}  button={this.state.home.button} avatar={this.state.home.avatar} />} />
                <Route path="/about" render={() => <AboutPage title={this.state.about.title} avatar={this.state.about.avatar}/>}/>
                <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} avatar={this.state.contact.avatar}/>} />

          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;


