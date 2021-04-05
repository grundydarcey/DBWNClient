import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Restaurants from './Restaurant/restaurant';
import allNightLife from './AllNightlife/allnightlife';
import Header from './Header/header';
import './App.css';
import config from './config';
import ApiContext from './ApiContext';

export default class App extends Component {
  constructors(props) {
    super(props);
    this.state = {
      restaurants: []
    }
  }

  static contextType = ApiContext;
    
  componentDidMount = () => {
    fetch(`${config.API_ENDPOINT}/restaurants`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(data => {
      return data.json()
    })
    .then(res => {
      this.setState({ restaurants: res })
    })
    .catch((error) => {
      console.error({ error })
    })
  }
    
  render() {
    return (
      <main className='App'>
        <Header />
        <p>Welcome to Daytona Beach</p>
        <Route exact path='/restaurants' component={Restaurants} />
        <Route exact path='/nightlife' component={allNightLife} />
      </main>
    );
  }
}