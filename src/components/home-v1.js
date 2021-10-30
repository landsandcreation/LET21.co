import React from 'react';
import Navbar from './global-components/navbar';
import Banner from './section-components/banner';
import Explore from './section-components/explore';
import FeaturedProperties from './section-components/featured-properties';
import Ads from './section-components/ads';
import WhyChooseUs from './section-components/why-choose-us';
import Footer from './global-components/footer';

const Home_V1 = () => {
    return <div>
        <Navbar />
        <Banner />
       
        <Explore />
        <FeaturedProperties />
        <Ads />
        <WhyChooseUs />
        <Footer />
    </div>
}

export default Home_V1

