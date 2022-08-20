import './App.css';
import Header from './Header'
import Home from './Home';
import Checkout from './Checkout'
// import Login from './Login'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React, { useEffect } from 'react';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function App() {

  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the app component loads...

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        //the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET-USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path="/checkout" element={<><Header /><Checkout /></>}></Route>
          <Route path="/login" element={[<Login />]}></Route>
      {/* MAKE SURE YOUR DEFAULT ROUTE I.E; HOME PAGE IS AT THE BOTTOM */} 
          <Route path="/" element={<><Header /><Home /></>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
