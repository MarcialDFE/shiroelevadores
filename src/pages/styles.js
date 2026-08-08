import styled from "styled-components";
// import media from "../foundation/breakPoints"

import Section from "../objects/Section"
import Container from "../objects/Container"

// SERVICE HOME
const ServiceSection = styled(Section)`
   padding: 70px 0;
   background-color: transparent;
`

const ServiceContainer = styled(Container)`
   flex-direction: column;
   background-color: ${props => props.theme.colors.secondyClear};
`

export { 
   ServiceSection,
   ServiceContainer
}