import React from "react";
import { useStaticQuery, graphql } from 'gatsby'

import { List, CardMember } from "./styles" 

const MemberCards = ({ className }) => {
   
   const dataJson = require("../../data/data.json")
   const dataMembers = dataJson.members
 
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
            alt={dataMembers.member1.alt}
            name={dataMembers.member1.name}
            skills={dataMembers.member1.skills.map(item => {return <li>{item}</li>})}
            contact={dataMembers.member1.contact}
         />
         <CardMember
            fixed={member2.childImageSharp.fixed}
            alt={dataMembers.member2.alt}
            name={dataMembers.member2.name}
            skills={dataMembers.member2.skills.map(item => {return <li>{item}</li>})}
            contact={dataMembers.member2.contact}
         />
      </List>
   ) 
}

export default MemberCards