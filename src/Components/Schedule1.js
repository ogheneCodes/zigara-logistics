import axios from "axios";
import { useState } from "react";
import React from "react";
import "./CSS/Schedule1.css";
import { Link } from "react-router-dom";

const Schedule1 = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pickupCity, setPickupCity] = useState("");
  const [address, setAddress] = useState("");

  const [fullName2, setFullName2] = useState("");
  const [email2, setEmail2] = useState("");
  const [phone2, setPhone2] = useState("");
  const [dropoffCity, setDropoffCity] = useState("");
  const [address2, setAddress2] = useState("");

  const data = {
    fullName: fullName,
    email: email,
    phone: phone,
    pickupCity:pickupCity,
    address: address,

    // 
    fullName2 : fullName2,
    email2: email2,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://zigara-app.herokuapp.com/api/v1/service/schedule", data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    handleSubmit.value = "";
  };
  console.log(data);
  return (
    <>
      <section className="section">
        <h3>Pick up details</h3>
        <form onSubmit={handleSubmit}>

          <div className="inputText">
            <label htmlFor="fullName"></label> <br />
            <input
              type="text"
              name="fullName"
              placeholder="Full name *"
              onChange={(e) => setFullName(e.target.value)}
              required
              value={fullName}
            />
          </div>
          <div className="inputText">
            <label htmlFor="email"></label> <br />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
              value={email}
            />
          </div>
          <div className="inputText">
            <label htmlFor="phone"></label> <br />
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              onChange={(e) => setPhone(e.target.value)}
              required
              value={phone}
            />
          </div>

          <div className="inputText">
            <label htmlFor="PickupCity"></label> <br />
            <input
              type="text"
              name="PickupCity"
              placeholder="Pickup City*"
              onChange={(e) => setPickupCity(e.target.value)}
              required
              value={pickupCity}
            />
          </div>

          <div className="inputText">
            <label htmlFor="address"></label> <br />
            <input
              type="text"
              name="address"
              placeholder="Address *"
              onChange={(e) => setAddress(e.target.value)}
              required
              value={address}
            />
          </div>
          <h3>Drop off details</h3>


          <div className="inputText">
            <label htmlFor="fullName2"></label> <br />
            <input
              type="text"
              name="fullName2"
              placeholder="Full name *"
              onChange={(e) => setFullName2(e.target.value)}
              required
              value={fullName2}
            />
          </div>
          <div className="inputText">
            <label htmlFor="email2"></label> <br />
            <input
              type="email"
              name="email2"
              placeholder="Email"
              onChange={(e) => setEmail2(e.target.value)}
              required
              value={email2}
            />
          </div>
          <div className="inputText">
            <label htmlFor="phone2"></label> <br />
            <input
              type="number"
              name="phone2"
              placeholder="Phone Number"
              onChange={(e) => setPhone2(e.target.value)}
              required
              value={phone2}
            />
          </div>

          <div className="inputText">
            <label htmlFor="DropoffCity"></label> <br />
            <input
              type="text"
              name="PickupCity"
              placeholder="Pickup City*"
              onChange={(e) => setDropoffCity(e.target.value)}
              required
              value={dropoffCity}
            />
          </div>

          <div className="inputText">
            <label htmlFor="address2"></label> <br />
            <input
              type="text"
              name="address2"
              placeholder="Address *"
              onChange={(e) => setAddress2(e.target.value)}
              required
              value={address2}
            />
          </div>

        </form>
        <button><Link to="/Schedule2" id="Link">Next</Link></button>
        
      </section>
    </>
  );
};

export default Schedule1;
