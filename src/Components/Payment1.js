import React, { Component } from 'react'
import './CSS/Payment1.css'
import Paystack from '../images/paystack.logo.png'
import Flutterwave from '../images/flutterwave.logo.png'
export class Payment1 extends Component {
  render() {
    return (
 <>
      <div id="payment-box1">
      <h2>How do you want to pay?</h2>
      <p>Choose an option to make payment</p>
      <form action="">
        <div id="paystack">
          <img src={Paystack} id="img1" alt=""/ >
          <span id="paystack-radio">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
          </span>
        </div>
        <div id="flutterwave">
          <img src={Flutterwave} id="img2" alt=""/>
          <span id="flutterwave-radio">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
          </span>
        </div>
        <center><input type="submit" value="Pay" /></center>
      </form>
    </div>
      
      
      
      
      
      
      
 </>
    )
  }
}

export default Payment1