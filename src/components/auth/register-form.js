import React, { useState } from "react"
import FormContainer from "../common/form-container"
import styles from "./auth.module.scss"
import cx from "classnames"
import { Input, Button } from "../common"
import { Link } from 'react-router-dom';
import Header from "../header/Header"
import Footer from "../footer/footer"
import { Avatar} from "@material-ui/core";
const RegisterForm = props => {

  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [name2, setName2] = useState("")
 

  return (
   
    <FormContainer
    
      className={cx(styles.FormContainer, styles.SignInForm)}
      header="Welcome"
    >
<h2 style={{styles, color: "#ffa500"}}>Register with us</h2>

      <form action="/action_page.php" >
      
        <Input
          type="name"
          value={name}
          className={styles.SignInForm__Input}
          label="First Name"
          
          placeholder="Enter your First Name"
          onChange={({ target }) => setName(target.value)}
          required
        />
        <Input
          type="name"
          value={name2}
          className={styles.SignInForm__Input}
          label="Last Name"
          placeholder="Enter your Last Name"
          onChange={({ target }) => setName2(target.value)}
          required
        />
        <Input
          type="email"
          value={name2}
          className={styles.SignInForm__Input}
          label="Email Address"
          placeholder="Enter your email address"
          onChange={({ target }) => setName2(target.value)}
          required
        />
        <Input
          type="phone"
          value={phone}
          className={styles.SignInForm__Input}
          label="Phone Number"
          placeholder="Enter your phone number"
          onChange={({ target }) => setPhone(target.value)}
          required
        />
        <Input
          type="password"
          value={password}
          className={styles.SignInForm__Input}
          label="Password"
          placeholder="*****"
          onChange={({ target }) => setPassword(target.value)}
          required
        />
        <Button  className={styles.SignInForm__Submit} type="Submit">
          <a href="/sign-in-form"> Register Now</a>
         
        </Button>
        <div>
         
          <div>
            <h4>Already have an account? <a href="/sign-in-form">Sign In</a></h4>
          </div>
        </div>

      </form>
  
    </FormContainer>
    
  )
  
}
<Footer />
RegisterForm.propTypes = {}

export default RegisterForm
