import React from "react";
import styled from "styled-components";

import IconFacebookStroke from "../images/globals/facebook-stroke.svg"
import IconFacebookFill from "../images/globals/facebook-fill.svg"
import IconYoutubeStroke from "../images/globals/youtube-stroke.svg"
import IconYoutubeFill from "../images/globals/youtube-fill.svg"
import IconEmailStroke from "../images/globals/email-stroke.svg"
import IconEmailFill from "../images/globals/email-fill.svg"

const ListSocialLinks = styled.ul`
   display: flex;
   list-style: none;
   margin: 0;
   height: 35px;
`

const ItemList = styled.li`
   height: 100%;
   margin: 0;
   text-indent: -9999px;
   transition: transform 200ms linear;
   margin: 0 5px;
   &:hover {
      transform: scale(1.1);
      transition: transform 200ms linear;
   }

`

const ButtonLink = styled.a`
   width: 100%;
   height: 100%;
   position: relative;
   display: block;
   margin: 0;
   padding: 0 25px;
   background-repeat: no-repeat;
   background-size: contain;
`

const SocialLinks = ({ className, stroke=false }) => {
  
   return (
         <ListSocialLinks className={className}>
            <ItemList>
               <ButtonLink
                  href="https://www.facebook.com/shirousinagens/"
                  alt="link para o perfil da Shiro Usinagens no Facebook"
                  target="_blank"
                  style={{ 
                     backgroundImage: 
                        stroke ? 
                           `url(${IconFacebookStroke})` : 
                           `url(${IconFacebookFill})`,
                     backgroundPosition: "center"
                  }} >
                  Facebook
               </ButtonLink>
            </ItemList>
            <ItemList>
               <ButtonLink 
                  href="/"
                  alt="link para o canal da Shiro Usinagens no Youtube"
                  style={{ 
                     backgroundImage: 
                        stroke ? 
                           `url(${IconYoutubeStroke})` :
                           `url(${IconYoutubeFill})`,
                     backgroundPosition: "center left"
                  }} >
                  Youtube
               </ButtonLink>
            </ItemList>
            <ItemList>
               <ButtonLink 
                  href="mailto:mariokt.mt@gmail.com"
                  alt="link para enviar um e-mail para a Shiro Usinagens"
                  target="_blank"
                  style={{ 
                     backgroundImage: 
                        stroke ? 
                           `url(${IconEmailStroke})` :
                           `url(${IconEmailFill})`,
                     backgroundPosition: "center right"
                  }} >
                  E-mail
               </ButtonLink>
            </ItemList>
         </ListSocialLinks>
   )
}

export default SocialLinks;