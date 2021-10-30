import React,{ Component, Fragment, useState } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';
import {Link} from "react-router-dom"
import {useHistory} from "react-router-dom"
import { toast } from "react-toastify"

const OwnersLogin = ({ setauth }) => {

const [inputs, setInputs] = useState({
  email: "",
  password: "" 
})
const { email, password } = inputs;

const onChange = (e) => {
  setInputs({...inputs, [e.target.name]: e.target.value });
};

const onSubmitForm = async (e) => {
  e.preventDefault()

  try {

    const body = {email, password};
    const response = await fetch("https://Let21backend.herokuapp.com/owner/sign-in", {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" }
    });

    const parseRes = await response.json();

    if(parseRes.token){
      localStorage.setItem("token", parseRes.token);
      setauth(true);
toast.success("login successfully!")      
    }else{
      setauth(false)
      toast.error(parseRes)
    }
    



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
                  <h4>Login Page</h4>
                  
                  <div className="rld-single-input">
                    <input type="email" name="email" value={email} onChange= {e => onChange(e)}  placeholder="Email Address" />
                  </div>
                  <div className="rld-single-input">
                    <input type="password" name="password" value={password} onChange= {e => onChange(e)} placeholder="Password" />
                  </div>
                 
                  <div className="btn-wrap">
                   <button className="btn btn-yellow" type="submit" >Login</button>
                  </div><br></br>
                  <h6>Do not have an account?<a href="">Register</a></h6>
                  <h6>Forgot password?<Link to="/forgot">Remember me</Link></h6>
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
}
    
export default OwnersLogin;