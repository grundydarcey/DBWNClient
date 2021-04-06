import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Restaurants from '../Restaurant/restaurant';
import allNightLife from '../AllNightlife/allnightlife';
import Header from '../Header/header';
import './App.css';
import config from '../config';
import ApiContext from '../ApiContext';
import Donate from '../Donate/donate';
import Landing from '../Landing Page/landing';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurants: [],
      nightlife: [],
    }
  }

  static contextType = ApiContext;
    
  componentDidMount = () => {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/restaurants`),
      fetch(`${config.API_ENDPOINT}/nightlife`), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    ])
    // .then(data => data.json())
    // .then(res => this.setState({ restaurants: res }))
    // .catch(error => console.error({ error }))
    .then(([restRes, clubRes]) => {
      if (!restRes.ok && !clubRes.ok) return (restRes.json().then(() => Promise.reject()), clubRes.json().then(() => Promise.reject()));
      return Promise.all([restRes.json(), clubRes.json()])
    })
    .then(([restaurants, nightlife]) => {
      this.setState({ restaurants, nightlife })
    })
    .catch((error) => {
      console.error({ error })
    })
  }

  handleRestaurant = restaurantInfo => {
    this.setState({ restaurants: restaurantInfo })
  }
    
  render() {
    console.log(this.context)
    const value = {
      restaurants: this.state.restaurants,
      nightlife: this.state.nightlife,
      handleRestaurant: this.handleRestaurant,
    }
    return (
      <ApiContext.Provider value={value}>
        <main className='App'>
          <Header />
          <p>Welcome to Daytona Beach</p>
          <Route exact path='/' component={Landing} />
          <Route exact path='/restaurants' component={Restaurants} />
          <Route exact path='/nightlife' component={allNightLife} />
          <Route exact path='/donate' component={Donate} />
        </main>
      </ApiContext.Provider>
    );
  }
}