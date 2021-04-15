import React from "react";
import { Row, Col, Card } from 'antd';
import './Cards.css';
import Pic1 from './pic1.jpg';
import Pic2 from './pic2.jpg';
import Pic3 from './pic3.jpg';

const Cards = () => {
  return (
    <div  className="position-relative paddingtrending  bgColorContainer container">
      <h3 className="text-center title-section">
        <a href="/" className="title-section_a" >Trending Business Place</a>
        <hr className="solidDivider"></hr>
      </h3>
      <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col lg={6} md={12} sm={24} >
        <Card  bordered={false} >
        <img src={Pic1}  className="cardimg w-100" alt="img" />
         <h3 className="placeTitle">EarthBody</h3> 
        </Card>
      </Col>
      <Col lg={6} md={12} sm={24} >
        <Card  bordered={false} >
        <img src={Pic2}  className="cardimg w-100" alt="img" />
         <h3 className="placeTitle">EarthBody</h3> 
        </Card>
      </Col>
      <Col lg={6} md={12} sm={24} >
        <Card  bordered={false} >
        <img src={Pic3}  className="cardimg w-100" alt="img" />
         <h3 className="placeTitle">EarthBody</h3> 
        </Card>
      </Col>
      <Col lg={6} md={12} sm={24} >
        <Card  bordered={false} >
        <img src={Pic1}  className="cardimg w-100" alt="img" />
         <h3 className="placeTitle">EarthBody</h3> 
        </Card>
      </Col>
      
      
      
    </Row>
  </div>
    </div>
  );
};
export default Cards;
