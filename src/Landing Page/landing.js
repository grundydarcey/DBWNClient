import React, { Component } from 'react';
import './landing.css';
import Prius from '../Images/prius.png';
import Steve from '../Images/steve.png';
import Star from '../Images/star.png';
import Conversation from '../Images/GreatConversation.svg';
import Service from '../Images/ExcellentService.svg';
import Navigation from '../Images/ExpertNavigation.svg';
import Hero from '../Images/LateNightHero.svg';
import { Link } from 'react-router-dom';

export default class Landing extends Component {
  render() {
    return (
      <section className='applanding'>
        <section className='landing'>
          <h1>
            Hello traveler!<br />Welcome to Daytona Beach, What Now?
          </h1>
          <p className='toptext'>
            This is the question I hope to answer for you with this site.  On my vacations, I've found there are some things I can control and some things I cannot; I can choose my destination, I can choose where I stay, but more often than not, when I arrive I have no idea where to eat or what to do. One thing I know for sure, when I spend a small fortune to go on a vacation, the one thing that will make or break the vacation is the food. Looking back, every vacation I enjoyed can be traced back to the food.
          </p>
          <section className='uber'>
            <p className='ubertext'>
              I took the time to put together this list of restaurants that I have enjoyed here in Daytona Beach.  I have not only relied on my own tastes, but have received feedback from the nearly 10,000 rides I have given on both Uber and Lyft in our little town to provide a short list of choices for you to enjoy while you are visiting.
            </p>
            <img src={Prius} alt='prius' id='prius'></img>
          </section>
          <p>
            We rely on tourism here and appreciate every dollar you spend with us, I want to make sure that if this is your first visit that it will not be your last. While I was already compiling a list of restaurants, I decided to provide a small list of nightlife spots, breweries, activities, tours and finally adult-only venues that we have to offer. If this list has helped ensure you enjoyed Daytona Beach, please consider making a small donation <Link to='/donate'>here</Link> to help me maintain this site and update it as new options become available.<br /><br />
            But most of all, enjoy your time here.<br />
          </p>
          <section className='sincerelyflex'>
            <img src={Steve} alt='stevepicture' id='stevepicture'></img>
            <p className='sincerely'>Sincerely,<br />
              Steve (your driver)
            </p>
          </section>
        </section>
        <section className='uberrating'>
          <p className='uberratingtext'>
            See what my other fares have said about me by scrolling to the left and right:
          </p><br />
          <div className="scrolling-wrapper">
            <div className="card"><img src={Hero} alt='hero' id='uberreview'></img><h2>Late Night Hero</h2><img src={Star} alt='star' id='star'></img><img src={Star} alt='star' id='star'></img><img src={Star} alt='star' id='star'></img><img src={Star} alt='star' id='star'></img><img src={Star} alt='star' id='star'></img><p>"Man, I cannot thank you enough for that ride. Not many drivers would be so kind to do what you did."</p></div>
            <div className="card"><img src={Conversation} alt='conversation' id='uberreview'></img><h2>Great Conversation</h2><img src={Star} alt='star' id='star'></img><img src={Star} alt='star' id='star'></img><img src={Star} alt='star' id='star'></img><img src={Star} alt='star' id='star'></img><img src={Star} alt='star' id='star'></img><p>"Awesome conversation, even made a special pit stop for us! Highly recommend!"</p></div>
            <div className="card"><img src={Navigation} alt='navigation' id='uberreview'></img><h2>Expert Navigation</h2><img src={Star} alt='star' id='star'></img><img src={Star} alt='star' id='star'></img><img src={Star} alt='star' id='star'></img><img src={Star} alt='star' id='star'></img><img src={Star} alt='star' id='star'></img><p>"Good guy fun to chat with"</p></div>
            <div className="card"><img src={Conversation} alt='conversation' id='uberreview'></img><h2>Great Conversation</h2><img src={Star} alt='star' id='star'></img><img src={Star} alt='star' id='star'></img><img src={Star} alt='star' id='star'></img><img src={Star} alt='star' id='star'></img><img src={Star} alt='star' id='star'></img><p>"Thank you so much!"</p></div>
            <div className="card"><img src={Service} alt='service' id='uberreview'></img><h2>Excellent Service</h2><img src={Star} alt='star' id='star'></img><img src={Star} alt='star' id='star'></img><img src={Star} alt='star' id='star'></img><img src={Star} alt='star' id='star'></img><img src={Star} alt='star' id='star'></img><p>"Left our cellphone in his car and he promptly returned to us... awesome"</p></div>
            <div className="card"><h2>All Star Driver</h2><img src={Star} alt='star' id='star'></img><img src={Star} alt='star' id='star'></img><img src={Star} alt='star' id='star'></img><img src={Star} alt='star' id='star'></img><img src={Star} alt='star' id='star'></img><p>Thank you today has been a long day and you being genuine was amazing !"</p></div>
          </div><br /><br />
        </section>
      </section>
    )
  }
}