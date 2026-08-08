import React from "react"
import styled from "styled-components"

const SubtitleArea = styled.h4`
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fonts.size.mediumSmall};
  font-weight: normal;
  text-transform: uppercase;
  color: ${props => props.theme.colors.secondyDark};
  text-align: center;
  line-height: 1.5;
  margin-bottom: 5px;
  &.-inverse {
    color: ${props => props.theme.colors.secondyClear};
  }
`

const Subtitle = ({ subtitle, className }) => {
  return (
    <SubtitleArea className={className}>{subtitle}</SubtitleArea>
  )
}

export default Subtitle;