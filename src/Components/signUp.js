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
        handleSubmit.value = "";
    } else {
      alert("Password does not match");
    }
  };
  // console.log(data);
  return (
    <>
    <section>
    <h3>Sign Up</h3>
    <span className="indicate">
      <strong>.</strong>indicates required field.
    </span>
    <form  onSubmit={handleSubmit}>
      <div className="inputName">
        <div className="inputText">
          <label htmlFor="firstName">First Name*</label> <br />
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            required
            value={firstName}
          />
        </div>
        <div className="inputText">
          <label htmlFor="lastName">Last Name*</label> <br />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            required
            value={lastName}
          />
        </div>
      </div>
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
      <div className="inputText">
        <label htmlFor="password2">Confirm Password*</label> <br />
        <input
          type="password"
          name="password2"
          placeholder="Confirm Password"
          onChange={(e) => setPassword2(e.target.value)}
          required
          value={password2}
        />
      </div>
      <div className="inputText">
        <label htmlFor="phone">Phone Number*</label> <br />
        <input 
        type="number"
         name="phone" 
         placeholder="Phone Number" 
         onChange={(e) => setPhone(e.target.value)}
         required
        value={phone}
         />

      </div>
      <input type="submit" value="Sign Up" />
    </form>
    <p className="p1">Or with</p>
    <div className="social_medias"></div>
    <p className="p2">
      Already have an account? <span>Log in</span>
    </p>
  </section>
    </>
  );
};

export default SignUp;


// <section>
//         <h1>Sign Up</h1>
//         <span>
//           <strong>.</strong>indicates required field.
//         </span>
//         <form onSubmit={handleSubmit}>
//         <div className="inputName">
//           <div className="inputText">
//             <label htmlFor="firstName">First Name*</label> <br />
//             <input type="text" name="firstName" placeholder="First Name" required/>
//           </div>
//           <div className="inputText">
//             <label htmlFor="lastName">Last Name*</label> <br />
//             <input type="text" name="lastName" placeholder="Last Name" required/>
//           </div>
//         </div>
//         <div className="inputText">
//           <label htmlFor="email">Email*</label> <br />
//           <input type="email" name="email" placeholder="Email" required/>
//         </div>
//         <div className="inputText">
//           <label htmlFor="password">Password*</label> <br />
//           <input type="password" name="password" placeholder="Password" />
//         </div>
//         <div className="inputText">
//           <label htmlFor="password2">Confirm Password*</label> <br />
//           <input
//             type="password"
//             name="password2"
//             placeholder="Confirm Password"
//           />
//         </div>
//         <div className="inputText">
//           <label htmlFor="phone">Phone Number*</label> <br />
//           <input type="number" name="phone" placeholder="Phone Number" />
//         </div>
//         <input type="submit" value="Sign Up" />
//         </form>
//         <p className="p1">Or with</p>
//         <div className="social_medias"></div>
//         <p className="p2">Already have an account? <span>Log in</span></p>
//       </section>