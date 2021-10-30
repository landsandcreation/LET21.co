import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import OwnersLoginSection from './section-components/owners_login';
import Footer from './global-components/footer';

const OwnersLogin = ({ setauth }) => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Owners Login" />
        <OwnersLoginSection />
        <Footer />
    </div>
}

export default OwnersLogin

