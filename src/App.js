import React, { useEffect } from 'react';
import './App.css';
import Home from './Components/Home';
import Header from './Header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CheakOut from './Components/CheakOut';
import Login from './Components/Login';
import { auth } from './Components/Firebase';
import { useStateValue } from './Redux/StateProvider';
import Payment from './Components/Payment';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'





function App() {

  const promise = loadStripe(
    "pk_test_51Lt6e9SGLJBGtvIMtysAybobr2KklQ8NcxIRtezJthx25iu3tv18SijHIE2u01Hnc4mMauq6fahujHOJSLvzLNXk00UQ6RChxz"
  )

  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('The User is >>>>>>')

      if (authUser) {
        // user loged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // user logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  }, []) // will only runce when app component load  


  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/payment'
            element={<div>
              <Header />
              <Elements stripe={promise} key={stripeAccount}>
                <Payment/>
              </Elements>
            </div>} />
          <Route exact path='/' element={<div><Header /> <Home /></div>} />
          <Route exact path='/cheak' element={<div><Header /> <CheakOut /></div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
