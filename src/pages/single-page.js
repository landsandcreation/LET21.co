import React from "react"
import Header from "../components/header"
import Dest from "../components/home/destination"

import Picture from "../components/home/picture"
import { AppliedLayout } from "../components/layout"


const SinglePage = props => {
  const title = "SinglePage"
  return (
    <AppliedLayout {...props}>
 
      <Header></Header>
      <Dest></Dest>
    <Picture></Picture>
     
    </AppliedLayout>
  )
}
SinglePage.propTypes = {}
export default SinglePage
