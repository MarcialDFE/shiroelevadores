import styled from "styled-components";
import media from "../foundation/breakPoints"

import Section from "../objects/Section"
import Container from "../objects/Container"

// SERVICE HOME
const ServiceSection = styled(Section)`
   padding: 70px 0;
   background-color: transparent;
`

const ServiceContainer = styled(Container)`
   flex-direction: column;
   background-color: ${props => props.theme.colors.secondyClear};
`

// TEAM HOME
const TeamSection = styled(Section)`
   max-width: 1440px;
   background-image: ${props => props.theme.gradients.fourth};
   margin: 0 auto;
`

const TeamContainer = styled(Container)`
   max-width: 960px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 70px 0;
   background-color: transparent;


   ${media.lessThan("1000px")`
      max-width: 600px;
      flex-direction: column;
   `}

   ${media.lessThan("sm")`
      max-width: 90%;
   `}
`

const WrapTeam = styled.div`
   width: 100%;
   max-width: 420px;
   padding: 25px 50px 25px 0;

   ${media.lessThan("1000px")`
      max-width: 600px;
      flex-direction: column;
   `}

   ${media.lessThan("md")`
      max-width: 100%;
      padding: 25px 0;
   `}
`
// PORTFOLIO HOME
const PortfolioSection = styled(Section)`
   padding: 70px 0 30px;
   /* background-color: ${props => props.theme.colors.secondyClear}; */
background-color: green;
`

const PortfolioContainer = styled(Container)`
   /* background-color: ${props => props.theme.colors.secondyClear}; */
background-color: red;
display: block;
`

export { 
   ServiceSection,
   ServiceContainer,
   TeamSection, 
   TeamContainer,
   WrapTeam,
   PortfolioSection,
   PortfolioContainer
}