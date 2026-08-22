import styled from "styled-components";
import media from "../foundation/breakPoints"

import Section from "../objects/Section"
import Container from "../objects/Container"

// BANNER HOME
const BannerSection = styled.section`
   width: 100%;
`
    
const BannerContainer = styled.div`
   position: relative;
   width: 100%;
   max-width: 1440px;
   height: auto;
   margin: 0 auto;

   ${media.lessThan("lg")`
      height: 300px;
   `}
   ${media.lessThan("sm")`
      height: 220px;
   `}
` 

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
   height: auto;
   max-width: 1440px;
   margin: 0 auto;
   padding: 70px 0 90px 0;
   background-color: ${props => props.theme.colors.firstDark};
`

const PortfolioContainer = styled(Container)`
   display: block;
background-color: transparent;
`

export { 
   BannerSection,
   BannerContainer,
   ServiceSection,
   ServiceContainer,
   TeamSection, 
   TeamContainer,
   WrapTeam,
   PortfolioSection,
   PortfolioContainer
}