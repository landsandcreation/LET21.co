import React from 'react';
import Navbar from './global-components/navbar';
import Bannerv2 from './section-components/banner-v2';
import Explore from './section-components/explore';
import FeaturedProperties from './section-components/featured-properties';
import Ads from './section-components/ads';
import PropertiesByCities from './section-components/properties-by-cities';
import WhyChooseUs from './section-components/why-choose-us';
import Footer from './global-components/footer';

const Home_V1 = () => {
    return <div>
        <Navbar />
        <Bannerv2 />
        <Explore />
        <FeaturedProperties />
        <Ads />
        <PropertiesByCities />
        <WhyChooseUs />
        <Footer />
    </div>
}

export default Home_V1

