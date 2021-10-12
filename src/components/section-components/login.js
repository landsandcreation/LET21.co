import React, { Component, useState } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';
import axios from 'axios';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

class Login extends Component {

  state = {
    email: '',
    password: ''
  }

  onChangeEmail = (e) => {
    this.setState({email: e.target.value})
  }

  onChangePassword = (e) => {
    this.setState({password: e.target.value})
  }

  handleSubmit = (e) => {
    const {email, password} = this.state
    e.preventDefault()

    const loginObject = {
      email, 
      password
    }

    axios.post('http://localhost:5000/owner/sign-in', loginObject)
    .then(async (res) => {
      
      const authToken = res.data
      if(authToken){
        localStorage.setItem("token", JSON.stringify(authToken))
        // setAuth(true)
        //redirect to any page 

        //next()
      }else{
        //setAuth(false)
      }
    console.log(res.data)
    })
    .catch((error) => {
     console.log(error)
      
     //If error code = 401 return please verify your account
     //if error code  = 406 return incorrect email or password
    });

    // this.setState({email: "", password: ""});
  }

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
                    <input type="email" name="email" onChange={this.onChangeEmail}  placeholder="Email Address" />
                  </div>
                  <div className="rld-single-input">
                    <input type="password" name="password" onChange={this.onChangePassword}   placeholder="Password" />
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



// const Login = ({setAuth}) => {

//   const [inputs, setInputs] = useState({
//     email: "",
//     password: ""
//   })
//   const {email, password} = inputs;

//   const onChange = e => setInputs({ ...inputs, [e.target.name]: e.target.value})

//   const onSubmitForm = async e => {
//     e.preventDefault()

//     try{
//       const body = {email, password}

//       const response = await fetch("http://localhost:5000/owner/sign-in", {
//         method: "POST",
//         headers:{
//             "Content-type": "application/json"
//         },
//         body: JSON.stringify(body)
//       })

//       const parseRes = await response.json()

//       console.log(parseRes)
//     }catch(err){
//       console.error(err.message)
//     }
//   }

//     let publicUrl = process.env.PUBLIC_URL+'/'
//     let imagealt = 'image'
//     let data = sectiondata.whychooseu

//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Login
