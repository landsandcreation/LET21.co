import React from "react";
import styles from "./footer.module.scss";
import { Facebook, Twitter } from "@material-ui/icons";
import{ Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className={styles.Footer}>
     
      <div className={styles.Footer__UsefullLinks}>
        <ul className={styles.Footer__LinksList}>
          <li >
            <strong>21LET</strong>
          </li>
          <li>
            <Link to="/terms"> About Us</Link>
          </li>
          <li>
            <Link to="/privacy-policy">Careers</Link>
          </li>
          <li>
            <Link to="/contact">App</Link>
          </li>
          <li>
            <Link to="/contact">Insights</Link>
          </li>
          <li>
            <Link to="/contact">Press</Link>
          </li>
        </ul>
        <ul className={styles.Footer__LinksList}>
          <li>
            <strong>CONTACT</strong>
          </li>
          <li>
            <Link to="/terms"> Help Center </Link>
          </li>
          <li>
            <Link to="/privacy-policy">Contact</Link>
          </li>
          <li>
            <Link to="/contact">Become a partner</Link>
          </li>
        
        </ul>
        <ul className={styles.Footer__LinksList}>
          <li>
            <strong>PRIVACY</strong>
          </li>
          <li>
            <Link to="/about">Terms</Link>
          </li>
          <li>
            <Link to="/careers">Privacy</Link>
          </li>
          <li>
            <Link to="/careers">Terms</Link>
          </li>
      
        </ul>
        <ul className={styles.Footer__LinksList}>
          <li>
            <strong>SOCIAL</strong>
          </li>
          <li>
            <Facebook />
      <Twitter />
          </li>
        
        </ul>
      </div>
    </footer>
  )
}

export default Footer





