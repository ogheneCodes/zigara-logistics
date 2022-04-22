import React, { Component } from "react";
import './CSS/FAQ.css'
export class FAQ extends Component {
  render() {
    return (
      <div>
      <br /><br /><br /><br /><br />
      <div id="accordion">
      <div class="card">
        <div class="card-header" id="headingOne">
          <h5 class="mb-0">
            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            How fast will I get my parcel?
            </button>
          </h5>
        </div>
    
        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
          <div class="card-body">
          As fast as we can, rest assured we will deliver on time.
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="headingTwo">
          <h5 class="mb-0">
            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
             Is there a minimum charge?
            </button>
          </h5>
        </div>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
          <div class="card-body">
          Yes. Our minimum delivery charge is 500 Naira. Any amount below that will automatically be set to 500 Naira. This allows us to guarantee quality services and also ensure our pilots are fairly compensated.
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="headingThree">
          <h5 class="mb-0">
            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Is my package safe with the dispatch riders?
            </button>
          </h5>
        </div>
        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
          <div class="card-body">
          Yes it is very safe
          </div>
        </div>
      </div>
      <div class="card">
      <div class="card-header" id="headingThree">
        <h5 class="mb-0">
          <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          I keep trying to register my phone but no success, what should i do?
          </button>
        </h5>
      </div>
      <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
        <div class="card-body">
        First step is to make sure you’re entering it correctly. The correct way to enter your number is +234 xxxxxxxxxx and not +234 0xxxxxxxxxx. The extra 0 isn’t required because the country code is already provided. If this persists, kindly contact the support team.
        </div>
      </div>
    </div>
    <div class="card">
    <div class="card-header" id="headingThree">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Can pilot ask for tips?
        </button>
      </h5>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
      <div class="card-body">
      No they are not allowed to ask for tips
      </div>
    </div>
  </div>
  <div class="card">
  <div class="card-header" id="headingThree">
    <h5 class="mb-0">
      <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      What are the payment options?
      </button>
    </h5>
  </div>
  <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
    <div class="card-body">
    It’s either you pay with cash  or use the card options
    </div>
  </div>
</div>
    </div>
      </div>
    );
  }
}

export default FAQ;
