// Authentication.js
import React from 'react';
import auth from './firebase'

class Authentication extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleLogin = async () => {
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.props.history.push('/dashboard'); // Redirect to the dashboard after login
    } catch (error) {
      console.error(error.message);
    }
  };

  handleSignUp = async () => {
    const { email, password } = this.state;
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      this.props.history.push('/dashboard'); // Redirect to the dashboard after sign-up
    } catch (error) {
      console.error(error.message);
    }
  };

  render() {
    return (
      <div>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={this.state.email}
          onChange={(e) => this.setState({ email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={(e) => this.setState({ password: e.target.value })}
        />
        <button onClick={this.handleLogin}>Login</button>
        <h2>Sign Up</h2>
        <button onClick={this.handleSignUp}>Sign Up</button>
      </div>
    )
  }
}

export default Authentication; 
