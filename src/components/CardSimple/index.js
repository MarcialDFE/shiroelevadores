import React from "react";
import { FaWhatsapp } from "react-icons/fa";

import { CardItem, Content, Name, Skills, Contact, MemberImage } from "./styles"

const CardSimple = ({ fixed, alt, skills, name, className, contact }) => {

   const icons = {
      color: "#A00000",
      size: "2.2rem",
      marginRight: "5px",
   }

   return (
      <CardItem className={className}>
         <MemberImage fixed={fixed} alt={alt} />
         <Content>
            <Name>{name}</Name>
            <Skills>
               {skills}
            </Skills>
            <Contact>
               <FaWhatsapp 
                  size={ icons.size } 
                  color={ icons.color }
                  style={{ marginRight: icons.marginRight }}
               />
               {contact}
            </Contact>
         </Content>
      </CardItem>
   )  
}

export default CardSimple