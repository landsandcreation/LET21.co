
import React, { Component, Fragment, useState } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';
import axios from 'axios';
import {Link} from "react-router-dom"
import {useHistory} from "react-router-dom"

const Registration = ({ setauth }) => {

const [inputs, setInputs] = useState({
  fName: "",
  lName: "",
  phone: "",
  email: "",
  password: ""
  
})
const { fName, lName, phone, email, password } = inputs;

const onChange = e => {
  setInputs({...inputs, [e.target.name]: e.target.value });
}

const onSubmitForm = async (e) => {
  e.preventDefault()

  try {

    const body = { fName, lName, phone, email, password };
    const response = await fetch("https://Let21backend.herokuapp.com/owners/sign-up", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    const parseRes = await response.json();
    
localStorage.setItem("token", parseRes.token);
setauth(true)



  } catch (err) {
    console.error(err.message);
  }
};
return(
  <Fragment>
    <div className="register-page-area pd-bottom-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-4 col-lg-5 col-md-6 mb-5 mb-md-0">
           
              </div>
              <div className="col-xl-4 col-lg-5 col-md-6">
                <form className="contact-form-wrap contact-form-bg" onSubmit={onSubmitForm}>
                  <h4>Registration</h4>
                  <div className="rld-single-input">
                    <input type="text" name="fName" value={fName} onChange= {e => onChange(e)} placeholder="First Name" />
                  </div>
                  <div className="rld-single-input">
                    <input type="text"  name="lName" value={lName} onChange= {e => onChange(e)} placeholder="Last Name" />
                  </div>
                  <div className="rld-single-input">
                    <input type="phone" name="phone" value={phone} onChange= {e => onChange(e)} placeholder="Phone number" />
                  </div>
                  <div className="rld-single-input">
                    <input type="email" name="email" value={email} onChange= {e => onChange(e)}  placeholder="Email Address" />
                  </div>
                  <div className="rld-single-input">
                    <input type="password" name="password" value={password} onChange= {e => onChange(e)} placeholder="Password" />
                  </div>
                  
                  <div className="btn-wrap">
                   <button className="btn btn-yellow" type="submit">Register</button>
                  </div><br></br>
                  <h6>Already have an account?<Link to="/login">Login</Link></h6>
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
        </Fragment>
    );
};
    
export default Registration;