import React, { Component } from 'react'
import './CSS/AboutUs.css'
export class AboutUs extends Component {
  render() {
    return (
      <section className='about_us_section'>
        <h1>Delivering the Best Logistics <br />Solution</h1>
        <p>Safe, fast and reliable delivery of goods and services</p>
        <div className='about_us_section-div'>
                <h2>About Us</h2>
                <p>Zigara is a logistics company that  helps individuals and businesses deliver and pick up parcels/ items in any part of Enugu state, Nigeria.</p>
        </div>
        <div className="about_us_section-div">
                <h2>Our Mission</h2>
                <p>To become a high valued logistics company that leverages on modern innovative trends to attain high customer satisfaction. </p>
        </div>
        <div className="about_us_section-div">
                <h2>Our Vision</h2>
                <p>Our vision is to keep Creating access to fast and reliable logistics services to people and business.</p>
        </div> <br />
      </section>
    )
  }
}

export default AboutUs