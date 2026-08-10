import styled from "styled-components"
import media from "../../foundation/breakPoints"

import CardSimple from "../CardSimple"

const List = styled.ul`
   width: 100%;
   max-width: 960px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin: 0;

   ${media.lessThan("md")`
      flex-wrap: wrap;
      justify-content: space-around;
   `}

   ${media.lessThan("600px")`
      flex-direction: column;
      justify-content: space-around;
   `}
`

const CardMember = styled(CardSimple)`
   position: relative;
   width: 48%;
   max-width: 260px;
   height: 360px;
   margin: 0;

   ${media.lessThan("600px")`
      width: 100%;
      &:not(:last-child) {
         margin-bottom: 40px;
      }
   `}

`

export { 
   List,
   CardMember
}