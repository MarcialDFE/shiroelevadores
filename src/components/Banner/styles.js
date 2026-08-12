import styled from "styled-components";
import Img from "gatsby-image"

import media from "../../foundation/breakPoints"

const Overlay = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
   background: ${props => props.theme.gradients.third};
   z-index: 5;
   display: flex;
   justify-content: flex-start;
   align-items: center;
`

const Content = styled.div`
   width: 100%;
   max-width: 1200px;
   height: auto;
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: flex-start;

   ${media.lessThan("lg")`
      max-width: 1020px;
      height: 300px;
      margin: 0 auto;
   `}
   ${media.lessThan("1024px")`
      margin: 0 60px;
   `}
   ${media.lessThan("md")`
      align-items: center;
      margin: 0 10px;
   `}
   ${media.lessThan("sm")`
      height: 220px;
   `}

`

const Title = styled.h1`
   width: 50%;
   font-family: ${props => props.theme.fonts.family.primary};
   font-size: ${props => props.theme.fonts.size.big};
   color: ${props => props.theme.colors.secondyClear};
   text-transform: uppercase;
   line-height: 1.3;
   transform: translateX(-2000px);
   animation: 1s ${props => props.theme.animations.fadeInLeft} ease 1s forwards;

   ${media.lessThan("lg")`
      font-size: ${props => props.theme.fonts.size.mediumBig};
      transform: translateX(0);
      animation: none;
   `}
   ${media.lessThan("1024px")`
      width: 70%;
   `}
   ${media.lessThan("md")`
      text-align: center;
      margin-bottom: 5px;
   `}
   ${media.lessThan("800px")`
      width: 100%;
   `}
   ${media.lessThan("sm")`
      font-size: ${props => props.theme.fonts.size.medium};
      width: 100%;
      line-height: 1.2;
   `}
   ${media.lessThan("470px")`
      width: 100%;
      margin-bottom: 5px;
      line-height: 1.1;
   `}
   ${media.lessThan("380px")`
      line-height: 1.3;
   `}

`

const Description = styled.p`
   width: 50%;
   font-family: ${props => props.theme.fonts.family.secondy};
   font-size: ${props => props.theme.fonts.size.medium};
   color: ${props => props.theme.colors.secondyClear};
   line-height: 1.3;
   border-left: 5px solid ${props => props.theme.colors.firstDark};
   padding-left: 15px;
   transform: translateX(3000px);
   animation: 1s ${props => props.theme.animations.fadeInRight} ease 1s forwards;

   ${media.lessThan("lg")`
      width: 60%;
      font-size: ${props => props.theme.fonts.size.mediumSmall};
      line-height: 1.2;
      transform: translateX(0);
      animation: none;
   `}
   ${media.lessThan("1024px")`
      width: 80%;
   `}
   ${media.lessThan("md")`
      width: 90%;
      text-align: center;
      border-left: none;
      padding-left: 0;
   `}
   ${media.lessThan("sm")`
      width: 95%;
      font-size: ${props => props.theme.fonts.size.verySmall};
      line-height: 1.2;
      margin-bottom: 10px;
   `}
   ${media.lessThan("xs")`
      font-size: ${props => props.theme.fonts.size.veryVerySmall};
      width: 100%;
   `}

`

const BkgImage = styled(Img)`
   max-width: 1440px;
   margin: 0 auto;

   ${media.lessThan("lg")`
      height: 100%;
   `}

`
export {
   Overlay,
   Content,
   Title,
   Description,
   BkgImage,
}