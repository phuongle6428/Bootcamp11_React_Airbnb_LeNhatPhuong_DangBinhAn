import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './modules/auths/pages/Login';
import Register from './modules/auths/pages/Register';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './modules/homePage/pages/HomePage';
import Profile from './modules/profile/pages/Profile';
import UserPath from './path/UserPath';

function App() {
  return (
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
          <Footer />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <UserPath path="/user/profile">
          <Profile />
        </UserPath>
        {/* <Route path="/user/profile">
          <Profile />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
