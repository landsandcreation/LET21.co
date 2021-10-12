import React, { Component } from 'react';
import parse from 'html-react-parser';
import axios from 'axios';
import sectiondata from '../../data/sections.json';
import { Link } from "react-router-dom"
class Verify extends Component {

  state = {
    secretToken: ''
  }

  onChangeToken = (e) => {
    this.setState({secretToken: e.target.value})
  }

  handleSubmit = (e) => {
    const {secretToken} = this.state
    e.preventDefault()

    const verifyObject = {
      secretToken
    }

    axios.post('http://localhost:5000/owner/verify-account', verifyObject)
    .then(res => console.log(res.data.message))
    //redirect to login
    .catch((error)=>{
      console.log(error.response.data)
    })
  }

 

  



    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.whychooseus


    return <div className="register-page-area pd-bottom-100 m-auto">
          <div className="container">
              <div className="col-xl-4 col-lg-5 col-md-6">
                <form className="contact-form-wrap contact-form-bg"  onSubmit={this.handleSubmit}>
                  <h4>Verify your email</h4>
                 
                  <div className="rld-single-input">
                      
                    <input type="number" onChange={this.onChangeToken} label="verification code" placeholder="Enter your verification code"  />
                  </div>
                  <div className="btn-wrap">
                    <button className="btn btn-yellow" type="submit">verify now</button>
                  </div>
             
                </form>
              
              </div>
            </div>
          </div>
       
        }
}

export default Verify