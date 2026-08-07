import React, { useState } from "react";

import Logo from "../../objects/Logo"
import NavBar from "../../components/NavBar"
import ButtonAction from "../../objects/ButtonAction"

import { Section, Container, NavButtonMenu } from "./styles"


const Header = () => {

   const [isopen, setIsopen] = useState(false);
   const [isactive, setIsactive] = useState(false);
   const [isshow, setIsshow] = useState(false);

   const handleClickButtonMenu = event => {
      event.preventDefault();
      if (isopen) {
         setIsopen(false);
         setIsactive(false);
      } else {
         setIsopen(true);
         setIsactive(true);
      }
   }

   const handleClickItemDropDown = event => {
      event.preventDefault();
      isshow ? setIsshow(false) : setIsshow(true)
   }

   return (
      <Section>
         <Container>
            <Logo />
            <NavBar 
               isActive={isactive}
               isShow={isshow}
               onClick={handleClickItemDropDown} />
            <NavButtonMenu
               isOpen={isopen} 
               onClick={handleClickButtonMenu} />
            <ButtonAction action="/Contact#contact-form" className="orcamento" label="Orçamento" />
         </Container>
      </Section>
   )
}

export default Header;