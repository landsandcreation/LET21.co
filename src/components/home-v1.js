import React from 'react';
import Navbar from './global-components/navbar';
import Banner from './section-components/banner';
import Explore from './section-components/explore';
import FeaturedProperties from './section-components/featured-properties';
import Ads from './section-components/ads';
import WhyChooseUs from './section-components/why-choose-us';
import Footer from './global-components/footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home_V1 = () => {


    const showtoast =()=> {
        const user = JSON.parse(localStorage.getItem('user'));
        if(user){
            toast.info(`Hi, ${user.givenName}`)
        }
    }
 
 

    return <div onLoad ={showtoast()}>

        <Navbar  />
        
        <Banner />
       
        <Explore />
        <FeaturedProperties />
        <Ads />
        <WhyChooseUs />
        <Footer />
    </div>
}

export default Home_V1

