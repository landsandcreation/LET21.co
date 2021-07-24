import React, { useState } from "react"
import FormContainer from "../common/form-container"
import styles from "./auth.module.scss"
import cx from "classnames"
import { Input, Button } from "../common"
import { Link } from 'react-router-dom';
import Header from "../header/Header"
import Footer from "../footer/footer"

const SignInForm = props => {

  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [name2, setName2] = useState("")
 

  return (
   
    <FormContainer
    
      className={cx(styles.FormContainer, styles.SignInForm)}
      header="Sign In"
    >

<h2 style={{styles, color: "#ffa500"}}>Login to your own dashboard</h2>
      <form action="/action_page.php" >
      
      
        <Input
          type="name"
          value={name2}
          className={styles.SignInForm__Input}
          label="Full Name"
          placeholder="Enter your Full Name"
          onChange={({ target }) => setName2(target.value)}
          required
        />
        <Input
          type="email"
          value={phone}
          className={styles.SignInForm__Input}
          label="Email Address"
          placeholder="Enter your email address"
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
          <a href="/Dashboard"> Sign In Now</a>
         
        </Button>
        <div>
          <h4>Continue without Sign In</h4>
          <div>
            <h4>Do not have an account? <a href="/register-form">Sign Up</a></h4>
          </div>
        </div>

      </form>
  
    </FormContainer>
    
  )
  
}
<Footer />
SignInForm.propTypes = {}

export default SignInForm
