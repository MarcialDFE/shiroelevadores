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
   background-color: gray;

   ${media.lessThan("md")`
      flex-wrap: wrap;
      justify-content: space-around;
   `}
`

const CardMember = styled(CardSimple)`
   position: relative;
   width: 50%;
   max-width: 260px;
   height: 360px;
   background-color: aqua;
   margin: 0;

   ${media.lessThan("xs")`
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