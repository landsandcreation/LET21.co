import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import ResetSection from './section-components/reset';
import Footer from './global-components/footer';

const Reset = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Reset Password" />
        <ResetSection />
        <Footer />
    </div>
}

export default Reset

