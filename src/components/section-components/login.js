import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';
import axios from 'axios';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
class Login extends Component {
handleSubmit = e => {
  e.preventDefault();


  const data = {
    email: this.email,
    password: this.password
  }

axios.post('http://Let21backend.herokuapp.com/traveler/sign-in', data)
.then(res => {
  console.log(res)
})
.catch(err => {
  console.log(err)
  
})


};

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.whychooseus


    return <div className="register-page-area pd-bottom-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-4 col-lg-5 col-md-6 mb-5 mb-md-0">
              <form className="contact-form-wrap contact-form-bg" onSubmit={this.handleSubmit}>
                  <h4>Login</h4>
                
                  <div className="rld-single-input">
                    <input type="email"  onChange={e => this.email = e.target.value}  placeholder="Email Address" />
                  </div>
                  <div className="rld-single-input">
                    <input type="password" onChange={e => this.password = e.target.value}   placeholder="Password" />
                  </div>
                  
                  <div className="btn-wrap">
                   <button className="btn btn-yellow" type="submit" >Login</button>
                  </div><br></br>
                  <h6>Forgot password? <a href="/">Remember me</a></h6><br></br>
                  <h6>Do not have an account? <a href="/">Sign Up</a></h6>
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
        }
}

export default Login