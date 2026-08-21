import React, { useState } from "react";
import Img from "gatsby-image";

import { WrapComparison,
         ImageBefore,
         ImageAfter,
         Scroller,
         IconScroller } from "./styles"

const ImageComparison = ({ className,
                           imgAfter, 
                           altAfter, 
                           imgBefore, 
                           altBefore, 
                           labelAfter, 
                           labelBefore,
                           widthComponent,
                           heightComponent, small }) => {

   const [ active, setActive ] = useState(false);
   const [ recWrapper, setRecWrapper] = useState();
   const [ widthWrapper, setWidthWrapper] = useState(widthComponent);
   const [ heightWrapper, setHeightWrapper ] = useState(heightComponent);
   const [ imgBeforeWidth, setImgBeforeWidth ] = useState(widthComponent * 0.5);
   const [ leftScroller, setLeftScroller ] = useState(widthComponent * 0.5);
   const [ classscroller, setClassscroller ] = useState("");
   
   // WRAPPER EVENT
   const handleWonLoad = (event) => {
      setRecWrapper(event.target.getBoundingClientRect().left);
      setImgBeforeWidth(widthComponent * 0.5);
      setWidthWrapper(widthComponent);
      setHeightWrapper(heightComponent);
      small ? 
         setLeftScroller(widthComponent * 0.25) : 
         setLeftScroller(widthComponent * 0.5)
   }
   
   // SCROLLER EVENTS POINTER
   const handleSMouseDown = () => {
      setActive(true);
      setClassscroller("-scrolling");
      if (typeof document !== `undefined`) {
         document.body.addEventListener("mousemove", handleBodyMouseMove);
      }
   }

   const handleSMouseUp = () => {
      setActive(false);
      setClassscroller("");
      document.body.removeEventListener("mousemove", handleBodyMouseMove);
   }

   const handleSMouseLeave = () => {
      setActive(false);
      setClassscroller("");
      document.body.removeEventListener("mousemove", handleBodyMouseMove);
   }

   // SCROLLER EVENTS TOUCH
   const handleSTouchStart = () => {
      setActive(true);
      setClassscroller("-scrolling");
      if (typeof document !== `undefined`) {
         document.body.addEventListener("touchmove", handleBodyTouchMove);
      }
   }

   const handleSTouchEnd = () => {
      setActive(false);
      setClassscroller("");
      document.body.removeEventListener("touchmove", handleBodyTouchMove);
   }

   const handleSTouchCancel = () => {
      setActive(false);
      setClassscroller("");
      document.body.removeEventListener("touchmove", handleBodyTouchMove);
   }

   // BODY EVENTS
   if (typeof document !== `undefined`) {
      document.body.addEventListener("mouseup", () => {
         setActive(false);
         setClassscroller("");
         document.body.removeEventListener("mousemove", handleBodyMouseMove);
      });
      document.body.addEventListener("touchend", () => {
         setActive(false);
         setClassscroller("");
         document.body.removeEventListener("touchmove", handleBodyTouchMove);
      });
   }

   if (typeof document !== `undefined`) {
      document.body.addEventListener("mouseleave", () => {
         setActive(false);
         setClassscroller("");
         document.body.removeEventListener("mousemove", handleBodyMouseMove);
      });
      document.body.addEventListener("touchleave", () => {
         setActive(false);
         setClassscroller("");
         document.body.removeEventListener("touchmove", handleBodyTouchMove);
      });
   }
   
   // BODY FUNCTION MOVE POINTER
   const handleBodyMouseMove = event => {
      let posX = event.pageX;
      posX -= recWrapper;
      scrollIt(posX);
   }

   // BODY FUNCTION MOVE TOUCH
   const handleBodyTouchMove = event => {
      let posX = event.touches[0].clientX;
      posX -= recWrapper;
      scrollIt(posX);
   }

   // SCROLLER & IMAGE FUNCTIONS POINTER AND TOUCH
   const scrollIt = (posX) => {
      let transform = Math.max(0, (Math.min(posX, widthWrapper )));
      setLeftScroller(transform);
      small ? 
         setImgBeforeWidth(transform * 2) : 
         setImgBeforeWidth(transform)
   }

   return (
      <WrapComparison 
         className={className}
         onLoad={handleWonLoad}> 
         <ImageAfter 
            className={className}
            widthComponent={widthWrapper}
            heightComponent={heightWrapper}   
            labelAfter={labelAfter}>
            <Img fixed={imgAfter} alt={altAfter} draggable="false" />
         </ImageAfter>
         <ImageBefore 
            className={className}
            heightComponent={heightWrapper}   
            labelBefore={labelBefore}
            imgBeforeWidth={imgBeforeWidth}>
            <Img fixed={imgBefore} alt={altBefore} draggable="false" />
         </ImageBefore>
         <Scroller 
            active={active}
            className={classscroller}
            onMouseDown={handleSMouseDown}
            onTouchStart={handleSTouchStart}
            onPointerDown={handleSMouseDown}
            leftScroller={leftScroller}
            onMouseUp={handleSMouseUp}
            onPointerUp={handleSMouseUp}
            onTouchEnd={handleSTouchEnd}
            onPointerLeave={handleSMouseLeave}
            onTouchCancel={handleSTouchCancel}>
            <IconScroller />
         </Scroller>
      </WrapComparison>
   )
}

export default ImageComparison