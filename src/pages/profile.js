import React from "react"
import { AppliedLayout } from "../components/layout"

import { PageContainer, Content } from "../components/static"

import { Link } from "react-router-dom"

import  oil  from "../assets/images/oil.jpg"

import style from "./about2.module.scss"
const profile = props => {

  return (
 
    <AppliedLayout {...props}>
        <div>
<div className={style.Profile}>
    <div className={style.Profile__book}>
        <div>
            <label>Enter your First Name</label><br></br>
            <input type="name" placeholder="Enter your first name" />
        </div>
        <br></br>
        <div>
            <label>Enter your Last Name</label><br></br>
            <input type="name" placeholder="Enter your Last Name" />
        </div>
        <br></br>
        <div>
            <label>Enter your Phone Number</label><br></br>
            <input type="name" placeholder="Enter your Phone Number" />
        </div>
        <br></br>
        <div>
            <label>Enter your Email Address</label><br></br>
            <input type="name" placeholder="Enter your Email Address" />
        </div>
        <br></br>
       
    </div>
    <div className={style.Profile__book}>

    <div>
            <label>Date of Birth</label><br></br>
            <input type="DOB" placeholder="Date of Birth" />
        </div>
        <br></br>
        <div>
            <label>Place of Residence</label><br></br>
            <input type="name" placeholder="Place of Residence" />
        </div>
        <br></br>
        <div>
            <label>Gender</label><br></br>
            <input type="name" placeholder="Enter your Gender" />
        </div>
        
    </div>
   
</div>


</div>
    </AppliedLayout>
   
  )
}
profile.propTypes = {}
export default profile
