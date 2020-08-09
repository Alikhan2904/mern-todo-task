import React, { Component } from 'react';
import { login } from './UserFunctions';

class Login extends Component {
  constructor() {
    super();
    // state contains email and password
    this.state = {
      email: '',
      password: '',
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // called whenever a field changes
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  // called whenever a form is submitted
  onSubmit(e) {
    e.preventDefault();

    // user object created based on the state
    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    // passes the user object to login function from UserFunctions.js
    login(user).then((res) => {
      if (res) {
        this.props.history.push(`/profile`);
      }
    });
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 mt-5 mx-auto'>
            <form onSubmit={this.onSubmit}>
              <h1 className='h3 mb-3 font-weight-normal'>Todo Login</h1>
              <div className='form-group'>
                <label htmlFor='email'>Email address</label>
                <input
                  type='email'
                  className='form-control'
                  name='email'
                  placeholder='Enter email'
                  value={this.state.email}
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  className='form-control'
                  name='password'
                  placeholder='Password'
                  value={this.state.password}
                  onChange={this.onChange}
                  required
                />
              </div>
              <button
                type='submit'
                className='btn btn-lg btn-primary btn-block'
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
