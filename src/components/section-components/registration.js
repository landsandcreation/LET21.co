
import React, { Component, useState } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';
import axios from 'axios';
import {Link} from "react-router-dom"
import {useHistory} from "react-router-dom"

export default class Registration extends Component 
{

handleSubmit = e => {
    e.preventDefault();

    const data =  {
        fName: this.fName,
        lName: this.lName,
        email: this.email,
        password: this.password,
        phone: this.phone,
      
    }
   axios.post('http://Let21backend.herokuapp.com/traveler/sign-up', data).then(
       res => {
           console.log(res)
       }
   ).catch(
       err => {
        console.log(err);
       }
       
   )
};
render(){
return(
    <div className="register-page-area pd-bottom-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-4 col-lg-5 col-md-6 mb-5 mb-md-0">
           
              </div>
              <div className="col-xl-4 col-lg-5 col-md-6">
                <form className="contact-form-wrap contact-form-bg" onSubmit={this.handleSubmit}>
                  <h4>Registration</h4>
                  <div className="rld-single-input">
                    <input type="text" onChange={e => this.fName = e.target.value}   placeholder="First Name" />
                  </div>
                  <div className="rld-single-input">
                    <input type="text" onChange={e => this.lName = e.target.value}  placeholder="Last Name" />
                  </div>
                  <div className="rld-single-input">
                    <input type="email"  onChange={e => this.email = e.target.value}  placeholder="Email Address" />
                  </div>
                  <div className="rld-single-input">
                    <input type="password" onChange={e => this.password = e.target.value}   placeholder="Password" />
                  </div>
                  <div className="rld-single-input">
                    <input type="phone" onChange={e => this.phone = e.target.value}  placeholder="Phone number" />
                  </div>
                  <div className="btn-wrap">
                   <button className="btn btn-yellow" type="submit">Register</button>
                  </div><br></br>
                  <h6>Already have an account?<a href="">Login</a></h6>
                  <ul className="social-icon">
                    <li className="ml-0">
                      <a href="#" target="_blank"><i className="fa fa-facebook  " /></a>
                    </li>
                    <li>
                      <a href="#" target="_blank"><i className="fa fa-twitter  " /></a>
                    </li>
                    <li>
                      <a href="#" target="_blank"><i className="fa fa-linkedin" /></a>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
          </div>
        </div>
    )
}
    }

