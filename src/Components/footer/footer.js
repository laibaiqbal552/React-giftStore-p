import React from 'react';
import {Col, Row} from 'antd';
import Logo from './logo.png';
import Play from './play.png';
import Store from './store.png';
import './footer.css';

const Footer = () => {
    return(
        <div>
        <div className="main-footer">
        <Row >
            <Col lg={10} md={18} sm={24}>
                <div className="d-flex direction-col">
                 <div>
                    <img src={Logo} className="mb-24 footer-logo" alt="img"/>
                 </div>
                 
                 <div>
                    <p className="color-light font-16 mb-24">Discover amazing things to do everywhere you go.</p>
                 </div>
                 <div className="play-store d-flex ">
                 <img src={Play} alt="img" />
                 <img src={Store} alt="img" />
                 </div>
                 
                </div>
            </Col>
            <Col lg={4} md={24} sm={24} >
                <div  className="d-flex direction-col">
                    <h3>Company</h3>
                    <a href="/">About Us</a>
                    <a href="/">Careers</a>
                    <a href="/">Press Kit</a>
                    <a href="/">Partner</a>
                </div>
            </Col>
            <Col lg={4} md={24} sm={24}>
                <div  className="d-flex direction-col">
                    <h3>Support</h3>
                    <a href="/">Get in Touch</a>
                    <a href="/">Help center</a>
                    <a href="/">Live chat</a>
                    <a href="/">How it works</a>
                </div>
            </Col>
            <Col  lg={6} md={24} sm={24}>
                <div  className="d-flex direction-col Contact-details">
                    <h3>Contact Us</h3>
                    <p>Email: support@domain.com</p>
                    <p>Phone: 1 (00) 832 2342</p>                    
                </div>
            </Col>

        </Row>
        </div>
        <hr className="footer-Hr"></hr>
            <div className="footer-bar text-center">
                <p>2020 © Uxper Studio. All rights reserved.</p>
            </div>
        </div>
    );
};
export default Footer;