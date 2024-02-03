import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselExampleCaptions = () => {
  const border = {
    borderRadius: '10px' 
  }
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/random/1920x700/?e-sports"
          alt="First slide"
          style={border}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/random/1920x700/?e-sports"
          alt="Second slide"
          style={border}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselExampleCaptions;
