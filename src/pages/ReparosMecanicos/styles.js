import styled from "styled-components";
import media from "../../foundation/breakPoints"
import { FaArrowRight } from "react-icons/fa"

import Section from "../../objects/Section"
import Container from "../../objects/Container"
import TitleSection from "../../objects/TitleSection"
import TextSection from "../../objects/TextSection"

// BANNER CONTACT
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

// SERVICES LIST SECTION
const ServicesListContainer = styled(Container)`
   max-width: 1440px;
   justify-content: space-between;
   background-color: ${props => props.theme.colors.secondyClear};

   ${media.lessThan("md")`
      flex-direction: column;
      justify-content: center;
      align-items: center;
   `}

`

const Side = styled.div`
   width: 50%;
   height: auto;
   &.-content {
      padding: 0 90px;
   }

   ${media.lessThan("xl")`
      &.-content {
         padding: 0 50px;
      }
   `}
   ${media.lessThan("lg")`
      &.-content {
         padding: 0 25px;
      }
   `}
   ${media.lessThan("md")`
      width: 100%;
      max-width: 720px;
      order: 2;
      &.-content {
         order: 1;
         padding: 70px;
      }
   `}
   ${media.lessThan("sm")`
      &.-content {
         padding: 70px 25px;
      }
   `}
   ${media.lessThan("xs")`
      &.-content {
         padding: 50px 10px;
      }
   `}

`

const ServicesTitleSection = styled(TitleSection)`

   ${media.lessThan("xl")`
      margin-bottom: 0;
   `}

`

const ServicesTextSection = styled(TextSection)`

   ${media.lessThan("xl")`
      margin-top: 15px;
   `}
   ${media.lessThan("lg")`
      font-size: ${props => props.theme.fonts.size.small};
      line-height: 1.2;
   `}
   ${media.lessThan("md")`
      line-height: 1.5;
   `}

`

const ListServices = styled.ul`
   list-style: none;
   margin-left: 30px;
`

const ListIcon = styled(FaArrowRight)`
   margin-right: -15px;
   transform: translateX(-25px);
   color: ${props => props.theme.colors.firstDark};
`

// BEFORE-AFTER SECTION
const BeforeAfterSection = styled(Section)`
   max-width: 1440px;
   background: ${props => props.theme.gradients.primary};
`

const BeforeAfterContainer = styled(Container)`
   max-width: 1200px;
   justify-content: space-between;
   background-color: transparent;
   color: ${props => props.theme.colors.secondyClear};
   padding: 70px 0;

   ${media.lessThan("md")`
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 0 70px;
   `}

`

const SideComparison = styled(Side)`
   display: flex;
   justify-content: center;
   align-items: center;
`

const BeforeAfterTitleSection = styled(ServicesTitleSection)`
   pointer-events: none;
   user-select: none;
`

const BeforeAfterTextSection = styled(ServicesTextSection)`
   pointer-events: none;
   user-select: none;
   color: ${props => props.theme.colors.secondyClear};
`

// PORTFOLIO REPAROS MECÂNICOS
const PortfolioSection = styled(Section)`
   max-width: 1440px;
   background-color: ${props => props.theme.colors.secondyLight};
   padding: 70px 0;
   margin: 0 auto;
`

const PortfolioContainer = styled(Container)`
   display: block;
   max-width: 1200px;
background-color: gray;
`

const GalleryContainer = styled(Container)`
   /* background-color: transparent; */
background-color: pink;
`

export {
   BannerSection,
   BannerContainer,
   ServicesListContainer,
   Side,
   ServicesTitleSection,
   ServicesTextSection,
   ListServices,
   ListIcon,
   BeforeAfterSection,
   BeforeAfterContainer,
   BeforeAfterTitleSection,
   BeforeAfterTextSection,
   SideComparison,
   PortfolioSection,
   PortfolioContainer,
   GalleryContainer
 }