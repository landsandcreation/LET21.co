import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  Link,
  Router,
  useLocation
} from 'react-router-dom';
import './css/style.scss';
import { focusHandling } from 'cruip-js-toolkit';
import './charts/ChartjsConfig';
// Import pages
import Dashboard from './pages/Dashboard';
import Amen from './partials/dashboard/amen';
import House from './partials/dashboard/house';
import Price from './partials/dashboard/price';
import Rules from './partials/dashboard/rules';
import Offers from './partials/dashboard/offers';
import Profileset from './partials/dashboard/profileset';
import View from './partials/dashboard/view';
import Header from "../src/components/header/Header.js";
import Home from "./components/home/home.js";
import Footer from "./components/footer/footer.js";
import About from "./pages/about.js";
import Notification from "./travelers/notification.js";
import location from "./pages/location.js";
import BookingDetailsContent from "./components/trip/booking-details-content.js";
import BookingsContent from "./components/trip/bookings-content.js";
import CompletingBookingContent from "./components/trip/completing-booking-content.js";
import Personal from "./pages/personal.js";
import SignInForm from "./components/auth/sign-in-form.js";
import RegisterForm from "./components/auth/register-form.js";
import './css/style.scss';


function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
    focusHandling('outline');
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Switch>
     
        
        <Route path='/' exact component={Home} />
    <Route path='/header' exact component={Header} />
    <Route path='/about' exact component={About} />
    <Route path='/Dashboard' exact component={Dashboard} />
    <Route path='/notification' exact component={Notification} />
    <Route path='/booking-details-content' exact component={BookingDetailsContent} />
    <Route path='/bookings-content' exact component={BookingsContent} />
    <Route path='/personal' exact component={Personal} />
    <Route path='/sign-in-form' exact component={SignInForm} />
    <Route path='/register-form' exact component={RegisterForm} />
    <Route path='/completing-booking-content' exact component={CompletingBookingContent} />
    <Route path="/Dashboard" exact component={Dashboard} />
        <Route path='/amen' exact component={Amen} />
        <Route path='/house' exact component={House} />
        <Route path='/price' exact component={Price} />
        <Route path='/rules' exact component={Rules} />
        <Route path='/offers' exact component={Offers} />
        <Route path='/profileset' exact component={Profileset} />
        <Route path='/view' exact component={View} />
       
       
      </Switch>
   
    </>
  );
}

export default App;
