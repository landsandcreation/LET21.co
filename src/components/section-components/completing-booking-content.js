import React, { Component } from 'react';
import Navbar from '../global-components/navbar';
import { Link } from 'react-router-dom';
import styles from "./booking.module.scss";
import Footer_v1 from '../global-components/footer';
class CompletingBookingContent extends Component {

    render() {
    return (
        <div>
            <Navbar />
            <form className={styles.create}>
                <div>
                <h4>Complete your booking</h4>
        <h6>Enter Payment Information</h6><br></br>
                </div>
    <div className={styles.BookingDetailsContent__first__colu}>
<div className={styles.BookingDetailsContent__first__colu__one}>
<input type="name" placeholder="First Name"></input>
</div>
<div className={styles.BookingDetailsContent__first__colu__two}>
<input type="name" placeholder="Last Name"></input>
</div>
</div>
    <div className={styles.BookingDetailsContent__first__colu}>
<div className={styles.BookingDetailsContent__first__colu__one}>
<input type="number" placeholder="Card Number"></input>
</div>
<div className={styles.BookingDetailsContent__first__colu__two}>
<input type="dob" placeholder="Expiration MM/YY"></input>
</div>

</div>
<div className={styles.BookingDetailsContent__first__colu__three}>
<input type="number" placeholder="Security Code"></input>
</div>
<div className={styles.BookingDetailsContent__first__bolu}>
<div className={styles.BookingDetailsContent__first__bolu__four}>
<input type="name" placeholder="City"></input>
</div>
<div className={styles.BookingDetailsContent__first__bolu__five}>
<input type="number" placeholder="Zip Code"></input>
</div>
<div className={styles.BookingDetailsContent__first__bolu__six}>
<input type="name" placeholder="Country"></input>
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
    )
}
}
export default CompletingBookingContent