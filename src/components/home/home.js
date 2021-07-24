import React from "react"
// import PropTypes from "prop-types"
import styles from "./home.module.scss"
import Booking, { booking } from "./booking"
import Features from "./features"
import PopularTrips from "./rentals"
import Header from "../header/Header"
import Footer from "../footer/footer"



const Home = props => {
  
  return (
    
    <div className={styles.Home}>
      <Header></Header>
      <div className={styles.Home__Fold}>
        <div className={styles.Home__Fold__Overlay} />
        <div className={styles.Home__Caption}>
          <h4>Lets explore the world</h4>
          <p>
            Book favourite places all over the world and start exploring
          </p>
        </div>
 <Booking></Booking>
       
      </div>
      <Features />
      <PopularTrips />
   <Footer></Footer>
    </div>
  )
}

Home.propTypes = {}

export default Home
