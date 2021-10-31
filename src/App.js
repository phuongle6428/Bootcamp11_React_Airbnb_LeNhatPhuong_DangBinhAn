import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './modules/homePage/pages/HomePage';
import Login from './modules/auths/pages/Login';


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
          <Route>
            <Login/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
