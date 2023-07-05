import './App.css';

import React, { Component } from 'react'
import Navbar from './navbar/Navbar';
import News from './News';

export default class App extends Component {
  render() {
    return (
      <>
      <Navbar />
      < News/>
      </>
      
    )
  }
}

