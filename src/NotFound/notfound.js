import React, { Component } from 'react';
import './notfound.css';
import Thinking from '../Images/thinking.webp';

export default class NotFound extends Component {
  render() {
    return (
      <section className='notfound'>
        <h1>
          404: Not Found
        </h1>
        <p>
          There's a lot you can find in Daytona beach, but this page isn't one of those things :/
        </p><br /><br />
        <img src={Thinking} alt='thinking' id='thinking'></img>
      </section>

    )
  }
}