import React from "react"
import styled from "styled-components"

import SectionTitle from "./Title"
import SectionSubtitle from "./Subtitle"

const TitleSectionArea = styled.div`
  width: 100%;
  display: block;
  text-align: center;
  margin-bottom: 50px;
  &.-inverse {
    margin-bottom: 20px;
  }
` 

const TitleSection = ({ title, subtitle, className }) => {
  return (
    <TitleSectionArea className={className}>
      <SectionTitle className={className} title={title} />
      <SectionSubtitle className={className} subtitle={subtitle} />
    </TitleSectionArea>
 )
}

export default TitleSection;