import React, { useEffect } from "react"
import Glide from "@glidejs/glide"
import { useStaticQuery, graphql } from 'gatsby';

import { WrapGlide,
         GlideTrack,
         GlideSlides,
         GlideSlide,
         BackgroundImage,
         Legend,
         GlideBullets,
         GlideBullet } from "./styles"

const options = {
   type: "carousel",
   gap: 10,
   startAt: 0,
   perView: 3,
   autoplay: 5000,
   hoverpause: true,
   keyboard: true,
   animationDuration: 1000,
   breakpoints: {
      992: { perView: 2 },
      768: { perView: 1 },
   }
}

const dataJson = require("../../data/data.json")
const dataPortfolio = dataJson.portfoliopolia

const PortfolioPolia = ({ element = "glide", children }) => {

   const content = useStaticQuery (
      graphql`
        query {
         imgService: file(relativePath: { eq: "retifica-polia.jpg" }) {
               childImageSharp {
               fluid(maxWidth: 1440) {
                  ...GatsbyImageSharpFluid_tracedSVG
               }
            }
         }
         imgPortfolio: allFile (
            filter: {relativeDirectory: { eq: "portfolio-polia-tracao" }},
               sort: {order: ASC, fields: childImageSharp___fixed___originalName}) {
               edges {
                  node {
                     childImageSharp {
                        fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                        }
                     }
                  }
               }
            }
         }
      `
   )
  
   const slider = new Glide(`.${element}`, options)
      
   useEffect(() => {
      slider.mount()
   }, [slider])

   return (
      <WrapGlide className={element}>
         <GlideTrack data-glide-el="track">
            <GlideSlides>
               {content.imgPortfolio.edges.map((slide, index) => (
                  <GlideSlide 
                     key={index} 
                     className={`slider ${index === 1 ? "-variant" : ""}`}
                  >
                     <BackgroundImage 
                        fluid={slide.node.childImageSharp.fluid}
                        alt={dataPortfolio[index].alt}
                     />
                     <Legend>{dataPortfolio[index].label}</Legend>
                  </GlideSlide>
               ))}
            </GlideSlides>
            <GlideBullets data-glide-el="controls[nav]">
               {content.imgPortfolio.edges.map((slide, index) => (
                  <GlideBullet key={index} data-glide-dir={`=${index}`}/>
               ))}
            </GlideBullets>
         </GlideTrack>
      </WrapGlide>
   ) 
}

export default PortfolioPolia