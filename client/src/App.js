import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Components imported
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import TodoHome from './components/Todo/TodoHome'

// Define rendering logic and also define all the routes of application
function App() {
  return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/todohome" component={TodoHome} />
          </div>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
