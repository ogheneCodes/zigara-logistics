import React, { useState } from "react";
import "./CSS/SignUp.css";
import { Link } from "react-router-dom";
import axios from "axios";
const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [phone, setPhone] = useState("");

  const data = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    phone: phone,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === password2) {
      console.log(data);

      axios
        .post("https://zigara-app.herokuapp.com/register", data)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    } else {
      alert("Password does not match");
    }
  };
  // console.log(data);
  return (
    <>
      <div className="signup-form">
        <form onSubmit={handleSubmit}>
          <h2>Register</h2>
          <p className="hint-text">
            Create your account. It's free and only takes a minute.
          </p>
          <div className="form-group">
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setFirstName(e.target.value)}
                  name="first_name"
                  placeholder="First Name"
                  required="required"
                  value={firstName}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  name="last_name"
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                  required="required"
                  value={lastName}
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              name="email"
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
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required="required"
              value={password}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              name="confirm_password"
              placeholder="Confirm Password"
              onChange={(e) => setPassword2(e.target.value)}
              required="required"
              value={password2}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="number"
              placeholder="phone"
              onChange={(e) => setPhone(e.target.value)}
              required="required"
              value={phone}
            />
          </div>
          <div className="form-group">
            <label className="form-check-label">
              <input type="checkbox" required="required" /> I accept the{" "}
              <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a>
            </label>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-lg btn-block">
              Register Now
            </button>
          </div>
        </form>
        <div className="text-center">
          Already have an account?{" "}
          <Link to="/Login" className="text-center2">
            Sign in
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignUp;
