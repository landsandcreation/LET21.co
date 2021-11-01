import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import LoginSection from './section-components/login';
import Footer from './global-components/footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    return <div>
        <Navbar />
        <ToastContainer />
        <PageHeader headertitle="Login" />
        <LoginSection />
        <Footer />
    </div>
}

export default Login

