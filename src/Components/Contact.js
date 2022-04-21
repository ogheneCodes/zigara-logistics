import React, { Component } from 'react'
import './CSS/Contact.css'
import contact from '../images/contact us.png';
import phone from '../images/phone.png';
export class Contact extends Component {
  render() {
    return (
    <div className="contact_main_body">
        <div className='contact_bg_img'> 
        <div id='contact_bg_img_text'>
          <h2>Customer Support</h2>
        </div>
        </div>
     
        <div className='contact_div'>
            <div className='contact_phone'>
                <img src={phone} alt="phone" id="phone"/>
            </div>
            <div className='contact_form'>  
            <h2>Write to us</h2>
                <form action="">
                    <input type="text" />
                    <input type="text" />
                    <br /><br /><br />
                    <textarea name="" id="" cols="50" rows="10"></textarea><br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
          </div>
    </div>
    )
  }
}

export default Contact


// 