import React from "react";
import Nav from './Components/Header/Nav';
import Banner from './Components/Banner/Banner';
import Category from './Components/Category/Category';
import Cards from './Components/Cards/Cards';
import Blog from './Components/blog/blog';
import Who from './Components/WhoWe/whowe';
import Featured from './Components/featured/featured';
import AboutUs from './Components/aboutUs/aboutUs';
import Footer from './Components/footer/footer';
import 'antd/dist/antd.css';
import './App.css';

function App() {
  return (
    <div>
     <Nav />
     <Banner />
     <Category /> 
     <Cards />
     <Featured />
     <Who />
     <AboutUs />
     <Blog /> 
     <Footer />   
    </div>
  );
}

export default App;

