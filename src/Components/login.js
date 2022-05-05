import React, { useState } from "react";
import "./CSS/login.css";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const data = {
    email: email,
    password: password,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://zigara-app.herokuapp.com/login", data)
      .then((res) => {
        console.log("user is login" + res.data);
        navigate("/Schedule1");
      })
     .catch((err) => alert("email or password not correct"))
      .catch((err) => console.log(err + "can not login"))
      handleSubmit.value = "";
  };
  console.log(data)

  return (
    <section className="section">
      <h2>Log in </h2>

      <form onSubmit={handleSubmit}>
        <div className="inputText">
          <label htmlFor="email">Email*</label> <br />
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
          <label htmlFor="password">Password*</label> <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
            value={password}
          />
        </div>
        <input type="submit" value="Log in" />
      </form>
      <p className="p1">Or with</p>
      <div className="social_medias"></div>
      <p className="p2">
        Don’t have an account? <span>Sign up</span>
      </p>
    </section>
  );
}

export default login;
