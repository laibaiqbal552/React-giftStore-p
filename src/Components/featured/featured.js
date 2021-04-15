import React from "react";
import "./featured.css";
import Slider from "react-slick";
import Card1 from "./f1.jpeg";
import Card2 from "./f2.jpg";
import Card3 from "./f1.jpeg";
import Card4 from "./f4.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Featured = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="container-featured featurepadding">
        <h3 className="text-center titleSection featurepadding">
          <a href="/">Featured Cities</a>
          <hr className="solidDivider"></hr>
        </h3>

        <Slider {...settings}>
          <div className="card_wrapper ps-relative">
            <div className="card ps-relative">
              <div className="card_img ps-absolute">
                <img src={Card1} alt="img"/>
              </div>
              <div className="card_content d-flex space-between direction-col">
                <div>
                  <h4>
                    <a href="/">United States</a>
                  </h4>
                </div>
                <div>
                  <h3>San Fancisco</h3>
                  <span>6 Places</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card_wrapper ps-relative">
            <div className="card ps-relative">
              <div className="card_img ps-absolute">
                <img src={Card2} alt="img" />
              </div>
              <div className="card_content d-flex space-between direction-col">
              <div>
                  <h4>
                    <a href="/">United States</a>
                  </h4>
                </div>
                <div>
                  <h3>San Fancisco</h3>
                  <span>6 Places</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card_wrapper ps-relative">
            <div className="card ps-relative">
              <div className="card_img ps-absolute">
                <img src={Card3} alt="img" />
              </div>
              <div className="card_content d-flex space-between direction-col">
              <div>
                  <h4>
                    <a href="/">United States</a>
                  </h4>
                </div>
                <div>
                  <h3>San Fancisco</h3>
                  <span>6 Places</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card_wrapper ps-relative">
            <div className="card ps-relative">
              <div className="card_img ps-absolute">
                <img src={Card4} alt="img" />
              </div>
              <div className="card_content d-flex space-between direction-col">
              <div>
                  <h4>
                    <a href="/">United States</a>
                  </h4>
                </div>
                <div>
                  <h3>San Fancisco</h3>
                  <span>6 Places</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card_wrapper ps-relative">
            <div className="card ps-relative">
              <div className="card_img ps-absolute">
                <img src={Card1} alt="img" />
              </div>
              <div className="card_content d-flex space-between direction-col">
              <div>
                  <h4>
                    <a href="/">United States</a>
                  </h4>
                </div>
                <div>
                  <h3>San Fancisco</h3>
                  <span>6 Places</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card_wrapper ps-relative">
            <div className="card ps-relative">
              <div className="card_img ps-absolute">
                <img src={Card2} alt="img" />
              </div>
              <div className="card_content d-flex space-between direction-col">
              <div>
                  <h4>
                    <a href="/">United States</a>
                  </h4>
                </div>
                <div>
                  <h3>San Fancisco</h3>
                  <span>6 Places</span>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
export default Featured;
