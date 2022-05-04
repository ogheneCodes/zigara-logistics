import React, { Component } from "react";
import "./CSS/Payment1.css";
import Paystack from "../images/paystack.logo.png";
import Flutterwave from "../images/flutterwave.logo.png";
export class Payment1 extends Component {
  render() {
    return (
      <>
        <div className="payment-box">
          <h2>How do you want to pay?</h2>
          <p>Choose an option to make payment</p>
          <form>
            <div className="paystack">
              <img src={Paystack} id="paystackImg" alt="paystack_img" />
              <span id="paystack-radio">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
              </span>
            </div>

              <input type="submit" value="Pay" className="submit"/>
            
          </form>
        </div>
      </>
    );
  }
}

export default Payment1;
