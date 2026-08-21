import React from "react"
import styled from "styled-components"

const WrapMap = styled.iframe`
   width: 100%;
   height: 100%;
   margin: 0;
   border: none;
`
 
const LocalMap = ({ local }) => {
   return (
      <WrapMap 
            src={local}
            width={"100vw"} 
            height={"100vh"} 
            frameborder={"0"} 
            allowfullscreen>
      </WrapMap>
   )
}

export default LocalMap