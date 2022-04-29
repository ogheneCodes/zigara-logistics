import React, { Component } from "react";
import "./CSS/Contact.css";
import contactPicture from "../images/contact us.png";
import phone from "../images/phone.png";
import "./CSS/Contact.css";
// import contactPicture1 from '../src/image/Group10.svg';
// import call from '../src/image/Frame3.png';
// import './App.css';

export class Contact extends Component {
  render() {
    return (
      <div>
        <img className="image" src={contactPicture} alt="Avatar" />
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4 ">
              <img className="i" src={phone} alt="Avatar" />
            </div>
            <div className="col-sm-4 col-md-4 col-lg-8 ">
              <p style={{ fontWeight: "bold" }}>Write To Us</p>
              <form className="form">
                <div className="container">
                  <div className="row">
                    <div>
                      <div class="form-group" style={{ paddingRight: "20px" }}>
                        <input
                          type="name"
                          className="input-large"
                          placeholder="Full Name *"
                        />
                      </div>

                      <div class="form-group">
                        <input
                          type="email"
                          className="input-lg"
                          aria-describedby="emailHelp"
                          placeholder=" email *"
                        />
                      </div>
                    </div>
                    <div>
                      <div class="form-group" style={{ paddingRight: "10px" }}>
                        <input
                          type="text"
                          className="mySize"
                          placeholder=" message *"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <button type="submit" class="btn btn-danger">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
