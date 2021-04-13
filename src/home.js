import React from 'react';
class Home extends React.Component{
	render(){
		return(
		<div>
		

<header class="header">
  <nav class="nav d-flex justify-content-between">
      <a href="#" class="logo">
        <img src="assets/images/logo.png" alt="logo" />
      </a>
      <a href="#" id="btnHamburger" class="header__toggle open hide-for-desktop" onclick="openmenu()">
        <span></span>
        <span></span>
        <span></span>
      </a>
      
      <div class="header__link hide-for-mobile">
        <a href="">Home</a>
        <a href="">About Us</a>
        <a href="">Services</a>
        <a href="">Blogs</a>
      </div>
      <div class="header_btn hide-for-mobile">
        <a href="">Gift Finder</a>
        
      </div>
      <div id="myNav" class="overlay">
        <div class="overlay-content">
          <a href="">Home</a>
          <a href="">About Us</a>
          <a href="">Services</a>
          <a href="">Blogs</a>
        </div>
      </div>
    </nav>
  </header>

<div class="main-container align-center">
  <div class="d-flex row-wrap justify-center">
    <div class="inner-container content-area-padding d-flex">
      <div class="content_area">
        <h1 class="content_title padding-bottom margin0">Find a gift for your wife or girlfriend</h1>
      <p class="font_20px">Struggling to find a gift or girlfriend? No problem!</p>
      <a href="#" class="btn">Find Gift Now</a>
      </div>
    </div>

    <div class="inner-container">
      <img src="assets/images/Background.png" class="h-100 w-100" />
    </div>
  </div>
  <div class="how_to_work d-flex flex_contain justify-center">
    <div class="inner-container">
      <img src="assets/images/Media.png" class="h-100 w-100" />    
    </div>

    <div class="inner-container d-flex">
      <div class="content_area">
        <h1 class="content_title padding-bottom-title">How we work</h1>
        <p class="font_20px">We’ve actually already asked hundreds of women what they want, and made a database with results. All you have to do is take our short survey that only takes seconds, and our proprietary algorithm will match you with a few perfect gift options.</p>
        <a href="#" class="btn2">Learn More </a>
      </div>
    </div> 
  </div> 
</div>



<div class="main-container gift-padding align-center">
  <div class="gift_for_all text_center">
    <h4 class="font-32 heading-margin ">Gifts For all Occasion</h4>
    <p class="desc margin-44 ">"Try our web app to find the best gifts for all occasions"</p>
  </div>
  <div class="main_cards">
    <div class="d-flex justify-center row-wrap">
      <div class="card d-flex flex-column">
        <div class="cardimg">
          <img src="assets/images/card4.png" class="w-100" />
        </div>
        <div class="d-flex card-info h-100 row-wrap flex-column justify-content-between">
          <h6 class="card_title font_20px">Birthday</h6>
          <a href="#" class="a_link">See More</a>
        </div>
      </div>
      <div class="card d-flex flex-column">
        <div class="cardimg">
          <img src="assets/images/card3.png" class="w-100" />
        </div>
        <div class="d-flex card-info h-100 row-wrap flex-column justify-content-between">
          <h6 class="card_title font_20px">Birthday</h6>
          <a href="#" class="a_link">See More</a>
        </div>
      </div>
      <div class="card d-flex flex-column">
        <div class="cardimg">
          <img src="assets/images/card2.png" class="w-100" />
        </div>
        <div class="d-flex card-info h-100 row-wrap flex-column justify-content-between">
          <h6 class="card_title font_20px">Birthday</h6>
          <a href="#" class="a_link">See More</a>
        </div>
      </div>
      <div class="card d-flex flex-column">
        <div class="cardimg">
          <img src="assets/images/card1.png" class="w-100" />
        </div>
        <div class="d-flex card-info h-100 row-wrap flex-column justify-content-between">
          <h6 class="card_title font_20px">Birthday</h6>
          <a href="#" class="a_link">See More</a>
        </div>
      </div>
    </div>
  </div>
</div>





<div class="main-container readytoget align-center">
  <div class="d-flex align-center row-wrap justify-center">
    <div class="signup_contact flex-50 text_center ">
      <div class="content_readytoget">
        <h4 class="ready_title font-32 font-weight400">Ready to get started?</h4>
        <p class="content_signup margin0 font-32">Sign up or contact us</p>
      </div>
    </div>
    <div class="signup_contact flex-50 Res-text-center ">
      <div class="signup_links d-flex row-wrap  Res-text-center">
        <a href="#" class="a_link d-flex align-center justify-center xs-mb-10">Find Gift Now</a>
        <a href="#" class="a_link d-flex align-center justify-center">How it work</a>
      </div>
    </div>
  </div>
</div>


<div class="main-container our-best-blogs">
    <div class="our-blog-title text_center">
      <h4 class="font-32 heading-margin family-light">Our Best Blogs Ever</h4>
      <p class="desc margin-44 mb-71px">"Try our blog to find the best tips and tricks to select your gift"</p>
    </div>
    <div class="banner-container bg-banner d-flex row-wrap sm-d-column mb-40px">
      <div class="couple-img sm-text-center sm-w-100 sm-mb sm-mb-40">
          <img src="assets/images/couple.png" class="w-100  h-100" />
        </div>
        <div class="the-best-content sm-w-100 sm-pl-0 sm-text-center sm-mb-40">
          <p class="font-14 pb-16">Mr. john Doe</p>
          <p class="font-48 family-light pb-44">The best way to wish your wife</p>
          <a href="#" class="a_link a_link--text-white">Read More</a>
        </div>
    </div>
    <div class="d-flex row-wrap justify-center gap-30">
      <div class="inner-database p-48">
        <div class="inner-database-content">
          <h4 class="font-24 mb-16">Database to find the gifts for your 
          girlfriend</h4>
          <p class="desc mb-30">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful conten</p>
          <a href="#" class="a_link a_link--text-white">Read More</a>
        </div> 
    </div>
    <div class="inner-artificial p-48">
       <div class="inner-artificial-content max-width-472 ">
          <h4 class="font-24 mb-16">How Artificial intelligence read your mind to fond the bes gifts</h4>
          <p class="desc mb-30">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful conten</p>
          <a href="#" class="a_link a_link--text-white">Read More</a>
       </div> 
    </div>
  </div>
</div>


<footer class="footer-bg px-27">
  <div class="main-container footer-padding">
    <div class="footer-menu d-flex justify-content-between row-wrap sm-d-column sm-align-center">
       <div class="d-flex">
        <a href="#" class="a_link ">Home</a>
        <a href="#" class="a_link pl-54 ">About</a>
      </div>
      <div class="d-flex">
        <a href="#" class="" ><img src="assets/images/footer-logo.png" /></a>
      </div>
      <div class="d-flex">
        <a href="#" class="a_link">Service</a>
        <a href="#" class="a_link pl-54">Blog</a>
      </div>
    </div>
  </div>
  <div class="line d-flex row-wrap" >
    <hr class="hr " />
  </div>
  <div class="d-flex justify-content-between footer_social-icons row-wrap">
    <a href="#"><img src="assets/images/fb.png" /></a>
    <a href="#"><img src="assets/images/twitter.png" /></a>
    <a href="#"><img src="assets/images/insta.png" /></a>
    <a href="#"><img src="assets/images/youtube.png" /></a>
    <a href="#"><img src="assets/images/pin.png" /></a>
  </div>
  <div class="text_center copy-right">
    <span class="font-14">&copy; 2010-2020</span>
    <span class="font-14 pl-14"> Privacy - Terms</span>
  </div>
</footer>




		</div> );
	}
}

export default Home;