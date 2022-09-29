import React from "react";
import "./Header.scss";
import Carousel from "react-bootstrap/Carousel";

// import { images } from "../../constants";

const Header = () => {
  return (
    <div className="Carousel__wrapper" id="home">
      <Carousel>
        <Carousel.Item interval={1700}>
          <img
            className="imgCarousel"
            src="https://images.pexels.com/photos/6146970/pexels-photo-6146970.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="First slide"
          />
          <Carousel.Caption className="Carousel__caption">
            <h3>Daystar Information Technology Association</h3>
            <p>A community working towards the sole purpose of greatness</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="imgCarousel"
            // style={{ height: "200px" }}
            src="https://images.pexels.com/photos/6893810/pexels-photo-6893810.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Second slide"
          />
          <Carousel.Caption className="Carousel__caption">
            <h3>Where the world meets tech.</h3>
            <p>
              Solving real world issues with the most powerful technologies.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="imgCarousel"
            src="https://images.pexels.com/photos/6140697/pexels-photo-6140697.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Third slide"
          />
          <Carousel.Caption className="Carousel__caption">
            <h3>Executive Team</h3>
            <p>
              Powered by the most brilliant minds, nothing can stand in our way.
              To the stars we go.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Header;
// export default AppWrap(Header, "home");
