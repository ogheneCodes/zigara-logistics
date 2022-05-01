import React, { Component } from 'react'
import './CSS/SignUp.css'
import { Link } from 'react-router-dom';
export class signUp extends Component {
  render() {
    return (
      <>
      <div class="signup-form">
    <form action="/examples/actions/confirmation.php" method="post">
		<h2>Register</h2>
		<p class="hint-text">Create your account. It's free and only takes a minute.</p>
        <div class="form-group">
			<div class="row">
				<div class="col"><input type="text" class="form-control" name="first_name" placeholder="First Name" required="required" /></div>
				<div class="col"><input type="text" class="form-control" name="last_name" placeholder="Last Name" required="required" /></div>
			</div>        	
        </div>
        <div class="form-group">
        	<input type="email" class="form-control" name="email" placeholder="Email" required="required" />
        </div>
		<div class="form-group">
            <input type="password" class="form-control" name="password" placeholder="Password" required="required" />
        </div>
		<div class="form-group">
            <input type="password" class="form-control" name="confirm_password" placeholder="Confirm Password" required="required"/>
        </div>        
        <div class="form-group">
			<label class="form-check-label"><input type="checkbox" required="required" /> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
		</div>
		<div class="form-group">
            <button type="submit" class="btn btn-success btn-lg btn-block">Register Now</button>
        </div>
    </form>
	<div class="text-center">Already have an account? <Link to="/Login" class="text-center2">Sign in</Link></div>
</div>
      
      </>
    )
  }
}

export default signUp