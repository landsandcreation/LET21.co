import React from "react"
import { AppliedLayout } from "../components/layout"

import { PageContainer, Content } from "../components/static"

import { Link } from "react-router-dom"

import  oil  from "../assets/images/oil.jpg"
import styles from "./about2.module.scss"

const Triping = props => {

  return (
 
    <AppliedLayout {...props}>
<h2> There is no Trips at the moment</h2>
    </AppliedLayout>
   
  )
}
Triping.propTypes = {}
export default Triping
