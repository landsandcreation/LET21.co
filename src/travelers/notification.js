import React from "react"
import { AppliedLayout } from "../components/layout"

import { PageContainer, Content } from "../components/static"

import { Link } from "react-router-dom"



const Notification = props => {

  return (
 
    <AppliedLayout {...props}>
<h2> There is no notification at the moment</h2>
    </AppliedLayout>
   
  )
}
Notification.propTypes = {}
export default Notification
