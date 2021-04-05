import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Restaurants from './Restaurant/restaurant';
import allNightLife from './AllNightlife/allnightlife';
import Header from './Header/header';
import './App.css';
import config from './config';
import ApiContext from './ApiContext';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurants: [],
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
    // .then(data => {
    //   return data.json()
    // })
    // .then(res => {
    //   this.setState({ restaurants: res })
    // })
    .then(res => res.text())
    .then(text => console.log(text))
    // .catch((error) => {
    //   console.error({ error })
    // })
  }
    
  render() {
    const value = {
      restaurants: this.state.restaurants,
    }
    console.log(this.context.restaurants)
    return (
      <ApiContext.Provider value={value}>
      <main className='App'>
        <Header />
        <p>Welcome to Daytona Beach</p>
        <Route exact path='/restaurants' component={Restaurants} />
        <Route exact path='/nightlife' component={allNightLife} />
      </main>
      </ApiContext.Provider>
    );
  }
}