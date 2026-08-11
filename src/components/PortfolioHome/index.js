import React, { useEffect } from "react"
import Glide from "@glidejs/glide"
import { useStaticQuery, graphql } from 'gatsby';

import { WrapGlide,
         GlideTrack,
         GlideSlides,
         GlideSlide,
         BackgroundImage,
         WrapOverlay,
         ContentOverlay,
         Title,
         SubTitle,
         Description } from "./styles"

const options = {
   type: "carousel",
   gap: 0,
   startAt: 0,
   perView: 1,
   autoplay: 5000,
   hoverpause: true,
   animationDuration: 1000
}

const PortfolioHome = ({ element = "glide", children }) => {

   const content = useStaticQuery (
      graphql`
        query {
          imgPortfolio: allFile (
            filter: {relativeDirectory: { eq: "portfolio" }},
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
                     <WrapOverlay>
                        <ContentOverlay>
                           <Title>
                              Titulo
                           </Title>
                           <SubTitle>
                              Subtitulo
                           </SubTitle>
                           <Description>
                              Descrição
                           </Description>
                        </ContentOverlay>
                     </WrapOverlay>
                     <BackgroundImage 
                        fluid={slide.node.childImageSharp.fluid}
                        alt="alt da imagem"
                     />
                  </GlideSlide>
               ))}
            </GlideSlides>
         </GlideTrack>
      </WrapGlide>
   ) 
}

export default PortfolioHome