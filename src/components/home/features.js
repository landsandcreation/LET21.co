import React from "react"
import styles from "./home.module.scss"

import {AttachMoney, House, LocationOn} from "@material-ui/icons";

const Features = () => {
  return (
    <div className={styles.Features}>  
      <h1 className={styles.Features__Heading}>
        Why choose LET21?
      </h1>
      <div className={styles.Features__List}>
        <div className={styles.Features__Item}>
          <div className={styles.Features__Item__Icon}>
            <House />
          </div>
          <h4 className={styles.Features__Item__Heading}>Beautiful places to Stay</h4>
          <p className={styles.Features__Item__Text}>
            We make it sure from your booking to arrival is a seamless
            experience
          </p>
        </div>
        <div className={styles.Features__Item}>
          <div className={styles.Features__Item__Icon}>
            <AttachMoney />
          </div>
          <h4 className={styles.Features__Item__Heading}>
          Diverse Destination
          </h4>
          <p className={styles.Features__Item__Text}>
            Our competitive prices for a quality travel experience makes us
            stand out
          </p>
        </div>
        <div className={styles.Features__Item}>
          <div className={styles.Features__Item__Icon}>
            <LocationOn />
          </div>
          <h4 className={styles.Features__Item__Heading}>
        We have the best prices
          </h4>
          <p className={styles.Features__Item__Text}>
          Our competitive prices for a quality travel experience makes us
            stand out
          </p>
        </div>
      </div>
    </div>
  )
}

export default Features
