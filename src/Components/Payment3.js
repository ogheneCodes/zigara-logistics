import React, { Component } from 'react'
import { VscPass} from "react-icons/vsc";
import './CSS/Payment3.css'

export class Payment3 extends Component {
  render() {
    return (
<div>
        
        <div className='payment-three-div'>
            <VscPass id="svg"/>
            <br/>
            <p>Payment completed and Delivery request completed </p>
            <br/><br/>
            <center><input type="submit" value="Track Order"/></center>
        </div>

    
     
</div>
    )
  }
}

export default Payment3