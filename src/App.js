import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Routes from "./Routes";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
          <h5 className="my-0 mr-md-auto font-weight-normal">Prometheus</h5>
          <nav className="my-2 my-md-0 mr-md-3">
            <Link to="/graph" className="p-2 text-dark">Graph</Link>
            <Link to="/alerts" className="p-2 text-dark">Alerts</Link>
            <Link to="/status" className="p-2 text-dark">Status</Link>
            <a className="p-2 text-dark" href="https://prometheus.io/docs/introduction/overview/" target="docs">Help</a>
          </nav>
        </div>
        <div className="container-fluid">
          <Routes />
        </div>
      </div>
    );
  }
}

export default App;
