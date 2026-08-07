import { keyframes } from "styled-components";
import fadeInLeft from "react-animations/lib/fade-in-left"
import fadeInRight from "react-animations/lib/fade-in-right"
import fadeIn from "react-animations/lib/fade-in"

const fInLeft = keyframes`${fadeInLeft}`
const fInRight = keyframes`${fadeInRight}`
const fIn = keyframes`${fadeIn}`

const animations = {
    fadeInLeft: fInLeft,
    fadeInRight: fInRight,
    fadeIn: fIn
};
 
export default animations;