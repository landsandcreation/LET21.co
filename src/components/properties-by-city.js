import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import PropertySection from './section-components/properties-by-city';

import Footer from './global-components/footer';

const AvailableProperty = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Properties by Cities"/>
        <PropertySection />
        
        <Footer />
    </div>
}

export default AvailableProperty

