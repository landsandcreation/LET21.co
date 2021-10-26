import React, { Component, Fragment, useState } from 'react';
import Navbar from '../global-components/navbar';
import { Link } from 'react-router-dom';
import styles from "./booking.module.scss";
import Footer_v1 from '../global-components/footer';

const CompletingBookingContent = ({ setauth }) => {

const [inputs, setInputs] = useState({
  fName: "",
  lName: "",
  card: "",
  dob: "",
  code: "",
  city: "",
  zip: "",
  country: ""
})
const { fName, lName, card, dob, code, city, zip, country } = inputs;

const onChange = e => {
  setInputs({...inputs, [e.target.name]: e.target.value });
}

const onSubmitForm = async (e) => {
  e.preventDefault()

  try {

    const body = {fName, lName, card, dob, code, city, zip, country};
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
            <form className={styles.create} onSubmit={onSubmitForm}>
                <div>
                <h4>Complete your booking</h4>
        <h6>Enter Payment Information</h6><br></br>
                </div>
    <div className={styles.BookingDetailsContent__first__colu}>
<div className={styles.BookingDetailsContent__first__colu__one}>
<input type="name" placeholder="First Name"  name="fName" value={fName} onChange= {e => onChange(e)}></input>
</div>
<div className={styles.BookingDetailsContent__first__colu__two}>
<input type="name" placeholder="Last Name"  name="lName" value={lName} onChange= {e => onChange(e)}></input>
</div>
</div>
    <div className={styles.BookingDetailsContent__first__colu}>
<div className={styles.BookingDetailsContent__first__colu__one}>
<input type="number" placeholder="Card Number"  name="card" value={card} onChange= {e => onChange(e)}></input>
</div>
<div className={styles.BookingDetailsContent__first__colu__two}>
<input type="dob" placeholder="Expiration MM/YY"  name="dob" value={dob} onChange= {e => onChange(e)}></input>
</div>

</div>
<div className={styles.BookingDetailsContent__first__colu__three}>
<input type="number" placeholder="Security Code"  name="code" value={code} onChange= {e => onChange(e)}></input>
</div>
<div className={styles.BookingDetailsContent__first__bolu}>
<div className={styles.BookingDetailsContent__first__bolu__four}>
<input type="name" placeholder="City"  name="city" value={city} onChange= {e => onChange(e)}></input>
</div>
<div className={styles.BookingDetailsContent__first__bolu__five}>
<input type="number" placeholder="Zip Code"  name="zip" value={zip} onChange= {e => onChange(e)}></input>
</div>
<div className={styles.BookingDetailsContent__first__bolu__six}>
<input type="name" placeholder="Country"  name="country" value={country} onChange= {e => onChange(e)}></input>
</div>

</div>
<div className={styles.BookingDetailsContent__butt}>
<button>
  <a>Pay Now</a>
</button>
</div> 

    </form>
    <Footer_v1 />
        </div>
        </Fragment>
    )

}
export default CompletingBookingContent