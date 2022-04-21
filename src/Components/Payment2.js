import React, { Component } from "react";
import "./CSS/Payment2.css";
export class Payment2 extends Component {
  render() {
    return (
      <>
        <div id="payment-box2">
          <div>
            <br />
            <br />
            <br />
            <p id="p1">Enter your card details</p>
            <p id="p2">Card number</p>
            <form action="">
              <input type="text" id="card-number" />
              <div className="row">
                <div className="col-lg">
                  <p>CVV</p>
                  <input type="text" id="cvv" />
                </div>
                <div className="col-lg">
                  <p>Expiry Date</p>
                  <input type="text" id="entry-date" />
                </div>
              </div>
              <center>
                <input type="submit" value="Pay" />
              </center>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Payment2;
