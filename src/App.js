import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import Header from './containers/Header';
import Chart from './components/Chart';

const App = () => (
  <Router>
    <div className="app">
      <Header/>
      
      <content className="app-content p-2">
        <Route exact path="/" component={HomeRoute} />
        <Route path="/blocks" component={BlocksRoute} />
      </content>
      
    </div>
  </Router>
);

const HomeRoute = () => (
  <div className="container">

    <div className="row">
      <div className="col-sm">
        <section className="jumbotron">
          <h3>Blocks List Stub</h3>
        </section>
      </div>
    </div>
    
    <div className="row">
      <div className="col-sm">
        <Chart/>
      </div>
    </div>
    
  </div>
);

const BlockRoute = ({ match }) => (
  <div>
    <h3>{match.params.blockId}</h3>
  </div>
);

const BlocksRoute = ({ match }) => (
  <div>
    <h2>Blocks</h2>

    <Link to={`${match.url}/block`}>Block Item</Link>

    <Route
      exact
      path={match.url}
      render={() => <h3>Blocks List Goes Here</h3>}
    />

    <Route path={`${match.url}/:blockId`} component={BlockRoute} />
    
  </div>
);


export default App;
