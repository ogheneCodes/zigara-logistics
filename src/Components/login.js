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
      .catch((err) => console.log(err + "can not login"));
  };
  // console.log(data)

  return (
    <section className="about_us_section">
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <h2 className="text-center">Log in</h2>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required="required"
              value={email}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required="required"
              value={password}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-danger btn-block">
              Log in
            </button>
          </div>
          <div className="clearfix">
            <label className="float-left form-check-label">
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="float-right">
              Forgot Password?
            </a>
          </div>
        </form>
        <p className="text-center">
          <Link to="/signUp">Create an Account</Link>
        </p>
      </div>
    </section>
  );
}

export default login;
