import styled from "styled-components";
import Img from "gatsby-image"

const CardItem = styled.dl`
   position: relative;
   box-sizing: border-box;
   border: 1px solid ${props => props.theme.colors.secondyLight};
   background-color: ${props => props.theme.colors.secondyClear};
   box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
   text-align: center;
`

const Content = styled.li`
   list-style: none;
   margin: 0;
   padding: 10px 20px 20px;
   border-top: 2px solid ${props => props.theme.colors.secondyLight};
`

const Name = styled.dt`
  font-family: ${props => props.theme.fonts.family.primary};
  color: ${props => props.theme.colors.secondyDark};
  font-size: ${props => props.theme.fonts.size.medium};
  font-weight: 700;
  line-height: 1.33;
  margin-bottom: 10px;
`

const MemberImage = styled(Img)`
   width: 100%;
   margin-bottom: -5px;
   padding: 0;
`

const Skills = styled.ul`
   display: block;
   font-family: ${props => props.theme.fonts.family.secondy};
   color: ${props => props.theme.colors.firstDark};
   font-size: ${props => props.theme.fonts.size.verySmall};
   text-transform: uppercase;
   line-height: 1.57rem;
   list-style: none;
   text-align: center;
   margin: 0;
`

const Contact = styled.dd`
   width: 100%;
   font-family: ${props => props.theme.fonts.family.secondy};
   color: ${props => props.theme.colors.secondyDark};
   font-size: ${props => props.theme.fonts.size.medium};
   font-weight: 700;
   text-align: center;
   position: absolute;
   bottom: 20px;
   left: 0;
   display: flex;
   justify-content: center;
   align-items: center;
`

export {
   CardItem,
   Content,
   Name,
   Skills,
   Contact,
   MemberImage
}