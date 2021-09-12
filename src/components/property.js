import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import PropertySection from './section-components/property';

import Footer from './global-components/footer';

const Property = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Property" />
        <PropertySection />
        <Footer />
    </div>
}

export default Property

