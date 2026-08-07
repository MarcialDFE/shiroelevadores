import React from "react";
import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

import { Section, Container, ItemTopbar } from "./styles"

const icons = {
   color: "#A00000",
   size: "2rem",
   marginRight: "5px",
}

const TopBar = ({ andress, whatsapp }) => {

   return (
      <Section>
         <Container>
            <ItemTopbar>
               <FaMapMarkerAlt 
                  size={ icons.size } 
                  color={ icons.color }
                  style={{ marginRight: icons.marginRight }}
               />
                  {andress}
            </ItemTopbar>
            <ItemTopbar>
               <FaWhatsapp 
                  size={ icons.size } 
                  color={ icons.color }
                  style={{ marginRight: icons.marginRight }}
               />
               {whatsapp}
            </ItemTopbar>
         </Container>
      </Section>
   )
}

export default TopBar
