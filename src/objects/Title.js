import React from "react"
import styled from "styled-components"

const TitleArea = styled.h2`
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fonts.size.big};
  font-weight: bold;
  color: ${props => props.theme.colors.firstDark};
  text-align: center;
  margin-bottom: 5px;
  &.-inverse {
      color: ${props => props.theme.colors.secondyClear};
  }
`

const Title = ({ title, className }) => {
  return (
    <TitleArea className={className}>{title}</TitleArea>
  )
}

export default Title;