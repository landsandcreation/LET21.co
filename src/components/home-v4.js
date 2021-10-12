import React from 'react';
import Navbar from './global-components/navbar';
import Bannerv4 from './section-components/banner-v4';

import About from './section-components/aboutv2';
import RoomSpacing from './section-components/room-spacing';
import CalltoAction from './section-components/calltoaction';
import Footer from './global-components/footer-v2';

const Home_V1 = () => {
    return <div>
        <Navbar />
        <Bannerv4 />
       
        <About />
        <RoomSpacing />
        <CalltoAction />
        <Footer />
    </div>
}

export default Home_V1

