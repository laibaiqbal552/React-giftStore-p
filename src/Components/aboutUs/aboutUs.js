import React from 'react';
import { Row, Col } from 'antd';
import Slider from "react-slick";
import './aboutUs.css';
import Avatar1 from './avatar1.jpg';
import Avatar2 from './avatar2.jpg';
function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        
        onClick={onClick}
      />
    );
  }

const AboutUs = () => {
    const settings = {
        dots: true,
        arrows: true,
        centerMode: true,
      centerPadding: '60px',
        infinite: true,
        // speed: 500,
        // autoplay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        speed: 2000,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
        
      };
      
    return(
        <div>
            <div className="aboutus-padding container-aboutus position-relative dFlex justifyCenter directionCol ">
                <h3 className="text-center title-section">
                    <a href="/" className="title-section_a" >People Talking About Us</a>
                    <hr className="solidDivider"></hr>
                </h3>
              
                <Slider {...settings}>
          <div>
            <div className="testimonial">
                <Row>
                    <Col lg={9} sm={12}>
                        <div className="img">
                            <img src={Avatar1} alt="img" />
                        </div>
                    </Col>
                    <Col lg={15} sm={12}> 
                        <p className="font-16 textLight">
                        Excellent theme! I’ve been searching
                        for a simple, customizable, and stylish directory
                        theme for many years! Finally, Golo was the answer.
                        </p>
                        <span className="developer">Christian</span><br></br>
                        <span className="profession">Developer</span>
                    </Col>
                </Row>
            </div>
          </div>
          <div>
          <div className="testimonial">
                <Row>
                    <Col lg={9} sm={12}>
                        <div className="img">
                            <img src={Avatar2} alt="img" />
                        </div>
                    </Col>
                    <Col lg={15} sm={12}> 
                        <p className="font-16 textLight">
                        Excellent theme! I’ve been searching
                        for a simple, customizable, and stylish directory
                        theme for many years! Finally, Golo was the answer.
                        </p>
                        <span className="developer">Christian</span>
                        <span className="profession">Developer</span>
                    </Col>
                </Row>
            </div>
          </div>
          <div>
          <div className="testimonial">
                <Row>
                    <Col lg={9} sm={12}>
                        <div className="img">
                            <img src={Avatar1} alt="img" />
                        </div>
                    </Col>
                    <Col lg={15} sm={12}> 
                        <p className="font-16 textLight">
                        Excellent theme! I’ve been searching
                        for a simple, customizable, and stylish directory
                        theme for many years! Finally, Golo was the answer.
                        </p>
                        <span className="developer">Christian</span>
                        <span className="profession">Developer</span>
                    </Col>
                </Row>
            </div>
          </div>
          <div>
          <div className="testimonial">
                <Row>
                    <Col lg={9} sm={12}>
                        <div className="img">
                            <img src={Avatar2} alt="img" />
                        </div>
                    </Col>
                    <Col lg={15} sm={12}> 
                        <p className="font-16 textLight">
                        Excellent theme! I’ve been searching
                        for a simple, customizable, and stylish directory
                        theme for many years! Finally, Golo was the answer.
                        </p>
                        <span className="developer">Christian</span>
                        <span className="profession">Developer</span>
                    </Col>
                </Row>
            </div>
          </div>
          
          
        </Slider>
            </div>
        </div>
    );
};
export default AboutUs;
