import styled from "styled-components";
import Img from "gatsby-image"

import ButtonAction from "../../objects/ButtonAction"

const CardItem = styled.dl`
   box-sizing: border-box;
   border: 1px solid ${props => props.theme.colors.secondyLight};
   background-color: ${props => props.theme.colors.secondyClear};
   box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
   padding: 10px;
`
const Content = styled.li`
   list-style: none;
   padding: 10px;
`

const Title = styled.dt`
  font-family: ${props => props.theme.fonts.secondy};
  color: ${props => props.theme.colors.secondyMedium};
  font-size: ${props => props.theme.fonts.size.mediumSmall};
  font-weight: 700;
  line-height: 1.33;
  text-transform: uppercase;
  margin-bottom: 10px;
`

const HeroImage = styled(Img)`
   position: absolute;
   top: 0;
   width: 100%;
   padding: 10px 10px 0;
   transition: transform 300ms ease-out;
   &:hover {
      transform: scale(1.05);
      transition: transform 300ms ease-out;
   }
`

const Description = styled.dd`
  font-family: ${props => props.theme.fonts.secondy};
  color: ${props => props.theme.colors.secondyMedium};
  font-size: ${props => props.theme.fonts.size.verySmall};
  line-height: 1.57em;
  margin-bottom: 25px;
`

const CardButton = styled(ButtonAction)`
   margin-left: auto;
`

export {
   CardItem,
   Content,
   Title,
   Description,
   CardButton,
   HeroImage
}