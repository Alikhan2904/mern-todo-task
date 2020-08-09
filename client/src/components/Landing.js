import React, { Component } from 'react';

// This is the landing or welcome page. Class based component is used in it

class Landing extends Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron mt-5'>
          <div className='col-sm-8 mx-auto' style={{ textAlign: 'center' }}>
            <h1 style={{ color: 'seagreen' }} className='text-center'>
              WELCOME TO TODO LIST
            </h1>
            <img src='todo.png' alt='' style={{ maxWidth: '250px' }} />
            <br/><br/>
            <h6 className='text-center text-muted'>
              Created for <a href="http://www.ignitelabs.co/index.html"><b>Ignite Labs</b></a> by <a href="https://alikhanmehboob.netlify.app/"><b>Ali khan Mehboob</b></a>
            </h6>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
