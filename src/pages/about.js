import React from "react"
import { AppliedLayout } from "../components/layout"

import { PageContainer, Content } from "../components/static"
import { about } from "../assets/data"
import Booking from "../components/home/booking"
import { Link } from "react-router-dom"

import  oil  from "../assets/images/oil.jpg"
import styles from "./about2.module.scss"
import { LocationOn } from "@material-ui/icons";
const About = props => {

  
  const title = "About"
  return (
 
    <AppliedLayout {...props}>
        <div className={styles.Home}>

  <div className={styles.Home__Fold}>
    <div className={styles.Home__Fold__Overlay} />
    <div className={styles.Home__Caption}>
      <h4>House and Vacation Rentals in V.I</h4>
      <p>
        Find 506 houses available in V.I
      </p>
    </div>
<Booking></Booking>
   
  </div>

</div>
<h2 className={styles.heade}>
     Best vacation home deal in Victoria Island.

    </h2>

 
    <div className={styles.PopularTrips}>
  <div className={styles.PopularTrips__TripListWrapper}>
    <ul className={styles.PopularTrips__TripList}>
   
      <li className={styles.PopularTrips__Trip}>
  

      <a href="/personal"><img src={oil} alt="" /></a>
      <div className={styles.PopularTrips__Trip__see}>
      <button>
        <a href="" >-48%</a>
        </button>
       
        <Link to="/about" className={styles.echo}>$342</Link>
        <Link to="/about" className={styles.echo3}>$342</Link>
        <Link to="/about" className={styles.echo2}>per night</Link>
      </div>
      <Link to="/about" className={styles.echo4} >2 bedrooms . 1 Kitchen . Pool</Link><br></br>
      
     
      <LocationOn />
      <Link to="/about" className={styles.echo5} >Ibeju . Lekki . Beach</Link>
      
      <div className={styles.why}>
      <div>
      <Link to="/about" className={styles.echo5} >Details</Link><br></br>
      <Link to="/about" className={styles.echo5} >Rental Advisor</Link>
    
      </div>
      <div>
      <button>
        <a href="">View deal</a>
        </button>
      </div>
      </div>
       
      </li>
      <li className={styles.PopularTrips__Trip}>
  

      <a href="/about"><img src={oil} alt="" /></a>
      <div className={styles.PopularTrips__Trip__see}>
      <button>
        <a href="" >-48%</a>
        </button>
       
        <Link to="/about" className={styles.echo}>$342</Link>
        <Link to="/about" className={styles.echo3}>$342</Link>
        <Link to="/about" className={styles.echo2}>per night</Link>
      </div>
      <Link to="/about" className={styles.echo4} >2 bedrooms . 1 Kitchen . Pool</Link><br></br>
      
     
      <LocationOn />
      <Link to="/about" className={styles.echo5} >Ibeju . Lekki . Beach</Link>
      
      <div className={styles.why}>
      <div>
      <Link to="/about" className={styles.echo5} >Details</Link><br></br>
      <Link to="/about" className={styles.echo5} >Rental Advisor</Link>
    
      </div>
      <div>
      <button>
        <a href="">View deal</a>
        </button>
      </div>
      </div>
       
      </li>
      <li className={styles.PopularTrips__Trip}>
  

      <a href="/about"><img src={oil} alt="" /></a>
      <div className={styles.PopularTrips__Trip__see}>
      <button>
        <a href="" >-48%</a>
        </button>
       
        <Link to="/about" className={styles.echo}>$342</Link>
        <Link to="/about" className={styles.echo3}>$342</Link>
        <Link to="/about" className={styles.echo2}>per night</Link>
      </div>
      <Link to="/about" className={styles.echo4} >2 bedrooms . 1 Kitchen . Pool</Link><br></br>
      
     
      <LocationOn />
      <Link to="/about" className={styles.echo5} >Ibeju . Lekki . Beach</Link>
      
      <div className={styles.why}>
      <div>
      <Link to="/about" className={styles.echo5} >Details</Link><br></br>
      <Link to="/about" className={styles.echo5} >Rental Advisor</Link>
    
      </div>
      <div>
      <button>
        <a href="">View deal</a>
        </button>
      </div>
      </div>
       
      </li>
      
      </ul>
    <ul className={styles.PopularTrips__TripList}>
   
      <li className={styles.PopularTrips__Trip}>
  

      <a href="/about"><img src={oil} alt="" /></a>
      <div className={styles.PopularTrips__Trip__see}>
      <button>
        <a href="" >-48%</a>
        </button>
       
        <Link to="/about" className={styles.echo}>$342</Link>
        <Link to="/about" className={styles.echo3}>$342</Link>
        <Link to="/about" className={styles.echo2}>per night</Link>
      </div>
      <Link to="/about" className={styles.echo4} >2 bedrooms . 1 Kitchen . Pool</Link><br></br>
      
     
      <LocationOn />
      <Link to="/about" className={styles.echo5} >Ibeju . Lekki . Beach</Link>
      
      <div className={styles.why}>
      <div>
      <Link to="/about" className={styles.echo5} >Details</Link><br></br>
      <Link to="/about" className={styles.echo5} >Rental Advisor</Link>
    
      </div>
      <div>
      <button>
        <a href="">View deal</a>
        </button>
      </div>
      </div>
       
      </li>
      <li className={styles.PopularTrips__Trip}>
  

      <a href="/about"><img src={oil} alt="" /></a>
      <div className={styles.PopularTrips__Trip__see}>
      <button>
        <a href="" >-48%</a>
        </button>
       
        <Link to="/about" className={styles.echo}>$342</Link>
        <Link to="/about" className={styles.echo3}>$342</Link>
        <Link to="/about" className={styles.echo2}>per night</Link>
      </div>
      <Link to="/about" className={styles.echo4} >2 bedrooms . 1 Kitchen . Pool</Link><br></br>
      
     
      <LocationOn />
      <Link to="/about" className={styles.echo5} >Ibeju . Lekki . Beach</Link>
      
      <div className={styles.why}>
      <div>
      <Link to="/about" className={styles.echo5} >Details</Link><br></br>
      <Link to="/about" className={styles.echo5} >Rental Advisor</Link>
    
      </div>
      <div>
      <button>
        <a href="">View deal</a>
        </button>
      </div>
      </div>
       
      </li>
      <li className={styles.PopularTrips__Trip}>
  

      <a href="/about"><img src={oil} alt="" /></a>
      <div className={styles.PopularTrips__Trip__see}>
      <button>
        <a href="" >-48%</a>
        </button>
       
        <Link to="/about" className={styles.echo}>$342</Link>
        <Link to="/about" className={styles.echo3}>$342</Link>
        <Link to="/about" className={styles.echo2}>per night</Link>
      </div>
      <Link to="/about" className={styles.echo4} >2 bedrooms . 1 Kitchen . Pool</Link><br></br>
      
     
      <LocationOn />
      <Link to="/about" className={styles.echo5} >Ibeju . Lekki . Beach</Link>
      
      <div className={styles.why}>
      <div>
      <Link to="/about" className={styles.echo5} >Details</Link><br></br>
      <Link to="/about" className={styles.echo5} >Rental Advisor</Link>
    
      </div>
      <div>
      <button>
        <a href="">View deal</a>
        </button>
      </div>
      </div>
       
      </li>
      
      </ul>
      <h2 className={styles.heade}>
    Vacation rentals and apartment with air conditioner

    </h2>
    <ul className={styles.PopularTrips__TripList}>
   
   <li className={styles.PopularTrips__Trip}>


   <a href="/about"><img src={oil} alt="" /></a>
   <div className={styles.PopularTrips__Trip__see}>
   <button>
     <a href="" >-48%</a>
     </button>
    
     <Link to="/about" className={styles.echo}>$342</Link>
     <Link to="/about" className={styles.echo3}>$342</Link>
     <Link to="/about" className={styles.echo2}>per night</Link>
   </div>
   <Link to="/about" className={styles.echo4} >2 bedrooms . 1 Kitchen . Pool</Link><br></br>
   
  
   <LocationOn />
   <Link to="/about" className={styles.echo5} >Ibeju . Lekki . Beach</Link>
   
   <div className={styles.why}>
   <div>
   <Link to="/about" className={styles.echo5} >Details</Link><br></br>
   <Link to="/about" className={styles.echo5} >Rental Advisor</Link>
 
   </div>
   <div>
   <button>
     <a href="">View deal</a>
     </button>
   </div>
   </div>
    
   </li>
   <li className={styles.PopularTrips__Trip}>


   <a href="/about"><img src={oil} alt="" /></a>
   <div className={styles.PopularTrips__Trip__see}>
   <button>
     <a href="" >-48%</a>
     </button>
    
     <Link to="/about" className={styles.echo}>$342</Link>
     <Link to="/about" className={styles.echo3}>$342</Link>
     <Link to="/about" className={styles.echo2}>per night</Link>
   </div>
   <Link to="/about" className={styles.echo4} >2 bedrooms . 1 Kitchen . Pool</Link><br></br>
   
  
   <LocationOn />
   <Link to="/about" className={styles.echo5} >Ibeju . Lekki . Beach</Link>
   
   <div className={styles.why}>
   <div>
   <Link to="/about" className={styles.echo5} >Details</Link><br></br>
   <Link to="/about" className={styles.echo5} >Rental Advisor</Link>
 
   </div>
   <div>
   <button>
     <a href="">View deal</a>
     </button>
   </div>
   </div>
    
   </li>
   <li className={styles.PopularTrips__Trip}>


   <a href="/about"><img src={oil} alt="" /></a>
   <div className={styles.PopularTrips__Trip__see}>
   <button>
     <a href="" >-48%</a>
     </button>
    
     <Link to="/about" className={styles.echo}>$342</Link>
     <Link to="/about" className={styles.echo3}>$342</Link>
     <Link to="/about" className={styles.echo2}>per night</Link>
   </div>
   <Link to="/about" className={styles.echo4} >2 bedrooms . 1 Kitchen . Pool</Link><br></br>
   
  
   <LocationOn />
   <Link to="/about" className={styles.echo5} >Ibeju . Lekki . Beach</Link>
   
   <div className={styles.why}>
   <div>
   <Link to="/about" className={styles.echo5} >Details</Link><br></br>
   <Link to="/about" className={styles.echo5} >Rental Advisor</Link>
 
   </div>
   <div>
   <button>
     <a href="">View deal</a>
     </button>
   </div>
   </div>
    
   </li>
   
   </ul>
      <h2 className={styles.heade}>
    Vacation rentals with wi-fi

    </h2>
    <ul className={styles.PopularTrips__TripList}>
   
   <li className={styles.PopularTrips__Trip}>


   <a href="/about"><img src={oil} alt="" /></a>
   <div className={styles.PopularTrips__Trip__see}>
   <button>
     <a href="" >-48%</a>
     </button>
    
     <Link to="/about" className={styles.echo}>$342</Link>
     <Link to="/about" className={styles.echo3}>$342</Link>
     <Link to="/about" className={styles.echo2}>per night</Link>
   </div>
   <Link to="/about" className={styles.echo4} >2 bedrooms . 1 Kitchen . Pool</Link><br></br>
   
  
   <LocationOn />
   <Link to="/about" className={styles.echo5} >Ibeju . Lekki . Beach</Link>
   
   <div className={styles.why}>
   <div>
   <Link to="/about" className={styles.echo5} >Details</Link><br></br>
   <Link to="/about" className={styles.echo5} >Rental Advisor</Link>
 
   </div>
   <div>
   <button>
     <a href="">View deal</a>
     </button>
   </div>
   </div>
    
   </li>
   <li className={styles.PopularTrips__Trip}>


   <a href="/about"><img src={oil} alt="" /></a>
   <div className={styles.PopularTrips__Trip__see}>
   <button>
     <a href="" >-48%</a>
     </button>
    
     <Link to="/about" className={styles.echo}>$342</Link>
     <Link to="/about" className={styles.echo3}>$342</Link>
     <Link to="/about" className={styles.echo2}>per night</Link>
   </div>
   <Link to="/about" className={styles.echo4} >2 bedrooms . 1 Kitchen . Pool</Link><br></br>
   
  
   <LocationOn />
   <Link to="/about" className={styles.echo5} >Ibeju . Lekki . Beach</Link>
   
   <div className={styles.why}>
   <div>
   <Link to="/about" className={styles.echo5} >Details</Link><br></br>
   <Link to="/about" className={styles.echo5} >Rental Advisor</Link>
 
   </div>
   <div>
   <button>
     <a href="">View deal</a>
     </button>
   </div>
   </div>
    
   </li>
   <li className={styles.PopularTrips__Trip}>


   <a href="/about"><img src={oil} alt="" /></a>
   <div className={styles.PopularTrips__Trip__see}>
   <button>
     <a href="" >-48%</a>
     </button>
    
     <Link to="/about" className={styles.echo}>$342</Link>
     <Link to="/about" className={styles.echo3}>$342</Link>
     <Link to="/about" className={styles.echo2}>per night</Link>
   </div>
   <Link to="/about" className={styles.echo4} >2 bedrooms . 1 Kitchen . Pool</Link><br></br>
   
  
   <LocationOn />
   <Link to="/about" className={styles.echo5} >Ibeju . Lekki . Beach</Link>
   
   <div className={styles.why}>
   <div>
   <Link to="/about" className={styles.echo5} >Details</Link><br></br>
   <Link to="/about" className={styles.echo5} >Rental Advisor</Link>
 
   </div>
   <div>
   <button>
     <a href="">View deal</a>
     </button>
   </div>
   </div>
    
   </li>
   
   </ul>
      <h2 className={styles.heade}>
    Apartments with balconies and swimming pool

    </h2>
    <ul className={styles.PopularTrips__TripList}>
   
   <li className={styles.PopularTrips__Trip}>


   <a href="/about"><img src={oil} alt="" /></a>
   <div className={styles.PopularTrips__Trip__see}>
   <button>
     <a href="" >-48%</a>
     </button>
    
     <Link to="/about" className={styles.echo}>$342</Link>
     <Link to="/about" className={styles.echo3}>$342</Link>
     <Link to="/about" className={styles.echo2}>per night</Link>
   </div>
   <Link to="/about" className={styles.echo4} >2 bedrooms . 1 Kitchen . Pool</Link><br></br>
   
  
   <LocationOn />
   <Link to="/about" className={styles.echo5} >Ibeju . Lekki . Beach</Link>
   
   <div className={styles.why}>
   <div>
   <Link to="/about" className={styles.echo5} >Details</Link><br></br>
   <Link to="/about" className={styles.echo5} >Rental Advisor</Link>
 
   </div>
   <div>
   <button>
     <a href="">View deal</a>
     </button>
   </div>
   </div>
    
   </li>
   <li className={styles.PopularTrips__Trip}>


   <a href="/about"><img src={oil} alt="" /></a>
   <div className={styles.PopularTrips__Trip__see}>
   <button>
     <a href="" >-48%</a>
     </button>
    
     <Link to="/about" className={styles.echo}>$342</Link>
     <Link to="/about" className={styles.echo3}>$342</Link>
     <Link to="/about" className={styles.echo2}>per night</Link>
   </div>
   <Link to="/about" className={styles.echo4} >2 bedrooms . 1 Kitchen . Pool</Link><br></br>
   
  
   <LocationOn />
   <Link to="/about" className={styles.echo5} >Ibeju . Lekki . Beach</Link>
   
   <div className={styles.why}>
   <div>
   <Link to="/about" className={styles.echo5} >Details</Link><br></br>
   <Link to="/about" className={styles.echo5} >Rental Advisor</Link>
 
   </div>
   <div>
   <button>
     <a href="">View deal</a>
     </button>
   </div>
   </div>
    
   </li>
   <li className={styles.PopularTrips__Trip}>


   <a href="/about"><img src={oil} alt="" /></a>
   <div className={styles.PopularTrips__Trip__see}>
   <button>
     <a href="" >-48%</a>
     </button>
    
     <Link to="/about" className={styles.echo}>$342</Link>
     <Link to="/about" className={styles.echo3}>$342</Link>
     <Link to="/about" className={styles.echo2}>per night</Link>
   </div>
   <Link to="/about" className={styles.echo4} >2 bedrooms . 1 Kitchen . Pool</Link><br></br>
   
  
   <LocationOn />
   <Link to="/about" className={styles.echo5} >Ibeju . Lekki . Beach</Link>
   
   <div className={styles.why}>
   <div>
   <Link to="/about" className={styles.echo5} >Details</Link><br></br>
   <Link to="/about" className={styles.echo5} >Rental Advisor</Link>
 
   </div>
   <div>
   <button>
     <a href="">View deal</a>
     </button>
   </div>
   </div>
    
   </li>
   
   </ul>

      </div>
      <h2 className={styles.heade}>
    Accommodation for your vacation in Victoria Island

    </h2>
    <div className={styles.viki}>
      <h3>Victoria Island is a place that has confortable houses and homeVictoria Island is a place that has confortable houses and home
      Victoria Island is a place that has confortable houses and home
      Victoria Island is a place that has confortable houses and homeVictoria Island is a place that has confortable houses and home
      Victoria Island is a place that has confortable houses and homeVictoria Island is a place that has confortable houses and home
      Victoria Island is a place that has confortable houses and homeVictoria Island is a place that has confortable houses and home
      Victoria Island is a place that has confortable houses and homeVictoria Island is a place that has confortable houses and home
      Victoria Island is a place that has confortable houses and homeVictoria Island is a place that has confortable houses and home
      Victoria Island is a place that has confortable houses and homeVictoria Island is a place that has confortable houses and home
      Victoria Island is a place that has confortable houses and homevVictoria Island is a place that has confortable houses and home

      </h3>
      <h2 className={styles.heade}>
    How to get to Victoria Island

    </h2>
    <h3>There are several ways to get to ictorial island by road, air etc
      Victoria Island is a place that has confortable houses and home
      Victoria Island is a place that has confortable houses and homeVictoria Island is a place that has confortable houses and home
      Victoria Island is a place that has confortable houses and homeVictoria Island is a place that has confortable houses and home
      Victoria Island is a place that has confortable houses and homeVictoria Island is a place that has confortable houses and home
      Victoria Island is a place that has confortable houses and homeVictoria Island is a place that has confortable houses and home
      Victoria Island is a place that has confortable houses and homeVictoria Island is a place that has confortable houses and home
      Victoria Island is a place that has confortable houses and homeVictoria Island is a place that has confortable houses and home
      Victoria Island is a place that has confortable houses and homevVictoria Island is a place that has confortable houses and home

      </h3>
      <h2 className={styles.heade}>
    The top best restuarant in Victoria Island

    </h2>
    <h3>There are several ways to get to ictorial island by road, air etc
      Victoria Island is a place that has confortable houses and home
      Victoria Island is a place that has confortable houses and homeVictoria Island is a place that has confortable houses and home
    

      </h3>
      <h2 className={styles.heade}>
    Three beaches near Victoria Island

    </h2>
    <h3>There are several ways to get to ictorial island by road, air etc
      Victoria Island is a place that has confortable houses and home
      Victoria Island is a place that has confortable houses and homeVictoria Island is a place that has confortable houses and home
    

      </h3>
      <h2 className={styles.heade}>
    History and more

    </h2>
    <h3>There are several ways to get to ictorial island by road, air etc
      Victoria Island is a place that has confortable houses and home
      Victoria Island is a place that has confortable houses and homeVictoria Island is a place that has confortable houses and home
    

      </h3>
    </div>
      </div>
    </AppliedLayout>
   
  )
}
About.propTypes = {}
export default About
