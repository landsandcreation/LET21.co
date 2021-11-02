import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import Footer from "./global-components/footer";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const picture = user.imageUrl;
  const username = user.name;

  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Profile" subheader="Profile" />

      <img src={picture} alt="profile-pic" />
      <h4>Name: {username}</h4>

      <Footer />
    </div>
  );
};

export default Profile;
