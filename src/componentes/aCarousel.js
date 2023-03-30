import Carousel from 'react-bootstrap/Carousel';
import './aCarousel.css'

const CarouselHome = () => {
  return (
    <Carousel fade id='carousel' interval="1000" >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./slidebarru4.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./slidebarru5.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./slidebarru6.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;