import React from "react";
import styled from "styled-components"
import { Link } from "gatsby";
import imgLogo from "../images/globals/new-logo.svg"

const Img = styled.img`
   height: 100%;
   margin: 0;
   padding: 10px 0;
`

const LinkLogo = styled(Link)`
   height: 100%;
   display: flex;
   align-items: center;
`

const Logo = ({ className }) => {
  
   return (
      <LinkLogo to="/" className={className}>
         <Img src={imgLogo} alt="logo da Shiro Usinagens"/>
      </LinkLogo>
   )
}

export default Logo