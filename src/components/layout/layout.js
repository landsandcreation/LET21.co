

import React, { Component } from "react"
import { StickyContainer } from "react-sticky"
import Footer from "../footer/footer"
import Header from "../header/Header"





import styles from "./layout.module.scss"

class Layout extends Component {
 


  render() {
    const { children, type } = this.props
    
    return (
      <StickyContainer className={styles.Layout}>
       <Header {...this.props} />
        <main>
          {children}
          
          {type === "applied" && <Footer />}
     
        </main>
      </StickyContainer>
    )
  }
}

export default Layout
