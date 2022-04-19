import React, { Component } from 'react'
// import backgroundImage from "../images/img1-quick.png";
import rectangle1 from '../images/Rectangle.png'
import rectangle2 from '../images/Rectangle2.png'
import who_we_are from '../images/who-we-are.svg'
import how_we_work_1 from '../images/how-we-work1.svg'
import how_we_work_2 from '../images/how-we-work2.svg'
import how_we_work_3 from '../images/how-we-work3.svg'
import safe from '../images/safe.svg'
import fast from '../images/fast.svg'
import reliable from '../images/safe.svg'
import we_provide from '../images/we-provide.svg'
import Group from '../images/Group.svg'
import './CSS/HomePage.css'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn} from "react-icons/fa";

export default class HomePage extends Component {
  render() {
    return (
      <div>

      <section id="quick-and-reliable">
      <div id="quick-and-reliable-div1">
          <h1>Quick & Reliable</h1>
          <span>Delivery</span>
          <p>
          Our job is to get you everything you need in <br />
          the shortest amount of time possible.
          </p>
          <button>Schedule Delivery</button>
      </div>
      <div id="quick-and-reliable-div2">
        <img src={rectangle1} id="rectangle1"  alt="rectangle1_img"/>
        <br />
        <img src={rectangle2} id="rectangle2" alt="rectangle2_img"/>
      </div>
      <br /> <br />
      </section>


      <section id="who-we-are">  
        <div id="who-we-are-div1-one">
        <img src={who_we_are} alt=""/>
        </div>
        <div id="who-we-are-div1-two">
        <h2>Who We Are</h2>
        <p>Zigara is a logistics company that makes goods delivery simple and stress-free. We provide services that are quick, safe, and dependable. We render safe, fast and reliable delivery of goods and services.</p>
        </div> 
        <br /><br /> 
      </section>
      
      <section className="how-we-work">
      
      <h1>How We Work</h1>
      <div class="how-we-work-div">
        <div id="how-we-work-div-one">
            <img src={how_we_work_1} alt=""/ >
        </div>
        <div id="how-we-work-div-one">
          <h2>Schedule Delivery</h2>
          <p>We recognize the importance of technology in delivering a superior customer experience. As a result, our procedures, products, and services are designed to take use of contemporary technology to help us transport your items or goods more affordably, safely, and quickly.</p>
        </div>
      </div>

      <div className="how-we-work-div">
      <div className='how-we-work-shedule-div-one'>
        <img src={how_we_work_2} alt=""/>
      </div>
      <div className='how-we-work-shedule-div-one'>
        <h2>Make  Payment  and Chat With Us</h2>
        <p>You can contact our customer service agent via phone <br /> or email if you have any questions or concerns.</p>
      </div>
    </div>

    <div className="how-we-work-div">
        <div id="how-we-work-deliver-div-one">
          <img src={how_we_work_3} alt=""/>
        </div>
        <div id="how-we-work-deliver-div-one">
          <h2>Delivered to Your Door Step</h2>
          <p>Our drivers can assist you in delivering your commodities or goods to potential clients at a very low cost.</p>
        </div>
      </div>
      </section>


      <section id="why-choose-us">
      <br />
      <div id="why-choose-use-text">
       <h1>Why Choose Us</h1>
       <p>Our customers satisfaction is our priority and we strive 
         to give our customers the best services, we are Zigara.
       </p>
      </div>
      <div id="why-choose-us-div">
        

      <div id="safe">
          <img src={safe} alt=""/>
          <h2>Safe</h2>
          <p>We guarantee the safety of your goods as every item for delivery is carefully conveyed to the right destination.</p>
        </div>
        <div id="fast">
          <img src={fast} alt=""/>
          <h2>Fast</h2>
          <p>With the best transport system and experienced drivers we ensure that your goods are delivered quickly to the right location.</p>
        </div>
        <div id="reliable">
          <img src={reliable} alt=""/>
          <h2>Reliable</h2>
          <p>When you call we answer, we are readily available to deliver your goods in no time. </p>
        </div>
      </div>
      </section>
      
      <section id="we-provide">
      <div id="we-provide-div">
        <div id="we-provide-div-one">
          <img id="img1" src={rectangle1} alt=""/>
          <img id="img2" src={we_provide} alt=""/>
        </div>
        <div id="we-provide-div-two">
          <h4>We provide the best logistics services to our customers</h4>
        </div>
      </div>
      <div id="we-provide-div-space"></div>
    </section>


    <section id="footer">
      <div id="footer-div-one">
        <img src={Group} alt=''/>
        <div id="links-div">
          <h2>Links </h2>
          <p>Our Services</p>
          <p>About Us</p>
          <p>FAQs</p>
          <p>Terms and Conditions</p>
        </div>
        <div id="contact-div">
          <h2>Contact</h2>
          <p>070400003782</p>
          <p>Zigaralogistics@gmail.com</p>
        </div>
        <div id="business-hour-div">
          <h2>Business Hours</h2>
          <p> Monday - Saturday <span>7am-7pm</span></p>
          <p>Sundays  <span>8am- 7pm</span></p>          
        </div>
      </div>
        <div id="footer-div-two">
          <div id="social-media-div">
            <h2>Socials</h2>
            <a href='www.facebook.com'><FaFacebook /></a>
            <a href='www.twitter.com'><FaTwitter /></a>
            <a href='www.instagram.com'><FaInstagram /></a>
            <a href='www.linkedin.com'><FaLinkedinIn /></a>            
          </div>
          
          <div id="copyright-div">
            <p>2022. All Rights Reserved. Zigara logistics.</p>
          </div>
        </div>
        <br /><br /><br />
        <div id="footer-div-space"></div>
    </section>




      </div>
    )
  }
}



