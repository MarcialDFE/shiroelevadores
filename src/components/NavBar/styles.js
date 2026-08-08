import styled from "styled-components";
import { Link } from "gatsby";
import media from "../../foundation/breakPoints"
import { FaChevronDown } from "react-icons/fa"
import SocialLinks from "../../objects/SocialLinks"

const MainNav = styled.nav`
   display: flex;
   justify-content: space-between;
   flex-grow: 1;
   box-sizing: border-box;
   padding: 10px 0;
   margin: 0 60px;

   ${media.lessThan("lg")`
      margin: 0 20px 0 40px;
   `}
   ${media.lessThan("980px")`
      margin: 0 0 0 10px;
   `}
`

const ListItem = styled.ul`
   list-style: none;
   margin: 0;
   display: flex;
   justify-content: flex-end;
   align-items: center;
   &.-isActive {
      transform: translateX(0);
      transition: transform 300ms linear;
   }

   ${media.lessThan("md")`
      position: absolute;
      display: block;
      top: 160px;
      right: 0;
      width: 100vw;
      height: auto;
      text-decoration: none;
      line-height: 50px;
      background-color: ${props => props.theme.colors.secondyLight};
      transform: translateX(-300%);
      transition: transform 300ms linear;
      z-index: 10;
   `}
   ${media.lessThan("sm")`
      top: 140px;
   `}
`

const Item = styled.li`
   position: relative;
   display: inline-flex;
   margin-right: 45px;
   cursor: pointer;


   ${media.lessThan("lg")`
      margin-right: 20px;
   `}
   ${media.lessThan("980px")`
      margin-right: 15px;
      &:nth-child(4) {
         margin-right: 0px;
      }
   `}

   ${media.lessThan("md")`
      background-color: transparent;
      margin-right: 0px;
      display: block;
      padding: 5px 0;
   `}
`

const IconSubAction = styled(FaChevronDown)`
   width: 15px;
   height: 12px;
   margin-left: 5px;
   transition: transform 300ms linear;
   &.-isActive {
      transform: rotate(180deg);
      transition: transform 300ms linear;
   }
`

const Action = styled(Link)`
   font-family: ${props => props.theme.fonts.family.secondy};
   font-size: ${props => props.theme.fonts.size.medium};
   font-weight: normal;
   color: ${props => props.theme.colors.secondyDark};
   text-decoration: none;
   &:after {
      content: "";
      height: 2px;
      width: 100%;
      background-color: ${props => props.theme.colors.firstDark};
      position: absolute;
      bottom: -1px;
      left: 0;
      transform: scaleX(0);
      transition: transform 200ms linear;
      transform-origin: center;
   }
   &:hover:after {
      transform: scale(1);
   }

   ${media.lessThan("lg")`
      font-size: ${props => props.theme.fonts.size.mediumSmall};
   `}

   ${media.lessThan("md")`
      display: block;
      width: 100%;
      color: ${props => props.theme.colors.secondyDark};
      padding-left: 20px;
      background-color: transparent;
      text-align: center;
      &:after {
         content: none;
      }
   `}
`

// SUBMENU
const ActionSpan = styled.span`
   font-family: ${props => props.theme.fonts.family.secondy};
   font-size: ${props => props.theme.fonts.size.medium};
   font-weight: normal;
   color: ${props => props.theme.colors.secondyDark};
   text-decoration: none;
   &:after {
      content: "";
      height: 2px;
      width: 100%;
      background-color: ${props => props.theme.colors.firstDark};
      position: absolute;
      bottom: -1px;
      left: 0;
      transform: scaleX(0);
      transition: transform 200ms linear;
      transform-origin: center;
   }
   &:hover:after {
      transform: scale(1);
   }

   ${media.lessThan("lg")`
      font-size: ${props => props.theme.fonts.size.mediumSmall};
   `}

   ${media.lessThan("md")`
      display: block;
      width: 100%;
      color: ${props => props.theme.colors.secondyDark};
      padding-left: 20px;
      background-color: transparent;
      text-align: center;
      &:after {
         content: none;
      }
   `}
`

const ListSubItem = styled.ul`
   width: 260px;
   position: absolute;
   top: 35px;
   display: none;
   color: ${props => props.theme.colors.firstDark};
   background-color: ${props => props.theme.colors.secondyClear};
   overflow: visible;
   border: 1px solid ${props => props.theme.colors.secondyMedium};
   margin: 0;
   z-index: 30;
   &.-isShow {
      display: block;
   }

   ${media.lessThan("md")`
      width: 100vw;
      position: relative;
      background-color: transparent;
      top: 0;
      border: none;
   `}
`

const SubItem = styled.li`
   position: relative;
   display: block;
   padding: 5px 20px;
   margin: 0;
   &:not(:last-child) {
      border-bottom: 1px solid ${props => props.theme.colors.secondyMedium};
   }
   &:hover {
      background-color: ${props => props.theme.colors.secondyLight};
   }
   ${media.lessThan("md")`
      padding: 5px 0;
      text-align: center;

      &:not(:last-child) {
         border-bottom: none;
      }
      &:hover {
         background-color: transparent;
      }
   `}
`

const SubAction = styled(Link)`
   font-family: ${props => props.theme.fonts.family.secondy};
   font-size: ${props => props.theme.fonts.size.mediumSmall};
   font-weight: normal;
   color: ${props => props.theme.colors.secondyDark};
   text-decoration: none;

   ${media.lessThan("md")`
      color: ${props => props.theme.colors.secondyDark};
      font-size: ${props => props.theme.fonts.size.verySmall};
      &:hover {
         background-color: transparent;
      }
   `}

`

// SOCIAL
const GroupSocialLinks = styled(SocialLinks)`
   &.-desktop {
      width: 100%;
      display: none;
      justify-content: space-evenly;
      margin-top: 20px;
   }

   ${media.lessThan("md")`
      &.-tablet {
         width: 100%;
         display: inline-flex;
         justify-content: center;
         margin: 40px 0;
      }
   `}   
`

export {
   MainNav,
   ListItem,
   Item,
   Action,
   ActionSpan,
   ListSubItem,
   SubItem,
   SubAction,
   GroupSocialLinks,
   IconSubAction
}