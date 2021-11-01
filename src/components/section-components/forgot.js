import React, { Component } from 'react';
import parse from 'html-react-parser';
import axios from 'axios';

import { Link } from "react-router-dom"
class ForgotPassword extends Component {


    render() {

     


    return <div className="register-page-area pd-bottom-100 m-auto">
          <div className="container">
              <div className="col-xl-4 col-lg-5 col-md-6">
                <form className="contact-form-wrap contact-form-bg">
                  <h4>Recover Password</h4>
                 
                  <div className="rld-single-input">
                      
                    <input type="number" label="Email address" placeholder="Enter your emaill address" />
                  </div>
                  <div className="btn-wrap">
                    <button className="btn btn-yellow">Remember now</button>
                  </div>
             
                </form>
              
              </div>
            </div>
          </div>
       
        }
}

export default ForgotPassword