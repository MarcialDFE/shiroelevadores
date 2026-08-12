import React from "react"

import { 
   FooterSection, 
   FooterContainer, 
   LogoFooter,
   Sitemap,
   Title,
   ListItems,
   Item,
   Action,
   Text,
   Service,
   ButtonFooter,
   Contact,
   SocialLinksFooter,
   FooterBar
} from "./styles.js"

const dataJson = require("../../data/data.json")
const dataFooter = dataJson.footercontacts
const dataCopyright = dataJson.footercopyright

const Footer = () => {
   return (
      <FooterSection>
         <FooterContainer>
            <Sitemap>
               <LogoFooter />
               <Title>Mapa do site</Title>
               <ListItems>
                  <Item><Action to="/">Início</Action></Item>
                  <Item><Action to="/About">Quem somos</Action></Item>
                  <Item><Action to="/ReparosMecanicos">Reparos mecãnicos</Action></Item>
                  <Item><Action to="/RetificaPolias">Retífica de polias</Action></Item>
                  <Item><Action to="/Usinagem">Usinagem</Action></Item>
                  <Item><Action to="/Contact">Contatos</Action></Item>
               </ListItems>
            </Sitemap>
            <Service>
               <Title>Terceirização de serviços de elevadores</Title>
               <Text>Venha construir uma parceria conosco delegando-nos a responsabilidade na área de sua manutenção mecânica.</Text>
               <Text>Somos especialistas com vasta experiência nessa área, capazes de agregar eficiência, qualidade e valor para sua empresa.</Text>
               <Text>Temos preços competitivos, trabalhando com segurança e responsabilidade.</Text>
               <br></br>
               <ButtonFooter action="/Contact#contact-form" className="enviemensagem" label="Envie sua mensagem" />
            </Service>
            <Contact>
               <Title>Contatos</Title>
               <Text>{dataFooter.andress1}<br></br>
                     {dataFooter.andress2}</Text>
               <Text><strong>{dataFooter.contact1}<br></br>
                     {dataFooter.contact2}</strong></Text>
               <Text>{dataFooter.email1}<br></br>
                     {dataFooter.email2}</Text>
               <SocialLinksFooter />
            </Contact>
         </FooterContainer>
         <FooterBar>{dataCopyright}</FooterBar>
      </FooterSection>
   )
}

export default Footer