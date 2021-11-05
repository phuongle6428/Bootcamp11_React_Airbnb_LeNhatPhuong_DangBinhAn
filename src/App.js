import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './modules/homePage/pages/HomePage';

function App() {
  return (
    <div className="app">
      <Router>
        <Header/>
        <Switch>
          <Route path="/search">
            {/* SearchPage */}
          </Route>
          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
