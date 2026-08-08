import React from "react";
import { useStaticQuery, graphql } from 'gatsby'

import { List, CardService } from "./styles" 

const dataJson = require("../../data/data.json")
const dataCards = dataJson.cards.home

const ServiceCards = () => {

   const { card1, card2, card3 } = useStaticQuery (
      graphql`
         query {
            card1: file(relativePath: { eq: "services/card1-image.jpg" }) {
               childImageSharp {
                  fixed(width: 270) {
                     ...GatsbyImageSharpFixed_tracedSVG
                  }
               }
            }
            card2: file(relativePath: { eq: "services/card2-image.jpg" }) {
               childImageSharp {
                  fixed(width: 270) {
                     ...GatsbyImageSharpFixed_tracedSVG
                  }
               }
            }
            card3: file(relativePath: { eq: "services/card3-image.jpg" }) {
               childImageSharp {
                  fixed(width: 270) {
                     ...GatsbyImageSharpFixed_tracedSVG
                  }
               }
            }
         }
      `
   )

   return (
      <List>
         <CardService 
            fixed={card1.childImageSharp.fixed}
            alt={dataCards.card1.alt}
            title={dataCards.card1.title}
            description={dataCards.card1.description}
            action={dataCards.card1.action}
         />
         <CardService 
            fixed={card2.childImageSharp.fixed}
            alt={dataCards.card2.alt}
            title={dataCards.card2.title}
            description={dataCards.card2.description}
            action={dataCards.card2.action}
         />
         <CardService 
            fixed={card3.childImageSharp.fixed}
            alt={dataCards.card3.alt}
            title={dataCards.card3.title}
            description={dataCards.card3.description}
            action={dataCards.card3.action}
         />
      </List>
   ) 

}

export default ServiceCards