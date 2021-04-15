import React from "react";
import { Row, Col} from 'antd';
import BlogImg from './blog.jpeg';
import './blog.css';

const Blog = () => {  
  return (
    <div className="position-relative container bgColorContainer Blogpadding">
    <h3 className="text-center title-section">
      <a href="/"  className="title-section_a">From Our Blog</a>
      <hr className="solidDivider"></hr>
    </h3>
    <div className="containerBlog">
    <Row className="justifyCenter mb-40">
      <Col md={8} sm={12} xm={24} >
        <div className="innerCol ">
        <div className="imgDiv textCenter mb-24">
          <img  src={BlogImg}  className="w-100" alt="img" />
        </div>
          <div className="card-content">
            <div>
              <ul className="cardLinkList">
                <li>
                  <a href="/" className="card-link">TIPS & TRICKS</a>
                </li>
              </ul>
            </div>
            <h3 className="headingCard">
              <a href="/">How to add a business to Golo</a>
            </h3>
          </div>
        </div> 
      </Col>
      <Col md={8} sm={12} xm={24}>
        <div className="innerCol">
          <div className="imgDiv textCenter mb-24">
            <img  src={BlogImg}  className="w-100 " alt="img"/>
          </div>        
          <div className="card-content">
            <ul className="cardLinkList">
              <li>
                <a href="/" className="card-link">BUSINESS</a>
              </li>
              <li>
                <a href="/" className="card-link">TAKE A BREAK</a>
              </li>
            </ul>          
            <h3 className="headingCard">
              <a href="/">
              Choosing the right photos to market your business
              </a>
            </h3>
          </div>
        </div>
      </Col>
      <Col md={8} sm={12} xm={24}  >
        <div className="innerCol mb-24">
          <div className="imgDiv textCenter mb-24">
            <img  src={BlogImg}  className="w-100" alt="img" />          
          </div>
          <div className="card-content">
            <ul className="cardLinkList">
              <li>
                <a href="/" className="card-link">TIPS & TRICKS</a>
              </li>
            </ul>
            <h3 className="headingCard">
              <a href="/" className="textName"> The New Nomads Are Here</a>         
            </h3>
          </div>
        </div>
      </Col>
    
    </Row>
      <div className="text-center">
        <a href="/" className="View-more textWhite">View More</a>     
      </div>
    </div>
    </div>
  );
};
export default Blog;




