import React, { Component } from 'react';
import './landing.css';
import Prius from '../Images/prius.png';

export default class Landing extends Component {
  render() {
    return (
      <section className='landing'>
        <h2>Hello Traveller!<br />Welcome to Daytona Beach, Now What?</h2>
        <p className='toptext'>This is the question I hope to answer for you with this site.  On my vacations, I've found there are some things I can control and some things I cannot; I can choose my destination, I can choose where I stay, but more often than not, when I arrive I have no idea where to eat or what to do.<br />
          One thing I know for sure, when I spend a small fortune to go on a vacation, the one thing that will make or break the vacation is the food. Looking back, every vacation I enjoyed can be traced back to the food.<br /><br />
        </p>
        <section className='uber'>
          <p className='ubertext'>I took the time to put together this list of restaurants that I have enjoyed here in Daytona Beach.  I have not only relied on my own tastes, but have received feedback from the nearly 10,000 rides I have given on both Uber and Lyft in our little town to provide a short list of choices for you to enjoy while you are visiting.</p><img src={Prius} alt='prius' id='prius'></img>
        </section>
        <p>We rely on tourism here and appreciate every dollar you spend with us, I want to make sure that if this is your first visit that it will not be your last.<br />
          While I was already compiling a list of restaurants, I decided to provide a small list of nightlife spots, breweries, activities, tours and finally adult-only venues that we have to offer.<br /><br />
          If this list has helped ensure you enjoyed Daytona Beach, please consider making a small donation using the link above to help me maintain this site and update it as new options become available.<br /><br />
          But most of all, enjoy your time here.<br />
          Sincerely,<br />
          Steve (your driver)
        </p>
      </section>
    )
  }
}