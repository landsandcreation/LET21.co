import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Mission from './section-components/mission-two';
import Professional from './section-components/professional';
import SellHome from './section-components/sellhome';
import Process from './section-components/process';
import BuyOrSell from './section-components/buy-or-sell';
import Footer from './global-components/footer';


const Profile = () => {

    const user = JSON.parse(sessionStorage.getItem('user'));
    const picture = user.imageUrl
    const username = user.name

    return <div>
        <Navbar />
        <PageHeader headertitle="Profile" subheader="Profile" />
        
        <img src={picture} alt="profile-pic"/>
        <h4>Name: {username}</h4>

        <Footer />
    </div>
}

export default Profile

