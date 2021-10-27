import React from 'react';
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'


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
      </Router>
    </div>
  );
}

export default App;
