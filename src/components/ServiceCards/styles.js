import styled from "styled-components"
import media from "../../foundation/breakPoints"

import CardFull from "../CardFull"

const List = styled.ul`
   width: 100%;
   max-width: 960px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin: 0;

   ${media.lessThan("md")`
      flex-wrap: wrap;
      justify-content: center;
   `}

`

const CardService = styled(CardFull)`
   position: relative;
   width: 33.33%;
   max-width: 290px;
   height: 100%;

   ${media.lessThan("md")`
      width: 50%;
      margin: 0 10px;
      &:not(:last-child) {
         margin-bottom: 20px;
      }
   `}
   ${media.lessThan("sm")`
      width: 100%;
      margin: 0 auto;
   `}

`

export { 
   List,
   CardService
}