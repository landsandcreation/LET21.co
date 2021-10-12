
import React, { Component, useState } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';
import axios from 'axios';
import {Link, Redirect, withRouter} from "react-router-dom"
import {useHistory} from "react-router-dom"

import { Router } from 'react-router-dom/cjs/react-router-dom.min';

export default class Registration extends Component 
{

state = {
  fName : '',
  lName: '',
  email: '',
  password: ''
}

onChangeFname = (e) => {
  this.setState({fName: e.target.value})
}

onChangeLname = (e) => {
  this.setState({lName: e.target.value})
}

onChangeEmail =(e) => {
  this.setState({email: e.target.value})
}

onChangePassword = (e) => {
  this.setState({password: e.target.value})
}

onChangePhone = (e) => {
  this.setState({phone: e.target.value})
}


handleSubmit = (e) => {
  const { fName, lName, email, password, phone} = this.state
  e.preventDefault()

  const registerObject = {
    fName,
    lName,
    email,
    password,
    phone
  }

  axios.post('http://localhost:5000/owner/sign-up', registerObject)
  .then(function(res){
    if(res.data === 'User Created'){
      <Redirect to="/" />
     //redirect to verify account
    }
  })
  .catch((error) => {
     console.log(error.response.data) 
     
    });

    this.setState({email: "", password: "", fName: '', lName: ''});
  }

  
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
                      <input type="text" onChange={this.onChangeFname}   placeholder="First Name" />
                    </div>
                    <div className="rld-single-input">
                      <input type="text" onChange={this.onChangeLname}  placeholder="Last Name" />
                    </div>
                    <div className="rld-single-input">
                      <input type="email"  onChange={this.onChangeEmail}  placeholder="Email Address" />
                    </div>
                    <div className="rld-single-input">
                      <input type="password" onChange={this.onChangePassword}   placeholder="Password" />
                    </div>
                    <div className="rld-single-input">
                      <input type="phone" onChange={this.onChangePhone}  placeholder="Phone number" />
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

    

