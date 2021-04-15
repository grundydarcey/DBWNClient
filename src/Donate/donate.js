import React, { Component } from 'react';
import './donate.css';
import Paypal from '../Images/paypal.jpg';
import Venmo from '../Images/venmo.png';
import app from '../Images/app.png';

export default class Donate extends Component {
  render() {
    return (
      <section className='donations'>
        <h1>
          Want to support Steve and his recommendations?
        </h1>
        <p className='donationp'>
          If you've found this website useful, please consider donating to help keep the lights on and the web domains running. I try to provide the best ride-share experience I possibly can in terms of comfort, street-smarts and friendliness. But the long miles and gas add up. Lastly, I want to thank you for riding with me and checking out the website and I hope you enjoy the rest of your time in Daytona Beach.<br /><br />Any tips can be sent through the Uber app or by clicking on your favorite payment method down below.
        </p>
        <section className='paymentlink'>
          <img src={Paypal} alt='paypal' className='paypalimg'></img>
          <h2>
            Steven Gooch
          </h2>
          <p className='paypalp'>
            @sgooch569
          </p>
          <p className='sendpaypal'>
            <a href='https://www.paypal.com/paypalme/sgooch569?locale.x=en_US' target='_blank' rel='noreferrer'>
              Send
            </a>
          </p>
        </section>
        <section className='venmocashapp'>
          <a href='https://venmo.com/code?user_id=3236916656865280919' target='_blank' rel='noreferrer'>
            <img src={Venmo} alt='venmo' className='venmo'></img>
          </a><br />
          <a href='https://cash.app/$StevenGooch7' target='_blank' rel='noreferrer'>
            <img src={app} alt='cashapp' className='cashapp'></img>
          </a>
        </section>
      </section>
    )
  }
}