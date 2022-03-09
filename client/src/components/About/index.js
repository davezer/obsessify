import React from 'react';
import { Container } from 'react-bootstrap';
import Contact from '../Contact';

function About() {
    return(
        <>
        <Container id="about" className="about">
            <Container className='row upper-container'> 
                <div className="image-container">
                    
                    <h1 className="intro-title">We are</h1>
                    <h1 className="intro-name">Obsessify</h1>
                </div>
                <div className='text-slider-div'>
                    <span className="intro-text-slider">
                        
                    </span>
                </div>
            </Container>
            <Container>
                <div className="inner-container">
                    <div className="row">
                        <div className="about-description ">
                            <p>
                                Here at Obsessify we strive to bring together a community of collectors of all things sports and pop culture to show off their collections. <br></br>
                                From grails to sentimental pieces, we encourage you to show it off!
                            </p>
                        
                        </div>
                         
                    </div>
                    <div className="about-contact">
                        <Contact></Contact>
                    </div>
                </div>
            </Container>    
        </Container>
        </>
    );
}



export default About;