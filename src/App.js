import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './modules/homePage/pages/HomePage';
import Login from './modules/auths/pages/Login';
import Register from './modules/auths/pages/Register';


function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path={["/", "/search"]}>
            <Header />
            <Switch>
              <Route path="/search">
                {/* SearchPage */}
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Router path="/profile"></Router>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
