import React from 'react';

const ApiContext = React.createContext({
  restaurants: [],
  nightlife: [],
  seabreeze: [],
  mainst: [],
  ormond: [],
  adult: [],
})

export default ApiContext;   