import React from 'react';
import Typed from 'react-typed';

import { Container} from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';


const Home = () => {

  

  return(

    <>
    <Container fluid className='typed-container'>
      <div className='home-div'>
          <h1 className='home-title'>
            <em>
              <div className='text-slider-div'>
                  <span className="intro-text-slider">
                      <Typed
                      strings={[
                          "This is about sports.",
                          "This is about comics.",
                          "This is about collecting.",
                          "This is obsessed."  
                      ]}
                      typeSpeed={50}
                      backSpeed={50}
                      />
                  </span>
              </div>
            </em>
          </h1>
      </div> 
    </Container>
      {/* <Container className="category-con">
        <Row classname="category-row">
          <Col>Sports</Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container> */}
      <Container className="carousel">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block carousel-img"
              src="https://i.ebayimg.com/images/g/DDEAAOSwcttcFTS7/s-l300.jpg"
              alt="DWRook"
            />
            <Carousel.Caption>
              <h3 className='carousel-name'>David Wright Rookie Card</h3>
              <p className='carousel-desc'>Hardcoded for example.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block carousel-img"
              src="https://s2982.pcdn.co/wp-content/uploads/2021/11/spider-man-amazing-fantasy-15-1.jpeg.optimal.jpeg"
              alt="spidey"
            />

            <Carousel.Caption>
              <h3 className='carousel-name'>Spiderman First Appearance</h3>
              <p className='carousel-desc'>Hardcoded for example.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block carousel-img"
              src="https://i.ebayimg.com/images/g/bFEAAOSw265hH~rY/s-l400.jpg"
              alt="PERook"
            />

            <Carousel.Caption>
              <h3 className='carousel-name'>Patrick Ewing Rookie Card</h3>
              <p className='carousel-desc'>Hardcoded for example.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    
      {/* <Container className='home-container'>
        <Row className='home-rows'>
          <Col>
          <Card className='random-card'>
            <Card.Img variant="top" src="https://i.ebayimg.com/images/g/DDEAAOSwcttcFTS7/s-l300.jpg" />
            <Card.Body>
              <Card.Title className='random-title'>David Wright Rookie</Card.Title>
              <Card.Text className='random-text'>
                Hardcoded to see example
              </Card.Text>
              <Button className='random-button'>View Item</Button>
            </Card.Body>
          </Card>
          </Col>
          <Col xs={6}>
          <Card className='random-card'>
            <Card.Img variant="top" src="https://s2982.pcdn.co/wp-content/uploads/2021/11/spider-man-amazing-fantasy-15-1.jpeg.optimal.jpeg" />
            <Card.Body>
              <Card.Title className='random-title'>Spiderman No. 1</Card.Title>
              <Card.Text className='random-text'>
                Hardcoded to see example
              </Card.Text>
              <Button className='random-button'>View Item</Button>
            </Card.Body>
          </Card>
          </Col>
          <Col> 
            <Card className='random-card'>
              <Card.Img variant="top" src="https://i.ebayimg.com/images/g/bFEAAOSw265hH~rY/s-l400.jpg" />
              <Card.Body>
                <Card.Title className='random-title'>Patrick Ewing Rookie</Card.Title>
                <Card.Text className='random-text'>
                  Hardcoded to see example
                </Card.Text>
                <Button className='random-button'>View Item</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container> */}
    </>  
  )
}



export default Home;