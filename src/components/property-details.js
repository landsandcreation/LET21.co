import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import PropertyDetailsSection from './section-components/property-details';

import Footer from './global-components/footer';

const PropertyDetails = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Property Details" />
        <PropertyDetailsSection />
        <Footer />
    </div>
}

export default PropertyDetails

