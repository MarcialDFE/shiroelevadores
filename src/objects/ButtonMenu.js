import React from "react";
import styled from "styled-components";
import media from "../foundation/breakPoints"

const Container = styled.div`
   position: relative;
   display: none;
   justify-content: flex-end;
   margin: 0 20px;

   ${media.lessThan("md")`
      display: flex;
   `}
   
`

const WrapButton = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: flex-start;
   cursor: pointer;
   flex: auto 1 auto;
`

const BarButton = styled.div`
      width: 40px;
      height: 5px;
      background-color: ${props => props.theme.colors.secondyDark};
      margin: 3px 0;
      transition: 500ms;
      &.-open1 {
         -webkit-transform: rotate(-45deg) translate(-8px, 6px);
         transform: rotate(-45deg) translate(-9px, 6px);
      }
      &.-open2 {
         opacity: 0;
      }
      &.-open3 {
         -webkit-transform: rotate(45deg) translate(-8px, -6px);
         transform: rotate(45deg) translate(-9px, -6px);
      }
`

const ButtonMenu = ({ isOpen=false, onClick, className }) => {

   return (
      <Container onClick={onClick} className={className}>
         <WrapButton>
            <BarButton className={`${isOpen ? "-open1" : "" }`} />
            <BarButton className={`${isOpen ? "-open2" : "" }`} />
            <BarButton className={`${isOpen ? "-open3" : "" }`} />
         </WrapButton>
      </Container>
   )

}

export default ButtonMenu;