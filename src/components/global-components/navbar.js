import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import style from "./style.module.scss";
import { ToastContainer, toast } from "react-toastify";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("user")
      ? localStorage.getItem("user")
      : null;
    if (token) {
      this.setState({ isLoggedIn: true });
    }
  }

  globalLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  globalLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imgattr = "logo";
    let anchor = "#";
    return (
      <div>
        <div className="navbar-area">
          <nav className="navbar navbar-area navbar-expand-lg">
            <div className="container nav-container">
              <div className="responsive-mobile-menu">
                <button
                  className="menu toggle-btn d-block d-lg-none"
                  data-toggle="collapse"
                  data-target="#realdeal_main_menu"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-left" />
                  <span className="icon-right" />
                </button>
              </div>
              <div>
                <Link to="/">
                  <img
                    src={publicUrl + "../assets/img/logow.png"}
                    alt="logo"
                    style={{
                      ...style,
                      width: "120px",
                      marginLeft: "20px",
                      height: "40px",
                    }}
                  />
                </Link>
              </div>
              <div className="nav-right-part nav-right-part-mobile"></div>

              <div className="collapse navbar-collapse" id="realdeal_main_menu">
                <ul className="navbar-nav menu-open readeal-top">
                  <li>
                    <Link to="/">Home</Link>
                  </li>

                  {this.state.isLoggedIn ? null : (
                    <li>
                      <Link to="/registration">Sign Up</Link>
                    </li>
                  )}

                  {this.state.isLoggedIn ? null : (
                    <li className="menu-item-has-children">
                      <a href="#">Login</a>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/login">Login as travellers</Link>
                        </li>
                        <li>
                          <Link to="/owners_login">Login as owner</Link>
                        </li>
                      </ul>
                    </li>
                  )}

                  {this.state.isLoggedIn ? (
                    <li>
                      <Link to="/">Add Property</Link>
                    </li>
                  ) : null}
                  {this.state.isLoggedIn ? (
                    <li>
                      <Link to="/profile">Profile</Link>
                    </li>
                  ) : null}

                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>

                  {this.state.isLoggedIn ? (
                    <li>
                      <Link to="/">Logout</Link>
                    </li>
                  ) : null}
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div>
          <ToastContainer />
        </div>
      </div>
    );
  }
}

export default Navbar;
