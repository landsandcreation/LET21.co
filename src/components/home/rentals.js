import React from "react"
import styles from "./home.module.scss"
import { Link } from "react-router-dom"
import { useDispatch, useSelector, shallowEqual } from "react-redux"
import  oil  from "../../assets/images/live.PNG"

import  live1  from "../../assets/images/w1.jfif"
import  live2  from "../../assets/images/live3.jfif"
import  live3  from "../../assets/images/live4.jfif"
import  life4  from "../../assets/images/life6.jfif"
import  live5  from "../../assets/images/live7.jfif"
import  live6  from "../../assets/images/b3.jfif"
import  live7  from "../../assets/images/i8.jpg"
import  live8  from "../../assets/images/o1.jpg"
import  live9  from "../../assets/images/o2.jfif"
import  live10  from "../../assets/images/u7.jpg"
import  live11 from "../../assets/images/t6.jpg"
import  live12 from "../../assets/images/t5.jpg"
import  live13  from "../../assets/images/w1.jfif"
import  live14  from "../../assets/images/w22.jfif"
import  live15 from "../../assets/images/w33.jfif"
import  live16 from "../../assets/images/w34.jfif"
import  live17  from "../../assets/images/r3.jpg"
import  live18  from "../../assets/images/s2.jfif"
import  live19 from "../../assets/images/o9.jpg"
import  live20 from "../../assets/images/l1.jpg"
import  live21 from "../../assets/images/l2.jpg"
import  live22 from "../../assets/images/l3.jpg"
import  live23 from "../../assets/images/l4.jfif"
import  live24 from "../../assets/images/l5.jpg"
import  live25 from "../../assets/images/l1.jpg"


const PopularTrips = () => {

  return (
    <div className={styles.PopularTrips}>
  
      <h1 className={styles.PopularTrips__Heading}>
        Find the best vacation rentals in Lagos
      </h1>
      <div className={styles.PopularTrips__TripListWrapper}>
        <ul className={styles.PopularTrips__TripList}>
          <li className={styles.PopularTrips__Trip}>
          <a href="/about"><img src={live22} alt="" /></a>
          <Link to="/about">Ibeju Lekki Beach</Link>

           
          </li>
          <li className={styles.PopularTrips__Trip}>
          <a href=""><img src={live20} alt="" /></a>
          <Link to="/#">Ibeju Lekki Beach</Link>
           
          </li>
          <li className={styles.PopularTrips__Trip}>
          <a href=""><img src={live21} alt="" /></a>
          <Link to="/#">Ibeju Lekki Beach</Link>

           
          </li>
       
        </ul>
        <ul className={styles.PopularTrips__TripList}>
          <li className={styles.PopularTrips__Trip}>
          <a href=""><img src={live22} alt="" /></a>
          <Link to="/#">Ibeju Lekki Beach</Link>
          </li>
          <li className={styles.PopularTrips__Trip}>
          <a href=""><img src={live23} alt="" /></a>
          <Link to="/#">Ibeju Lekki Beach</Link>
          </li>
          <li className={styles.PopularTrips__Trip}>
          <a href=""><img src={live24} alt="" /></a>
          <Link to="/#">Ibeju Lekki Beach</Link>
          </li>
       
        </ul>
 
      </div>
      <div>
        <h3 className={styles.PopularTrips__Heading}>Explore nearby</h3>
      </div>
      <div className={styles.PopularTrips__TripListWrapper2}>
        <ul className={styles.PopularTrips__TripList2}>
          <li className={styles.PopularTrips__Trip2}>
          <a href=""><img src={live6} alt="" /></a>
          <Link to="/#">Ibeju Lekki Beach</Link>

           
          </li>
          <li className={styles.PopularTrips__Trip2}>
          <a href=""><img src={live7} alt="" /></a>
          <Link to="/#">Ibeju Lekki Beach</Link>
           
          </li>
          <li className={styles.PopularTrips__Trip2}>
          <a href=""><img src={live8} alt="" /></a>
          <Link to="/#">Ibeju Lekki Beach</Link>

           
          </li>
          <li className={styles.PopularTrips__Trip2}>
          <a href=""><img src={live10} alt="" /></a>
          <Link to="/#">Ibeju Lekki Beach</Link>

           
          </li>
       
        </ul>
    
        <ul className={styles.PopularTrips__TripList2}>
          <li className={styles.PopularTrips__Trip2}>
          <a href=""><img src={live11} alt="" /></a>
          <Link to="/#">Ibeju Lekki Beach</Link>
          </li>
          <li className={styles.PopularTrips__Trip2}>
          <a href=""><img src={live12} alt="" /></a>
          <Link to="/#">Ibeju Lekki Beach</Link>
          </li>
          <li className={styles.PopularTrips__Trip2}>
          <a href=""><img src={live13} alt="" /></a>
          <Link to="/#">Ibeju Lekki Beach</Link>
          </li>
          <li className={styles.PopularTrips__Trip2}>
          <a href=""><img src={live14} alt="" /></a>
          <Link to="/#">Ibeju Lekki Beach</Link>
          </li>
       
        </ul>
      </div>
      <div className={styles.PopularTrips3}>
    
      <h1 className={styles.PopularTrips3__Heading}>
        Other beautiful places to visit.
      </h1>
      <div className={styles.PopularTrips3__TripListWrapper}>
        <ul className={styles.PopularTrips3__TripList}>
          <li className={styles.PopularTrips3__TripList__Trip}>
            <Link to="/#">Victoria Island</Link>
          </li>
           <li className={styles.PopularTrips3__TripList__Trip}>
            <Link to="/#">Victoria Island</Link>
          </li>
           <li className={styles.PopularTrips3__TripList__Trip}>
            <Link to="/#">Victoria Island</Link>
          </li>

          <li className={styles.PopularTrips3__TripList__Trip}>
            <Link to="/#">Victoria Island</Link>
          </li>
          <li className={styles.PopularTrips3__TripList__Trip}>
            <Link to="/#">Victoria Island</Link>
          </li>
         <li className={styles.PopularTrips3__TripList__Trip}>
            <Link to="/#">Victoria Island</Link>
          </li>

          <li className={styles.PopularTrips3__TripList__Trip}>
            <Link to="/#">Victoria Island</Link>
          </li>
         <li className={styles.PopularTrips3__TripList__Trip}>
            <Link to="/#">Victoria Island</Link>
          </li>
        <li className={styles.PopularTrips3__TripList__Trip}>
            <Link to="/#">Victoria Island</Link>
          </li>

         <li className={styles.PopularTrips3__TripList__Trip}>
            <Link to="/#">Victoria Island</Link>
          </li>
          <li className={styles.PopularTrips3__TripList__Trip}>
            <Link to="/#">Victoria Island</Link>
          </li>
          <li className={styles.PopularTrips3__TripList__Trip}>
            <Link to="/#">Victoria Island</Link>
          </li>
          <li className={styles.PopularTrips3__TripList__Trip}>
            <Link to="/#">Victoria Island</Link>
          </li>
        <li className={styles.PopularTrips3__TripList__Trip}>
            <Link to="/#">Victoria Island</Link>
          </li>
         <li className={styles.PopularTrips3__TripList__Trip}>
            <Link to="/#">Victoria Island</Link>
          </li>
         <li className={styles.PopularTrips3__TripList__Trip}>
            <Link to="/#">Eko cms</Link>
          </li>
         <li className={styles.PopularTrips3__TripList__Trip}>
            <Link to="/#">Surulelre</Link>
          </li>
          <li className={styles.PopularTrips3__TripList__Trip}>
            <Link to="/#">Lekki Phase 1</Link>
          </li>
          <li className={styles.PopularTrips3__TripList__Trip}>
            <Link to="/#">Ibeju Lekki</Link>
          </li>
         <li className={styles.PopularTrips3__TripList__Trip}>
            <Link to="/#">Banana Island</Link>
          </li>
        </ul>
      </div>
    </div>
   </div>



  )
}

export default PopularTrips
