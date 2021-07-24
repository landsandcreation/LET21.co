import React from "react"
// import PropTypes from "prop-types"
import styles from "./about2.module.scss"
import love2 from "../assets/images/o5.jpg"
import love from "../assets/images/o3.jpg"
import love3 from "../assets/images/o1.jpg"
import curry from "../assets/images/t6.jpg"
import curry2 from "../assets/images/u7.jpg"
import curry3 from "../assets/images/w1.jpg"
import { AppliedLayout } from "../components/layout"
import { PersonalVideoRounded } from "@material-ui/icons"
import moment from "moment"

import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css"; 
import Slider from "react-slick";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "orange" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "orange" }}
      onClick={onClick}
    />
  );
}

const Personal = props => {
    var settings = {  
          dots: true,  
          infinite: true,  
          speed: 500,  
         
          slidesToShow: 8,  
          slidesToScroll: 1,
         
       prevArrow: <SamplePrevArrow />

       
          }; 
  return (
    <AppliedLayout {...props}>
    <div className={styles.mini}>
    <img src={love2}/>
 <Slider {...settings} className={styles.all}>

  <div>
 <img src={curry3} className={styles.tomo}></img>
</div>
  <div>
 <img src={curry3} className={styles.tomo}></img>
</div>
  <div>
 <img src={curry3} className={styles.tomo}></img>
</div>
  <div>
 <img src={curry3} className={styles.tomo}></img>
</div>
  <div>
 <img src={curry3} className={styles.tomo}></img>
</div>
  <div>
 <img src={curry3} className={styles.tomo}></img>
</div>
  <div>
 <img src={curry3} className={styles.tomo}></img>
</div>
  <div>
 <img src={curry3} className={styles.tomo}></img>
</div>
  <div>
 <img src={curry3} className={styles.tomo}></img>
</div>
  </Slider>

    <div className={styles.Personal}>
      <div className={styles.Personal__first}>
        
  
      
        <div className={styles.Personal__first__over}>
      <div className={styles.Personal__first__over__one}>
      
    </div>
    </div>
      <h2>Ibeju Lekki Beach front</h2>
        <div className={styles.Personal__first__over}>
      <div className={styles.Personal__first__over__one}>
       <h4>AMMENITIES</h4>
      </div>
      <div className={styles.Personal__first__over__two}>
      <div className={styles.Personal__first__over__two__app} >
          <h6>Swimming pool</h6>
      </div>
      <div className={styles.Personal__first__over__two__app}>
      <h6>Television and Internet</h6>
      </div>
      <div className={styles.Personal__first__over__two__app}>
      <h6>Kitchen and Washer</h6>
      </div>
      </div>
    </div>
        <div className={styles.Personal__first__over}>
      <div className={styles.Personal__first__over__one}>
       <h4>ROOM INFORMATION</h4>
      </div>
      <div className={styles.Personal__first__over__two}>
      <div className={styles.Personal__first__over__two__app} >
          <h6>Bedroom No.1<br></br>2 double beds</h6>
      </div>
      <div className={styles.Personal__first__over__two__app}>
      <h6>Bedroom No.2<br />1 king sized beds</h6>
      </div>
      <div className={styles.Personal__first__over__two__app}>
      <h6>Additional Room<br />4 Bathroom</h6>
      </div>
      </div>
    </div>
        <div className={styles.Personal__first__over}>
      <div className={styles.Personal__first__over__one}>
       <h4>SURROUNDING AREA</h4>
      </div>
      <div className={styles.Personal__first__over__two}>
      <div className={styles.Personal__first__over__two__app} >
          <h6>50 yard to water</h6>
      </div>
     
      </div>
    </div>
        <div className={styles.Personal__first__over}>
      <div className={styles.Personal__first__over__one}>
       <h4>HOUSE RULES</h4>
      </div>
      <div className={styles.Personal__first__over__two}>
      <div className={styles.Personal__first__over__two__app} >
          <h6>No Smoking</h6>
      </div>
     
      <div className={styles.Personal__first__over__two__app} >
          <h6>No pet or animal</h6>
      </div>
     
      </div>
    </div>
        <div className={styles.Personal__first__over}>
      <div className={styles.Personal__first__over__one}>
       <h4>CHECK-IN <br />CHECK-OUT</h4>
      </div>
      <div className={styles.Personal__first__over__two}>
      <div className={styles.Personal__first__over__two__app} >
          <h6>10pm - 5am</h6>
      </div>
     
      </div>
    </div>
        <div className={styles.Personal__first__over}>
      <div className={styles.Personal__first__over__one}>
       <h4>LOCATION</h4>
      </div>
      <div className={styles.Personal__first__over__two}>
      
     
      </div>
    </div>
    <div className={styles.Personal__button}>
<button><a href="/booking-details-content">Start Booking</a></button>
    </div>
      </div>
      <div className={styles.Personal__second}>
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
            <p>N15,500.00</p>
          </div>
        </div>
      </div>
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
         <p>  N5000 x 2 nights</p>
            <p>N10,078.00 </p>
            
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
            <p>N15,500.00</p>
          </div>
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
Personal.propTypes = {}
export default Personal
