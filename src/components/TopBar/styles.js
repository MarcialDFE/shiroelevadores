import styled from "styled-components";
import media from "../../foundation/breakPoints"

const Section = styled.section`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.secondyLight}; }
`

const Container = styled.div`
   width: 100%;
   height: 40px;
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: transparent; 
   ${media.greaterThan("sm")`
      height: 60px;
   `}
   ${media.greaterThan("md")`
      height: 40px;
      flex-direction: row;
      justify-content: space-between;
      padding: 0 20px;
   `}
   ${media.greaterThan("lg")`
      max-width: 1200px;
   `}
`

const ItemTopbar = styled.div`
   display: flex;
   justify-content: flex-start;
   align-items: center;
   font-family: ${props => props.theme.fonts.family.secondy};
   font-weight: normal;
   font-size: ${props => props.theme.fonts.size.small};
   color: ${props => props.theme.colors.secondyDark};
   background-color: transparent;
   &:first-child {
      display: none;
      justify-content: center;
   }

   ${media.greaterThan("sm")`
      &:first-child {
         display: flex;
      }
   `}
`

export {
   Section,
   Container,
   ItemTopbar
}