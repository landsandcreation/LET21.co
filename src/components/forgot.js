import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import ForgotPasswordSection from './section-components/forgot';
import Footer from './global-components/footer';

const ForgotPassword = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Forgot password" />
        <ForgotPasswordSection />
        <Footer />
    </div>
}

export default ForgotPassword

