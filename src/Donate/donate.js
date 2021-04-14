import React, { Component } from 'react';
import './donate.css';
import Paypal from '../Images/paypal.jpg';

export default class Donate extends Component {
  render() {
    return (
      <section className='donations'>
        <h1>
          Want to support Steve and his recommendations?
        </h1>
        <p className='donationp'>
          If you've found this website useful, please consider donating to help keep the lights on and the web domains running. I try to provide the best ride-share experience I possibly can in terms of comfort, street-smarts and friendliness. But the long miles add up and unfortunately gas does too. Lastly, I want to thank you for riding with me and checking out the website and I hope you enjoy the rest of your time in Daytona Beach.<br /><br />Any tips can be sent through the Uber app or by clicking the 'Send' link down below to open PayPal.
        </p>
        <section className='paypallink'>
          <img src={Paypal} alt='paypal' className='paypalimg'></img>
          <h2>Steven Gooch</h2>
          <p className='paypalp'>@sgooch569</p>
          <p className='sendpaypal'><a href='https://www.paypal.com/paypalme/sgooch569?locale.x=en_US' target='_blank' rel='noreferrer'>Send</a></p>
        </section>
      </section>
    )
  }
}