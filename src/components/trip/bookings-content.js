import React from "react"
// import PropTypes from "prop-types"
import styles from "./trip.module.scss"
import love from "../../assets/images/o5.jpg"
import { AppliedLayout } from "../../components/layout"
const BookingsContent = props => {
  return (
    <AppliedLayout {...props}>
    <div className={styles.BookingDetailsContent}>
      <div className={styles.BookingDetailsContent__first}>
        
        <div className={styles.sep}>
        <h2>Start your booking</h2>
        <h5>Choose a payment method</h5>
      
        </div>
       






      </div>
      <div className={styles.BookingDetailsContent__second}>
    <h2>PROPERTY ID: ER4J67F2</h2>
    <div className={styles.BookingDetailsContent__second__kiwi}>
      <div className={styles.BookingDetailsContent__second__kiwi__one}>
        Ibeku lekki beaachmark<br></br>4bedroom flat<br></br>1 guest<br></br>14, victoria island
      </div>
      <div className={styles.BookingDetailsContent__second__kiwi__two}>
        <img src={love}></img>
      </div>
    </div>
    <div className={styles.BookingDetailsContent__second__kid}>
      <h5>
        Sat 5/21 - Tue 11/21 (7 nights)<br></br>1 guest (1 adult 0 children)
      </h5>
     
    </div>
    <div  className={styles.BookingDetailsContent__second__kiwi2}>
    <div  className={styles.BookingDetailsContent__second__kiwi2__one}>
      <h3>Total<br></br>Including taxes and fees</h3> 
    </div>
    <div  className={styles.BookingDetailsContent__second__kiwi2__two}>
      <h3>$730</h3>
    </div>
    </div>
      </div>
    </div>
  
    </AppliedLayout>
  )
}
BookingsContent.propTypes = {}
export default BookingsContent
