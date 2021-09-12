import React, { Component } from 'react';
import Navbar from '../global-components/navbar';
import { Link } from 'react-router-dom';
import styles from "./booking.module.scss";
import Footer_v1 from '../global-components/footer';
class BookingDetails extends Component {

    render() {
    return (
        <div>
            <Navbar />
           
              <form className={styles.create}>
              <div>
            <h4>Start your booking</h4>
        <h6>Please enter your Personal Information details</h6><br></br>

        </div>
    <div className={styles.BookingDetailsContent__first__colu}>
<div className={styles.BookingDetailsContent__first__colu__one}>
<input type="name" placeholder="Enter your First Name *"></input>
</div>
<div className={styles.BookingDetailsContent__first__colu__two}>
<input type="name" placeholder="Enter your Last Name *"></input>
</div>
</div>
    <div className={styles.BookingDetailsContent__first__colu}>
<div className={styles.BookingDetailsContent__first__colu__one}>
<input type="emal" placeholder="Enter your Email Address *"></input>
</div>
<div className={styles.BookingDetailsContent__first__colu__two}>
<input type="phone" placeholder="Enter your Phone Number *"></input>
</div>

</div>
<div className={styles.BookingDetailsContent__first__colu__three}>
<input type="name" placeholder="Enter your State *"></input>
</div>
<div className={styles.BookingDetailsContent__first__bolu}>
<div className={styles.BookingDetailsContent__first__bolu__four}>
<input type="name" placeholder="Enter your Country *"></input>
</div>
<div className={styles.BookingDetailsContent__first__bolu__five}>
<input type="name" placeholder="Enter your Address *"></input>
</div>
<div className={styles.BookingDetailsContent__first__bolu__six}>
<input type="name" placeholder="Enter your name *"></input>
</div>

</div>
    <div  >
   <select>
   
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
    )
}
}
export default BookingDetails