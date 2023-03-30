import Carousel from 'react-bootstrap/Carousel';
import {CarouselIndicators} from 'react-bootstrap';
import './aCarousel.css'

const CarouselHomeRes = () => {
  return (
    <Carousel fade id='carouselRes' interval="1000" >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./slidebarru1.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./slidebarru2.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./slidebarru3.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHomeRes;