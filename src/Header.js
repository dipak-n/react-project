import React from 'react';
import { NavLink } from "react-router-dom";

import './style.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginForm: false
    }
  }

  loginForm = () => {
    this.setState({
      showLoginForm: true
    })
  }

  loginClose = () => {
    this.setState({
      showLoginForm: false
    })
  }

  render() {
    // eslint-disable-next-line
    return (
      <div className="header">
        <div className="container">
          <div className="logo">
            <NavLink to="/">Logo</NavLink>
          </div>
          <div className="navbar">
            <ul>
              <li>
                <NavLink to="/" exact activeStyle={{ color: '#2a6496' }}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" exact activeStyle={{ color: '#2a6496' }}>About</NavLink>
              </li>
              <li>
                <NavLink to="/contact" exact activeStyle={{ color: '#2a6496' }}>Contact</NavLink>
              </li>
              <li>
                <NavLink to="/listview" exact activeStyle={{ color: '#2a6496' }}>List View</NavLink>
              </li>
              <li>
              <NavLink to="/login" exact activeStyle={{ color: '#2a6496' }}>Login</NavLink>
                {/* <a className="cursor" onClick={this.loginForm}></a> */}
              </li>
              <li>
                <NavLink to="/auth" exact activeStyle={{ color: '#2a6496' }}>Auth</NavLink>
              </li>
            </ul>
          </div>
          {/* <div className="clear"></div>
          {showLoginForm ? <Login onClose={this.loginClose} /> : null} */}
        </div>
      </div>
    );
  }
}

export default Header;
