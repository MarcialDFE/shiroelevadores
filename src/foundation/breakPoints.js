import { generateMedia } from "styled-media-query";

const mq = generateMedia({
   xs: "450px",
   sm: "768px",
   md: "900px",
   lg: "1200px",
   xl: "1440px",
 });

export default mq