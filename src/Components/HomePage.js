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
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn} from "react-icons/fa";

export default class HomePage extends Component {
  render() {
    return (
<>
<div>
      {/*quick-and-reliable-section*/}
      <section className="quick-and-reliable-section">
      <div className="quick-and-reliable-section-div-one">
      <br /> <br /> <br /> <br />
          <span id='QR'>Quick & Reliable</span> <br />
          <span id='D'>Delivery</span> <br />
          <span id='para-one'>Our job is to get you everything you need</span> <br/>
          <span id='para-two'>in the shortest amount of time possible.</span> <br /> <br />
          <button className='quick-and-reliable-section-div-button'>Schedule Delivery</button>
      </div>
      
      <div className="quick-and-reliable-section-div-two">
        <img src={rectangle1} id="rectangle1"  alt="rectangle1_img"/>
        <br />
        <img src={rectangle2} id="rectangle2" alt="rectangle2_img"/>
      </div>
      <br /> <br />
      </section>

     {/*Who we are Section*/}
      <section className="who-we-are">  
      <div className="who-we-are-div-one">
        <img src={who_we_are} alt=""/>
      </div>
      <div className="who-we-are-div-two">
        <h2>Who We Are</h2>
      <span className="who-we-are-div-para">Zigara is a logistics company that makes goods delivery simple and stress-free. We provide services that are quick, safe, and dependable. We render safe, fast and reliable delivery of goods and services.</span>
      </div> 
      <br /><br /> 
      </section>

     {/*How We Work*/}
      <section className="how-we-work">

      <h1>How We Work</h1>

      <div className="how-we-work-div-one">
          <div className="how-we-work-div-one-img">
              <img src={how_we_work_1} alt=""/ >
          </div>
          <div className="how-we-work-div-one-text">
            <h2>Schedule Delivery</h2>
            <span className="how-we-work-div-one-text-para">We recognize the importance of technology in delivering a superior customer experience. As a result, our procedures, products, and services are designed to take use of contemporary technology to help us transport your items or goods more affordably, safely, and quickly.</span>
          </div>
      </div>

      <div className="how-we-work-div-two">
          <div className="how-we-work-div-two-text">
            <h2>Make  Payment  and Chat With Us</h2>
            <span className="how-we-work-div-two-text-para">You can contact our customer service agent via phone <br /> or email if you have any questions or concerns.</span>
          </div>
          <div className="how-we-work-div-two-img">
            <img src={how_we_work_2} alt=""/>
          </div>
      </div>

      <div className="how-we-work-div-three">
          <div className="how-we-work-div-three-img">
            <img src={how_we_work_3} alt=""/>
          </div>
          <div className="how-we-work-div-three-text">
            <h2>Delivered to Your Door Step</h2>
            <span className="how-we-work-div-three-text-para">Our drivers can assist you in delivering your commodities or goods to potential clients at a very low cost.</span>
          </div>
      </div>
      </section>

      {/*Why Choose Us */}
      <section className="why-choose-us">
        <div className="why-choose-us-text">
          <h1>Why Choose Us</h1>
          <p>Our customers satisfaction is our priority and we strive 
          to give our customers the best services, we are Zigara.
          </p>
        </div>


        <div className="why-choose-us-div">
          <div className="safe">
            <img src={safe} alt=""/>
            <h2>Safe</h2>
            <span>We guarantee the safety of your goods as every item for delivery is carefully conveyed to the right destination.</span>
          </div>
          <br />
          <div className="fast">
            <img src={fast} alt=""/>
            <h2>Fast</h2>
            <span>With the best transport system and experienced drivers we ensure that your goods are delivered quickly to the right location.</span>
          </div>
          <br />
          <div className="reliable">
            <img src={reliable} alt=""/>
            <h2>Reliable</h2>
            <span>When you call we answer, we are readily available to deliver your goods in no time. </span>
          </div> <br />
        </div>
      </section>

      {/* We Provide Section*/}
      <section className="we-provide">
      <div className="we-provide-div">
      <div className="we-provide-div-one">
        <img className="we-provide-div-one-img1" src={rectangle1} alt=""/>
        <img className="we-provide-div-one-img2" src={we_provide} alt=""/>
      </div>
      <div className="we-provide-div-two">
        <h2>We provide the best logistics services to our customers</h2>
      </div>
      </div>
      <div className="we-provide-div-space"></div>
      </section>

      {/*footer Section*/}
      <section className="footer">
      <div className="footer-div-one">
      <img src={Group} alt=''/>
      <div className="div-links">
        <h2>Links </h2>
        <Link to="" ><span className='link1'>Our Services</span></Link> <br />
        <Link to="/AboutUs" ><span className='link2'>About Us</span></Link> <br />
        <Link to="/FAQ" ><span className='link3'>FAQs</span></Link> <br />
        <Link to="/T_C" ><span className='link4'>Terms and Conditions</span></Link>       
      </div>


      <div className="div-contact">
        <h2>Contact</h2>
        <span>070400003782</span> <br />
        <span>Zigaralogistics@gmail.com</span>
      </div>
      <div className="div-business-hour">
        <h2>Business Hours</h2>
        <span> Monday - Saturday <span>7am-7pm</span></span> <br />
        <span>Sundays  <span>8am- 7pm</span></span>          
      </div>
      </div>


      <div className="footer-div-two">
        <div className="social-media-div">
          <h2>Socials</h2>
          <span><Link to='www.facebook.com'><FaFacebook /></Link></span>
          <span><Link to='www.twitter.com'><FaTwitter /></Link></span>
        <span> <Link to='www.instagram.com'><FaInstagram /></Link></span>
          <span><Link to='www.linkedin.com'><FaLinkedinIn /></Link> </span>           
        </div>

        <div className="copyright-div">
          <p>2022. All Rights Reserved. Zigara logistics.</p>
        </div>
      </div>
      </section>

</div>
</>
    )
  }
}



