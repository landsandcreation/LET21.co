import React, { Component, Fragment, useState } from 'react';
import Navbar from '../global-components/navbar';
import { Link } from 'react-router-dom';
import styles from "./booking.module.scss";
import Footer_v1 from '../global-components/footer';

const BookingDetails = ({ setauth }) => {

const [inputs, setInputs] = useState({
  fName: "",
  lName: "",
  email: "",
  phonr: "",
  state: "",
  country: "",
  address: "",
  gender: ""
})
const { fName, lName, email, phone, state, country, address, gender } = inputs;

const onChange = e => {
  setInputs({...inputs, [e.target.name]: e.target.value });
}

const onSubmitForm = async (e) => {
  e.preventDefault()

  try {

    const body = {fName, lName, email, phone, state, country, address, gender};
    const response = await fetch("https://Let21backend.herokuapp.com/owner/", {
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

    return (
        <Fragment>
        <div>
            <Navbar />
           
              <form className={styles.create}  onSubmit={onSubmitForm}>
              <div>
            <h4>Start your booking</h4>
        <h6>Please enter your Personal Information details</h6><br></br>

        </div>
    <div className={styles.BookingDetailsContent__first__colu}>
<div className={styles.BookingDetailsContent__first__colu__one}>
<input type="name" placeholder="Enter your First Name *"  name="fName" value={fName} onChange= {e => onChange(e)} />
</div>
<div className={styles.BookingDetailsContent__first__colu__two}>
<input type="name" placeholder="Enter your Last Name *" name="lName" value={lName} onChange= {e => onChange(e)}/>
</div>
</div>
    <div className={styles.BookingDetailsContent__first__colu}>
<div className={styles.BookingDetailsContent__first__colu__one}>
<input type="emal" placeholder="Enter your Email Address *" name="email" value={email} onChange= {e => onChange(e)}/>
</div>
<div className={styles.BookingDetailsContent__first__colu__two}>
<input type="phone" placeholder="Enter your Phone Number *" name="phone" value={phone} onChange= {e => onChange(e)}/>
</div>

</div>
<div className={styles.BookingDetailsContent__first__colu__three}>
<input type="name" placeholder="Enter your State *" name="state" value={state} onChange= {e => onChange(e)}/>
</div>
<div className={styles.BookingDetailsContent__first__bolu}>
<div className={styles.BookingDetailsContent__first__bolu__four}>
<input type="name" placeholder="Enter your Country *" name="country" value={country} onChange= {e => onChange(e)}/> 
</div>
<div className={styles.BookingDetailsContent__first__bolu__five}>
<input type="name" placeholder="Enter your Address *" name="address" value={address} onChange= {e => onChange(e)}/>
</div>


</div>
    <div>
   <select name="gender" value={gender} onChange= {e => onChange(e)}>
   
   <option selected={true} disabled={true}> Gender</option>
   <option>Males</option>
   <option>Female</option>
          </select> 
          
          </div>
<div className={styles.BookingDetailsContent__butt}>
<button>
  <Link to="/completing-booking-content"><a>Agree and Continue</a></Link>
</button>
</div> 

    </form> 
    <Footer_v1 />
        </div>
        </Fragment>
    )

}
export default BookingDetails