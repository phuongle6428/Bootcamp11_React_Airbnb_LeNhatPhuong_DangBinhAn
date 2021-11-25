import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Head from "next/head";
import Login from './modules/auths/pages/Login';
import Register from './modules/auths/pages/Register';

import Header from './modules/homePage/components/Header';
import Footer from './components/Footer';
import HomePage from './modules/homePage/pages/HomePage';
import Profile from './modules/profile/pages/Profile';
import UserPath from './path/UserPath';


function App() {
  return (
    <>
      {/* <Head>
         <link
           href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800;900&display=swap"
           rel="stylesheet"
         />
         <title>Airbnb-BC11</title>
         <meta
           name="description"
           content="Find holiday rentals, cabins, beach houses, unique homes and experiences around the world – all made possible by Hosts on Airbnb."
         />
         <link rel="icon" href="/favicon.png" />
     </Head> */}

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
    </>
    // <>
    // <Head>
    //     <link
    //       href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800;900&display=swap"
    //       rel="stylesheet"
    //     />
    //     <title>Airbnb-BC11</title>
    //     <meta
    //       name="description"
    //       content="Find holiday rentals, cabins, beach houses, unique homes and experiences around the world – all made possible by Hosts on Airbnb."
    //     />
    //     <link rel="icon" href="/favicon.png" />
    // </Head>

    // <Component {...pageProps}/>
    // </>
  );
}

export default App;
