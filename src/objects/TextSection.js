import React from "react"
import styled from "styled-components"

import media from "../foundation/breakPoints"

const TextSectionArea = styled.div`
   width: 100%;
`

const Text = styled.p`
   font-family: ${props => props.theme.fonts.family.secondy};
   font-size: ${props => props.theme.fonts.size.mediumSmall};
   font-weight: normal;
   line-height: 1.56;
   color: ${props => props.theme.colors.secondyDark};
   /* text-align: justify; */
   &.-inverse {
      color: ${props => props.theme.colors.secondyClear};
   }

   ${media.lessThan("md")`
      text-align: left;
      font-size: ${props => props.theme.fonts.size.verySmall};
   `}

`

const TextSection = ({ children, className }) => {
   return (
      <TextSectionArea>
         <Text className={className}>{children}</Text>
      </TextSectionArea>
   )
};

export default TextSection;