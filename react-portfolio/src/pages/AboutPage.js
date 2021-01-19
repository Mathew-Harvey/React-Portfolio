import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/content'

function AboutPage(props) {
    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hello, my name is Mat Harvey. I'm a full stack engineer with experience in AngularJS, ExpressJS, NodeJS, mySQL, MongoDB, Html, CSS, JavaScript and React.</p>
                
            <p> I like to create. I am trained as a Scientist and love to learn. I have created things, movements and experiences.</p>
            <p> Studying biology and building businesses has taught me to build systems, to solve problems and present appropriately.</p>

            <p>Whether I’m building computer systems, software systems or human systems the key principles have remained constant. Develop sound foundations that are fit for purpose and allow organic growth and further development.</p>

            <p>As a graduate web developer I want to bring this experience to your organisation.</p>

            <p>Def. ‘Nerd’: A nerd is someone who thinks the purpose of communication is submitting one's ideas to peer review. - Joscha Bach 2018</p>
            </Content>
        </div>
    )
    
}

export default AboutPage;