import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./Slider.css"
import slide1 from '../assets/Slider-images/slider-1.jpg'
import slide2 from '../assets/Slider-images/slider-2.jpg'
import slide3 from '../assets/Slider-images/slider-3.jpg'
import slide4 from '../assets/Slider-images/slider-4.jpg'

const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();
const Slider = () => {
  return (
    <>

      <div className='Spacing'>
        hello
      </div>
      <Carousel className='main__container'>
        <Carousel.Item>
          <img
            className="d-block w-100 slider__images"
            src={slide1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slider__images"
            src={slide2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slider__images"
            src={slide3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slider__images"
            src={slide4}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className='slider__offer'>
        <p className='offer__heading'>SAIL WITH boAt</p>
        <p className='offer__details'>Ends in {date} {time} </p>
      </div>

    </>

  );
}

export default Slider;