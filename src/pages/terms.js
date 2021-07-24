import React from "react"
import { AppliedLayout } from "../components/layout"

import { PageContainer, Content } from "../components/static"
import { terms } from "../assets/data"

const Terms = props => {
  const title = "Terms & Conditions"
  return (
    <AppliedLayout {...props}>
      
      <PageContainer
        title={title}
        header="These terms are designed to protect us our mutual interests as we serve you."
        text=""
      >
        <Content data={terms} />
      </PageContainer>
    </AppliedLayout>
  )
}
Terms.propTypes = {}
export default Terms
