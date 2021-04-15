import React from 'react';
import { Row, Col} from 'antd';
import Who from './who.jpg'; 
import './WhoWe.css';


const Whowe = () => {
    return(
        <div className=" container ">
             <Row>
                 <Col md={12} sm={24} className="who-we-left">
                    <div className="who-we-left_inner-col d-flex justify-center direction-col">
                        <h3 className="title-who mb-18 ">
                            Who We Are 
                        </h3>
                        <p className="text-dark font-18 pb-32">Many desktop publishing 
                            packages and web page
                            editors now use Lorem Ipsum as their default model text, and a
                            search for ‘lorem
                            ipsum’ will uncover many web sites still in their infancy.
                            Various versions have evolved over the years, sometimes by
                            accident.
                        </p>
                        <div>
                        <a href="/" className="read-more text-dark">Read More</a>
                        </div>

                    </div>
                 </Col>
                 <Col md={12} sm={24}>
                    <div className="who-we-right">
                        <img src={Who} className="w-100" alt="img" />
                    </div>
                 </Col>
             </Row>
            
        </div>
    );
};
export default Whowe;