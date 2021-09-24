import React, { Component } from 'react';
import parse from 'html-react-parser';
import axios from 'axios';
import sectiondata from '../../data/sections.json';
import { Link } from "react-router-dom"
class Verify extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.whychooseus


    return <div className="register-page-area pd-bottom-100 m-auto">
          <div className="container">
              <div className="col-xl-4 col-lg-5 col-md-6">
                <form className="contact-form-wrap contact-form-bg">
                  <h4>Verify your email</h4>
                 
                  <div className="rld-single-input">
                      
                    <input type="number" label="verification code" placeholder="Enter your verification code" />
                  </div>
                  <div className="btn-wrap">
                    <button className="btn btn-yellow" href="/registration">verify now</button>
                  </div>
             
                </form>
              
              </div>
            </div>
          </div>
       
        }
}

export default Verify