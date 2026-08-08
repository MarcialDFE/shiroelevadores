import React from "react";
import { useStaticQuery, graphql } from 'gatsby'

import { List, CardMember } from "./styles" 

const MemberCards = ({ className }) => {
   
   const skill1 = ["Sócio-Fundador", "Manutenção", "Montagem", "Usinagens"]
   const skill2 = ["Sócio", "Manutenção", "Mecânica"]

   const { member1, member2 } = useStaticQuery (
      graphql`
         query {
            member1: file(relativePath: { eq: "team/member1.jpg" }) {
               childImageSharp {
                  fixed(width: 260) {
                     ...GatsbyImageSharpFixed_tracedSVG
                  }
               }
            }
            member2: file(relativePath: { eq: "team/member2.jpg" }) {
               childImageSharp {
                  fixed(width: 260) {
                     ...GatsbyImageSharpFixed_tracedSVG
                  }
               }
            }
         }
      `
   )

   return (
      <List className={className}>
         <CardMember
            fixed={member1.childImageSharp.fixed}
            alt="foto de Mário Tamashiro"
            name="Mário Tamashiro"
            skills={skill1.map(item => {return <li>{item}</li>})}
            contact="(11) 94901-5967"
         />
         <CardMember
            fixed={member2.childImageSharp.fixed}
            alt="foto de Felipe Tamashiro"
            name="Felipe Tamashiro"
            skills={skill2.map(item => {return <li>{item}</li>})}
            contact="(11) 95065-4400"
         />
      </List>
   ) 
}

export default MemberCards