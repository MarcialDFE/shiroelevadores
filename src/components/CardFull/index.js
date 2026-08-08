import React from "react";

import { CardItem, Content, Title, Description, CardButton, HeroImage } from "./styles"

const CardFull = ({ fixed, alt, title, description, className, action }) => {


   return (
      <CardItem className={className}>
         <HeroImage fixed={fixed} alt={alt} />
         <Content>
            <Title>{title}</Title>
            <Description>{description}  
            </Description>
            <CardButton 
               action={action}
               className="saibamais"
               label="Saiba mais" />
         </Content>
      </CardItem>
   )
}

export default CardFull