import React from "react";
import "./Header.scss";
import Carousel from "react-bootstrap/Carousel";
import firstImg from "../../assets/ditaLogo.jpeg";

// import { images } from "../../constants";

const Header = () => {
  return (
    <div className="Carousel__wrapper" id="home">
      <Carousel>
        <Carousel.Item interval={1700}>
          <img
            className="imgCarousel"
            src="https://images.pexels.com/photos/3182792/pexels-photo-3182792.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="First slide"
          />
          <Carousel.Caption className="Carousel__caption">
            <h3>Do you want to hire someone ?</h3>
            <p>Have a pending task or need a website ?</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="imgCarousel"
            // style={{ height: "200px" }}
            src="https://images.pexels.com/photos/996954/pexels-photo-996954.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Second slide"
          />
          <Carousel.Caption className="Carousel__caption">
            <h3>Are You commuting today.</h3>
            <p>Check which bus is going where and from where.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="imgCarousel"
            src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Third slide"
          />
          <Carousel.Caption className="Carousel__caption">
            <h3>Hungry Already ?</h3>
            <p>
              Check out people's favorite dish around Athi River and Any Offers
              available around the community.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="imgCarousel"
            src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Third slide"
          />
          <Carousel.Caption className="Carousel__caption">
            <h3>Need a place to stay ?</h3>
            <p>
              Check out houses available around the community. Also get the
              pricing and contact info of the caretaker.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Header;
// export default AppWrap(Header, "home");
