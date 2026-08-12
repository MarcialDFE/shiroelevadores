import styled from "styled-components"
import { Link } from "gatsby";

import media from "../../foundation/breakPoints"

import Logo from "../../objects/Logo" 
import ButtonAction from "../../objects/ButtonAction"
import SocialLinks from "../../objects/SocialLinks"


// GENERAL
const FooterSection = styled.footer`
   width: 100%;
   max-width: 1440px;
   background-color: ${props => props.theme.colors.secondyClear};
   margin: 0 auto;
`

const FooterContainer = styled.div`
   position: relative;
   width: 100%;
   max-width: 1200px;
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 70px 0;
   background-color: ${props => props.theme.colors.secondyClear};

   ${media.lessThan("lg")`
      padding: 70px;
   `}
   ${media.lessThan("md")`
      padding: 70px 50px;
   `}
   ${media.lessThan("sm")`
      flex-direction: column;
      justify-content: center;
      padding: 70px 20px;
   `}

`

const Title = styled.h4`
   font-family: ${props => props.theme.fonts.secondy};
   font-size: ${props => props.theme.fonts.size.verySmall};
   font-weight: bold;
   color: ${props => props.theme.colors.secondyDark};
   text-transform: uppercase;
   line-height: 1.5;
   margin-bottom: 10px;
`

const Text = styled.p`
   font-family: ${props => props.theme.fonts.secondy};
   font-size: ${props => props.theme.fonts.size.verySmall};
   font-weight: normal;
   color: ${props => props.theme.colors.secondyDark};
   line-height: 1.5;
`


// COL1 = SITEMAP
const LogoFooter = styled(Logo)`
   height: 90px;
   margin-bottom: 15px;
   & img {
      padding: 0;
   }
`

const Sitemap = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: flex-end;
   align-items: space-between;

   ${media.lessThan("md")`
      display: none;
   `}
`

const ListItems = styled.ul`
   display: block;
   list-style: none;
   margin: 0;
`

const Item = styled.li`
   padding: 1.2px 0;
   margin: 0;
   cursor: pointer;
`

const Action = styled(Link)`
   text-decoration: none;
   font-family: ${props => props.theme.fonts.secondy};
   font-size: ${props => props.theme.fonts.size.verySmall};
   font-weight: normal;
   color: ${props => props.theme.colors.secondyDark};
   &:hover {
      color: ${props => props.theme.colors.firstDark};
   }
`

// COL2 = OFERTA SERVIÇOS
const Service = styled.div`
   width: 390px;
   display: flex;
   flex-direction: column;
   justify-content: flex-end;
   align-items: space-between;

   ${media.lessThan("sm")`
      order: 2;
      text-align: center;
      align-items: center;
   `}
   ${media.lessThan("xs")`
      width: 100%;
   `}
`

const ButtonFooter = styled(ButtonAction)`
   text-align: center;
`

// COL3 = CONTATOS
const Contact = styled.div`
   display: block;

   ${media.lessThan("sm")`
      order: 1;
      text-align: center;
      margin-bottom: 50px;
   `}
`

const SocialLinksFooter = styled(SocialLinks)`
   margin-left: -13px;
   margin-top: 35px;

   ${media.lessThan("sm")`
      width: 100%;
      margin: 30px 0 0 -5px;
      justify-content: center;
   `}
`

// BARRA RODAPÉ
const FooterBar = styled.div`
   width: 100%;
   max-width: 1440px;
   height: 40px;
   background-color: ${props => props.theme.colors.firstDark};
   color: ${props => props.theme.colors.secondyClear};
   font-family: ${props => props.theme.fonts.secondy};
   font-size: ${props => props.theme.fonts.size.verySmall};
   font-weight: normal;
   display: flex;
   justify-content: center;
   align-items: center;
   text-align: center;
   ${media.lessThan("xs")`
      height: 60px;
      padding: 0 40px;
   `}
`

export {
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
}