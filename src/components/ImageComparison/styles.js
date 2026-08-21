import styled from "styled-components"
import { FaArrowsAltH } from "react-icons/fa";

import media from "../../foundation/breakPoints"

const WrapComparison = styled.div`
   position: relative;
   width: ${props => props.imgBeforeWidth}px;
   height: ${props => props.heightComponent}px;
   overflow: hidden;
   margin: 0 auto;
`

const ImageBefore = styled.div`
   width: ${props => props.imgBeforeWidth}px;
   height: ${props => props.heightComponent}px;
   position: absolute;
   top: 0;
   left: 0;
   overflow: hidden;
   pointer-events: none;
   user-select: none;
   &:before{
      content: "${props => props.labelBefore}";
      position: absolute;
      color: ${props => props.theme.colors.secondyDark};
      font-size: ${props => props.theme.fonts.size.verySmall};
      top: 10px;
      left: 10px;
      text-transform: uppercase;
      padding: 5px 10px;
      border-radius: 3px;
      background-color: rgba(255,255,255,0.9);
      z-index: 1;
   }

   ${media.lessThan("lg")`
      width: ${props => props.imgBeforeWidth * 0.5}px;
      height: ${props => props.heightComponent * 0.5}px;
   `}
   ${media.lessThan("md")`
      width: ${props => props.imgBeforeWidth}px;
      height: ${props => props.heightComponent}px;
   `}
   ${media.lessThan("sm")`
      width: ${props => props.imgBeforeWidth * 0.5}px;
      height: ${props => props.heightComponent * 0.5}px;
   `}

`

const ImageAfter = styled.div`
   width: ${props => props.widthComponent}px;
   height: ${props => props.heightComponent}px;
   pointer-events: none;
   overflow: hidden;
   pointer-events: none;
   user-select: none;
   &:after {
      content: "${props => props.labelAfter}";
      position: absolute;
      color: ${props => props.theme.colors.secondyDark};
      font-size: ${props => props.theme.fonts.size.verySmall};
      top: 10px;
      right: 10px;
      text-transform: uppercase;
      padding: 5px 10px;
      border-radius: 3px;
      background-color: rgba(255,255,255,0.9);
   }

   ${media.lessThan("lg")`
      width: ${props => props.widthComponent * 0.5}px;
      height: ${props => props.heightComponent * 0.5}px;
   `}
   ${media.lessThan("md")`
      width: ${props => props.widthComponent}px;
      height: ${props => props.heightComponent}px;

   `}
   ${media.lessThan("sm")`
      width: ${props => props.widthComponent * 0.5}px;
      height: ${props => props.heightComponent * 0.5}px;
   `}

`

const Scroller = styled.div`
   width: 50px;
   height: 50px;
   position: absolute;
   left: ${props => props.leftScroller}px;
   top: 50%;
   transform: translateY(-50%) translateX(-50%);
   border-radius: 50%;
   opacity: 0.7;
   pointer-events: auto;
   border: 3px solid ${props => props.theme.colors.secondyClear};
   cursor: pointer;
   z-index: 60;
   &:hover {
      opacity: 1;
   }
   &:before,
   &:after {
      content:" ";
      display: block;
      width: 4px;
      height: 9999px;
      position: absolute;
      left: 50%;
      margin-left: -1.2px;
      transition: 0.1s;
      background: ${props => props.theme.colors.secondyClear};
   }
   &:before{
      top: 100%;
   }
   &:after{
      bottom: 100%;
   }
   .-scrolling {
      pointer-events: none;
      opacity: 1;
   }
`

const IconScroller = styled(FaArrowsAltH)`
   position: absolute;
   width: 30px;
   height: 30px;
   color: ${props => props.theme.colors.secondyClear};
   top: 50%;
   left: 50%;
   transform: translateX(-50%) translateY(-50%);
`

export {
   WrapComparison,
   ImageBefore,
   ImageAfter,
   Scroller,
   IconScroller,
}