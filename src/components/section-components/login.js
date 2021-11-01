import React from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
export const Login = () => {
  const clientId = "378146364389-3vtjgr85vva2bbo41h3i9ds83j09okhp.apps.googleusercontent.com";

  const onSuccess = (res) => {
    console.log("[Login success] currentUser:", res.profileObj);
   

    const user = res.profileObj

    sessionStorage.setItem('user', JSON.stringify(user))
  };

  const onFailure = (res) => {
    console.log("[Login failed] res:", res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={true}
        uxMode='redirect'
        redirectUri="http://localhost:3000/"
      />

    <br/>
    </div>
  );
};
export default Login;

      