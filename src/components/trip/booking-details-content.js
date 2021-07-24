import React from "react"
// import PropTypes from "prop-types"
import styles from "./trip.module.scss"
import love from "../../assets/images/o5.jpg"
import { AppliedLayout } from "../../components/layout"
const BookingDetailsContent = props => {
  return (
    <AppliedLayout {...props}>
    <div className={styles.mini}>
    <div className={styles.BookingDetailsContent}>
      <div className={styles.BookingDetailsContent__first}>
        <h2>Start your booking</h2>
        <h5>Please enter your Contact Information details</h5>
    <form>
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
   <option>Male</option>
   <option>Female</option>
          </select> 
          
          </div>
<div className={styles.BookingDetailsContent__butt}>
<button>
  <a href="/completing-booking-content">Agree and Continue</a>
</button>
</div> 

    </form>
     
    
      </div>
      <div className={styles.BookingDetailsContent__second}>
      <div className={styles.BookSidebar}>
      <div className={styles.BookSidebar__Card}>
        <div className={styles.BookSidebar__TripDetails}>
          <h2>Ibeju Lekki Apartment with pool</h2>
         
          <p>
   
          </p>
        </div>
      
      </div>
      <div className={styles.BookSidebar__Card}>
        <div className={styles.BookSidebar__Cost}>
          <div>
            <p>N5000 x 2 nights</p>
            <p>N10,078.00</p>
          </div>
          <div>
            <p>Service Fee</p>
            <p>N450.00</p>
          </div>
        </div>
        <div className={styles.BookSidebar__Cost}>
          <div>
            <p>
              Total
              <br />
              <span>(tax included)</span>
            </p>
            <p>N15,500.00 </p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  </div>
    </AppliedLayout>
  )
}
BookingDetailsContent.propTypes = {}
export default BookingDetailsContent
