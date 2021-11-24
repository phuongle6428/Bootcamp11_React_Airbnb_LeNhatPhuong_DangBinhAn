import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
// import Head from "next/head";


import Header from './modules/homePage/components/Header';
import Footer from './components/Footer';
import HomePage from './modules/homePage/pages/HomePage';


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
