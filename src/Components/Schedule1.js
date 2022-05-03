import React, { Component } from "react";
import "./CSS/Schedule1.css";
import { Link } from "react-router-dom";

export class Schedule1 extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div id="form">
            <form action="">
              <br />
              <br />
              <br />
              <h2>Pick up details</h2>
              <input type="text" placeholder="Full Name" required />
              <br />
              <input type="text" placeholder="Location" required />
              <br />
              <input type="Email" placeholder="Email" required />
              <br />
              <br />
              <h2>Drop off point</h2>
              <br />
              <input type="text" placeholder="Full Name" required />
              <br />
              <input type="text" placeholder="Location" required />
              <br />
              <input type="Email" placeholder="Email" required />
              <br />
              <input
                type="tel"
                placeholder="123-45-678"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              />
              <br />
              <br />
              <br />
              <Link to="/Schedule2">
                <center>
                  <input type="submit" value="Next" />
                </center>
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Schedule1;
