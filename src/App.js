import React,{ Component, Fragment, useState } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch, Redirect } from "react-router-dom";
import blogdata from './data/blogdata.json';
import Singleblogdata from './data/single-blogdata.json';
import HomeV1 from './components/home-v1';
import HomeV2 from './components/home-v2';
import HomeV3 from './components/home-v3';
import HomeV4 from './components/home-v4';
import Property from './components/property';
import AvilableProperty from './components/availavbe-property';
import PropertiesByCity from './components/properties-by-city';
import PropertyDetails from './components/property-details';
import About from './components/about';
import Advisor from './components/advisor';
import Pricing from './components/pricing';
import UserList from './components/user-list';
import Registration from './components/registration';
import Reset from './components/reset';
import Verify from './components/verify';
import ForgotPassword from './components/forgot';
import Error from './components/error';
import Faq from './components/faq';
import News from './components/news';
import NewsDetails from './components/news-details';
import Contact from './components/contact';
import SearchMap from './components/search-map';
import SearchGrid from './components/search-grid';
import SearchList from './components/search-list';
import AddNew from './components/add-property';
import BookingDetails from './components/section-components/booking-details';
 import Login from './components/login';
//import Login from './components/section-components/login'
import OwnersLogin from './components/owners_login';
import DatePicker from './common/date-picker';
import CompletingBookingContent from './components/section-components/completing-booking-content';
import { toast } from "react-toastify"



function App (){

        return(
          <Fragment>
            <Router>
             
                <div>
                <Switch>
                    <Route exact path="/" component={HomeV1} />
                    <Route path="/home-v2" component={HomeV2} />
                    <Route path="/date-picker" component={DatePicker} />
                    <Route path="/home-v3" component={HomeV3} />
                    <Route path="/home-v4" component={HomeV4} />
                    <Route path="/property" component={Property} />
                    <Route path="/availavbe-property" component={AvilableProperty} />
                    <Route path="/properties-by-city" component={PropertiesByCity} />
                    <Route path="/property-details" component={PropertyDetails} />
                    <Route path="/about" component={About} />
                    <Route path="/login" component={Login} />
                    <Route path="/advisor" component={Advisor} />
                    <Route path="/pricing" component={Pricing} />
                    <Route path="/user-list" component={UserList} />
                    <Route path="/reset" component={Reset} />
                    <Route path="/verify" component={Verify} />
                    <Route path="/forgot" component={ForgotPassword} />
                    <Route path="/booking-details" component={BookingDetails} />
                    <Route path="/completing-booking-content" component={CompletingBookingContent} />
                    <Route path="/error" component={Error} />
                    <Route path="/faq" component={Faq} />
                    <Route path="/news" component={News} />
                    <Route path="/news-details" component={NewsDetails} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/search-map" component={SearchMap} />
                    <Route path="/search-grid" component={SearchGrid} />
                    <Route path="/search-list" component={SearchList} />
                </Switch>
               
                </div>
           
            </Router>
            </Fragment>
        );
}

export default App;

