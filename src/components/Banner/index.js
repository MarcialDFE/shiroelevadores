import React from "react";

import ButtonAction from "../../objects/ButtonAction"
import * as S from "./styles"

const Banner = ({ title, 
                  description, 
                  classButton, 
                  action, 
                  imageFluid, 
                  imageAlt }) => {

   return (
      <>
         <S.Overlay>
            <S.Content>
               <S.Title>{title}</S.Title>                  
               <S.Description>{description}</S.Description>
               <ButtonAction 
                  action={action} 
                  className={classButton} 
                  label="Saiba mais" />
            </S.Content> 
         </S.Overlay>
         <S.BkgImage 
            fluid={imageFluid}
            alt={imageAlt}
         />
      </>
   )
}

export default Banner;