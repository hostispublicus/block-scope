import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';

import Header from './containers/header';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>

        <section className="container content">
          
        </section>

      </div>
    );
  }
}

export default App;
