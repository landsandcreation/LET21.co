import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import VerifySection from './section-components/verify';
import Footer from './global-components/footer';

const Verify = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Verification" />
        <VerifySection />
        <Footer />
    </div>
}

export default Verify

