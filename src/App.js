import React from 'react';
import './style.css';

import ListData from './ListData/ListData';

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Home</h1>
        <hr />
        <div>
          <div className="col-12">
            <ListData />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;