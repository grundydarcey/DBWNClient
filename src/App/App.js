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
import DBMap from '../Map/map';
import Tours from '../Tours/tours';
import Daytona from '../Daytona/daytona';
import MainNightlife from '../MainNightlife/mainnightlife';
import Seabreeze from '../SeabreezeNightlife/seabreeze';

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
          <Route exact path='/' component={Landing} />
          <Route exact path='/restaurants' component={Restaurants} />
          <Route exact path='/nightlife' component={allNightLife} />
          <Route exacth path='/tours' component={Tours} />
          <Route exact path='/map' component={DBMap} />
          <Route exact path='/donate' component={Donate} />
          <Route exact path='/nightlife/onedaytona' component={Daytona} />
          <Route exact path='/nightlife/mainst' component={MainNightlife} />
          <Route exact path='/nightlife/seabreeze' component={Seabreeze} />
        </main>
      </ApiContext.Provider>
    );
  }
}