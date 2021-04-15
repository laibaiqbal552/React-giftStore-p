import React from "react";
import Slider from "react-slick";
import { Row, Col} from 'antd';
import './Category.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Category = () => {
    const settings = {
      dots: true,
      arrows: true,
      centerMode: true,
    centerPadding: '60px',
      // infinite: true,
      // speed: 500,
      // autoplay: true,
      speed: 2000,  
      autoplaySpeed: 2000,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
      
    };
    return ( 
      <div>
      <div  className="position-relative container-category py-category">
      <div>
        <h3 className="text-center title-section">
          <a href="/" className="title-section_a" >Browse Businesses by Category</a>
          <hr className="solidDivider"></hr>
        </h3>
      </div>
        
        <Slider {...settings}>
          <div>
            <Row>
              <Col span={24} >
              <div className="each-circle-padding">
                  <div className="circle-div circle-1">
                    <p>Stay</p><br /><br />
                    <p>4 places</p>
                  </div>
              </div>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col span={24} >
              <div className="each-circle-padding">
                  <div className="circle-div circle-2">
                    <p>Stay</p><br /><br />
                    <p>4 places</p>
                  </div>
              </div>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col span={24} >
              <div className="each-circle-padding">
                  <div className="circle-div circle-3">
                    <p>Stay</p><br /><br />
                    <p>4 places</p>
                  </div>
              </div>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col span={24} >
              <div className="each-circle-padding">
                  <div className="circle-div circle-4">
                    <p>Stay</p><br /><br />
                    <p>4 places</p>
                  </div>
              </div>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col span={24} >
              <div className="each-circle-padding">
                  <div className="circle-div circle-5">
                    <p>Stay</p><br /><br />
                    <p>4 places</p>
                  </div>
              </div>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col span={24} >
              <div className="each-circle-padding">
                  <div className="circle-div circle-6">
                    <p>Stay</p><br /><br />
                    <p>4 places</p>
                  </div>
              </div>
              </Col>
            </Row>
          </div>
         
        </Slider>
      </div>
   
    
    </div>
  );
};
export default Category;
