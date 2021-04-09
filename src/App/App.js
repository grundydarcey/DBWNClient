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
import Ormond from '../Ormond/ormond';
import MainNightlife from '../MainNightlife/mainnightlife';
import Seabreeze from '../SeabreezeNightlife/seabreeze';
import Adult from '../AdultNightlife/adult';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurants: [],
      nightlife: [],
      seabreeze: [],
      mainst: [],
      ormond: [],
      adult: [],
    }
  }

  static contextType = ApiContext;
    
  componentDidMount = () => {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/restaurants`),
      fetch(`${config.API_ENDPOINT}/nightlife`), 
      fetch(`${config.API_ENDPOINT}/nightlife/Seabreeze`),
      fetch(`${config.API_ENDPOINT}/nightlife/Main`),
      fetch(`${config.API_ENDPOINT}/nightlife/Ormond`), 
      fetch(`${config.API_ENDPOINT}/adult`), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    ])
    .then(([restRes, clubRes, seaRes, mainRes, ormondRes, adultRes]) => {
      if (!restRes.ok && !clubRes.ok && !seaRes.ok && !mainRes.ok && !ormondRes.ok && !adultRes.ok) return (restRes.json().then(() => Promise.reject()), clubRes.json().then(() => Promise.reject()), seaRes.json().then(() => Promise.reject()), mainRes.json().then(() => Promise.reject()), ormondRes.json().then(() => Promise.reject()), adultRes.json().then(() => Promise.reject()));
      return Promise.all([restRes.json(), clubRes.json(), seaRes.json(), mainRes.json(), ormondRes.json(), adultRes.json()])
    })
    .then(([restaurants, nightlife, seabreeze, mainst, ormond, adult]) => {
      this.setState({ restaurants, nightlife, seabreeze, mainst, ormond, adult })
    })
    .catch((error) => {
      console.error({ error })
    })
  }

 
  render() {
    //console.log(this.context)
    const value = {
      restaurants: this.state.restaurants,
      nightlife: this.state.nightlife,
      seabreeze: this.state.seabreeze,
      mainst: this.state.mainst,
      ormond: this.state.ormond,
      adult: this.state.adult,
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
          <Route exact path='/nightlife/ormond' component={Ormond} />
          <Route exact path='/nightlife/mainst' component={MainNightlife} />
          <Route exact path='/nightlife/seabreeze' component={Seabreeze} />
          <Route exact path='/nightlife/adult' component={Adult} />
        </main>
      </ApiContext.Provider>
    );
  }
}