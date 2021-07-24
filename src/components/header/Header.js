import React from 'react'
import style from "./header.module.scss"
import { Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import {Person, Mail, KeyboardArrowDown} from "@material-ui/icons";
import { Avatar} from "@material-ui/core";
import { Dropdown } from 'react-bootstrap';
function Header() {
 
    return (
        
      <div className={style.Header}>
    <div className={style.Header__logo}>
   <a href="/">LET21</a>
    </div>

<div className={style.Header__center}>


<a href="">Help</a>
<a href="">About</a>
<a href="">Experiences</a>


</div>
<div className={style.Header__right}>
  <a>
<div>
        <Dropdown >
        <Dropdown.Toggle 
        variant="secondary btn-sm" 
        id="dropdown-basic"  style={{...style, background: "none", border: "none"}}>
            Login
            <KeyboardArrowDown />
        </Dropdown.Toggle>

        <Dropdown.Menu style={{...style, marginTop: "40"}} className={style.las}>
            <Dropdown.Item href="/sign-in-form" style={{...style, color: "black", textDecoration: "none"}}>Owners Login</Dropdown.Item><br></br><br></br>
            <Dropdown.Item href="/sign-in-form"  style={{style, color: "black", textDecoration: "none"}}>Travelers Login</Dropdown.Item><br></br><br></br>
            <Dropdown.Item href="/notification"  style={{style, color: "black", textDecoration: "none"}}>Notification</Dropdown.Item><br></br><br></br>
            <Dropdown.Item href="/sign-in-form"  style={{style, color: "black", textDecoration: "none"}}>My Trips</Dropdown.Item><br></br><br></br>
            <Dropdown.Item href="/"  style={{style, color: "black", textDecoration: "none"}}>My Profile</Dropdown.Item><br></br><br></br>
            <Dropdown.Item href="/Dashboard"  style={{style, color: "black", textDecoration: "none"}}>Owners Dashboard</Dropdown.Item><br></br><br></br>
            <Dropdown.Item href="/sign-in-form"  style={{style, color: "black", textDecoration: "none"}}>Logout</Dropdown.Item><br></br><br></br>
        </Dropdown.Menu>
        </Dropdown>
       
</div>
</a>
<a href="/sign-in-form" className={style.ava}><Avatar /></a>

</div>
      </div>
      
    )
}
export default Header;