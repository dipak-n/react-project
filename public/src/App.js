import React, { Component } from 'react';
import './style.css';

import ListData from './ListData/ListData';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1>Home</h1>
        <hr />
        <div>
          <div className="col-6">
            <ListData />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;