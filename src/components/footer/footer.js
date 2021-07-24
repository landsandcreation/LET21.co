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
            <strong>LEGAL</strong>
          </li>
          <li>
            <Link to="/terms"> Terms </Link>
          </li>
          <li>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <ul className={styles.Footer__LinksList}>
          <li>
            <strong>LEGAL</strong>
          </li>
          <li>
            <Link to="/terms"> Terms </Link>
          </li>
          <li>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <ul className={styles.Footer__LinksList}>
          <li>
            <strong>COMPANY</strong>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/careers">Careers</Link>
          </li>
          <li>
            <Link to="/careers">Careers</Link>
          </li>
          <li>
            <Link to="/careers">Careers</Link>
          </li>
          <li>
            <Link to="/">Help Cen</Link>
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





