import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from "./style.module.scss"

class Navbar extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'logo'
        let anchor = '#'
        return (
            <div>
                <div className="navbar-area">
                <nav className="navbar navbar-area navbar-expand-lg">
                  <div className="container nav-container">
                    <div className="responsive-mobile-menu">
                      <button className="menu toggle-btn d-block d-lg-none" data-toggle="collapse" data-target="#realdeal_main_menu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="icon-left" />
                        <span className="icon-right" />
                      </button>
                    </div>
                    <div>
                      <Link  to="/"><img src={publicUrl+"../assets/img/logow.png"} alt="logo"  style={{ ...style, width: "120px", marginLeft: "20px", height: "40px"}}/></Link>
                    </div>
                    <div className="nav-right-part nav-right-part-mobile">
                   
                    </div>
                   
                    <div className="collapse navbar-collapse" id="realdeal_main_menu">
                      <ul className="navbar-nav menu-open readeal-top">
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/registration">Sign Up</Link></li>
                     
                      <li className="menu-item-has-children">
                          <a href="#">Login</a>
                          <ul className="sub-menu">
                         
                            <li><Link to="/login">Login as travellers</Link></li>
                            <li><Link to="/registration">Login as owner</Link></li>
                          </ul>
                        </li>
                     
                      <li><Link to="/registration">List your property</Link></li>

                  
                      
                        <li><Link to="/contact">Contact Us</Link></li>
                      </ul>
                    </div>
                  
                    <div className="nav-right-part nav-right-part-desktop readeal-top">
                      <Link className="btn btn-yellow" to="/add-property">OWNERS DASHBOARD<span className="right"><i className="la la-plus" /></span></Link>
                      
                    </div>
                  </div>
                </nav>
              </div>
            </div>
        )
    }
}


export default Navbar