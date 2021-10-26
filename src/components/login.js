import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import LoginSection from './section-components/login';
import Footer from './global-components/footer';

const Login = ({ setauth }) => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Login" />
        <LoginSection />
        <Footer />
    </div>
}

export default Login

