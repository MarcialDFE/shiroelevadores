import styled from "styled-components"
import media from "../../foundation/breakPoints"
import Img from "gatsby-image"

import Section from "../../objects/Section"

// OVERLAY
const Title = styled.h1`
   /* color: ${props => props.theme.colors.grayClear}; */
color: yellow;
   font-family: ${props => props.theme.fonts.primary};
   font-size: ${props => props.theme.fonts.size.mediumSmall};
   font-weight: 700;
   margin-bottom: 0.5rem;
   text-align: center;

   ${media.greaterThan("sm")`
      font-size: ${props => props.theme.fonts.size.medium};
   `}

   ${media.greaterThan("md")`
      font-size: ${props => props.theme.fonts.size.mediumBig};
   `}

   ${media.greaterThan("lg")`
      font-size: ${props => props.theme.fonts.size.big};
   `}

`

const SubTitle = styled.h2`
   /* color: ${props => props.theme.colors.grayLight}; */
color: aqua;
   font-family: ${props => props.theme.fonts.secondy};
   text-transform: uppercase;
   font-size: ${props => props.theme.fonts.size.verySmall};
   font-weight: normal;
   margin-bottom: 0.3rem;
   text-align: center;
   &-destaque {
      font-weight: bold;    
   }

   ${media.greaterThan("md")`
      font-size: ${props => props.theme.fonts.size.small};
   `}

   ${media.greaterThan("lg")`
      font-size: ${props => props.theme.fonts.size.medium};
   `}
`

const Description = styled.p`
   /* color: ${props => props.theme.colors.grayClear}; */
color: bisque;
   font-family: ${props => props.theme.fonts.secondy};
   font-size: ${props => props.theme.fonts.size.verySmall};
   line-height: 1.8rem;
   text-align: center;

   ${media.greaterThan("md")`
      font-size: ${props => props.theme.fonts.size.small};
      line-height: 2.2rem;
   `}

   ${media.greaterThan("lg")`
      font-size: ${props => props.theme.fonts.size.mediumSmall};
      line-height: 2.2rem;
   `}

`

const ContentOverlay = styled.div`
   width: 100%;
   max-width: 1200px;
   height: 100%;
   margin: 0;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`

const WrapOverlay = styled.div`
   position: absolute;
   width: 100vw;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 0;
   padding: 0 20px;
   z-index: 5;
`

// GLIDE SLIDER
const WrapGlide = styled(Section)`
   display: block;
   height: auto;
   box-sizing: border-box;
   margin: 0;
   padding: 0;
   background-color: transparent;
   & * {
      box-sizing: inherit; 
   }
   &.glide--rtl {
      direction: rtl; 
   }
 
`

const GlideTrack = styled.div`
   overflow: hidden; 
`
 
const GlideSlides = styled.ul`
   position: relative;
   width: 100vw;
   list-style: none;
   backface-visibility: hidden;
   transform-style: preserve-3d;
   touch-action: pan-Y;
   overflow: hidden;
   white-space: nowrap;
   display: flex;
   flex-wrap: nowrap;
   margin: 0;
   padding: 0;
   will-change: transform;
   box-sizing: border-box;
   &.--dragging {
      user-select: none; 
   }
`

const BackgroundImage = styled(Img)`
   /* width: 100vw;
   height: 250px; */
width: auto;
height: auto;
max-height: 400px;

   /* ${media.greaterThan("sm")`
      height: auto;
      min-height: 300px;
   `} */

`

const GlideSlide = styled.li`
   width: 100%;
   height: 100%;
   flex-shrink: 0;
   white-space: normal;
   user-select: none;
   -webkit-touch-callout: none;
   -webkit-tap-highlight-color: transparent;
   margin: 0;
   & a {
      user-select: none;
      -webkit-user-drag: none;
      -moz-user-select: none;
      -ms-user-select: none; 
      margin: 0;
   }
   &.-variant {
      background-color: ${props => props.theme.colors.secondyDark};
      ${BackgroundImage} {
         opacity: 0;
      }
   }

   ${media.greaterThan("sm")`
      ${WrapOverlay} {
         & ${ContentOverlay} {
            width: 80%;
         }
      }
      &.-variant {
         background-color: transparent;
         ${WrapOverlay} {
            justify-content: flex-start;
            ${ContentOverlay} {
               width: 60%;
               align-items: flex-start;
               & ${Title}, ${SubTitle}, ${Description} {
                  text-align: left;
               }
            }
         }
         ${BackgroundImage} {
            opacity: 1;
         }
      }
   `}

   ${media.greaterThan("md")`
      &.-variant {
         ${WrapOverlay} {
            ${ContentOverlay} {
               width: 55%;
            }
         }
      }
   `}

   ${media.greaterThan("lg")`
      &.-variant {
         ${WrapOverlay} {
            & ${ContentOverlay} {
               width: 55%;
            }
         }
      }
   `}

   ${media.greaterThan("xl")`
      &.-variant {
         ${WrapOverlay} {
            justify-content: center;
            & ${ContentOverlay} {
               width: 100%;
               padding: 0 55rem 0 45px;
            }
         }
      }
   `}

`

const GlideBullets = styled.div`
   bottom: 0;
   width: 100%;
   padding-top: 10px;
   display: flex;
   justify-content: center;
   overflow: hidden; 
`

const GlideBullet = styled.button`
   display: none;
   width: 8px;
   height: 8px;
   border: none;
   background-color: ${props => props.theme.colors.secondyLight};
   opacity: 0.5;
   border-radius: 50%;
   margin: 0 5px;
   outline: none;
   padding: 5px;
   cursor: pointer;
   &:hover,
   &.glide__bullet--active {
      border: none;
      opacity: 1;
   }

   ${media.greaterThan("sm")`
      display: flex;
   `}
`

export {
   WrapGlide,
   GlideTrack,
   GlideSlides,
   GlideSlide,
   BackgroundImage,
   WrapOverlay,
   ContentOverlay,
   Title,
   SubTitle,
   Description,
   GlideBullets,
   GlideBullet 
}