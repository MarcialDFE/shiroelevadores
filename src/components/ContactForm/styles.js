import styled from "styled-components";
import media from "../../foundation/breakPoints"
import { Field, ErrorMessage } from "formik"

const WrapForm = styled.form`
   width: 100%;
   max-width: 690px;
   height: auto;
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;

   ${media.lessThan("xl")`
      max-width: 600px;
   `}
   ${media.lessThan("lg")`
      max-width: 540px;
   `}
   ${media.lessThan("1040px")`
      max-width: 450px;
   `}
   ${media.lessThan("md")`
      max-width: 70%;
   `}
   ${media.lessThan("sm")`
      max-width: 85%;
   `}
   ${media.lessThan("xs")`
      max-width: 90%;
      flex-direction: column;
      align-items: center;
   `}

`

const InputItem = styled.div`
   position: relative;
   width: 48%;
   max-width: 330px;
   height: 40px;
   border: 1px solid ${props => props.theme.colors.secondyMedium};
   margin-bottom: 30px;

   ${media.lessThan("xs")`
      width: 100%;
      max-width: 100%;
   `}

`
const TextAreaItem = styled(InputItem)`
   width: 100%;
   max-width: 100%;
   height: 120px;
`


const FieldItem = styled(Field)`
   position: absolute;
   width: 100%;
   height: 100%;
   top: 0;
   left: 0;
   color: ${props => props.theme.colors.secondyMedium};
   font-family: ${props => props.theme.fonts.secondy};
   font-size: ${props => props.theme.fonts.size.mediumSmall};
   padding: 10px;
   border: none;
   outline: none;
   resize: none;
`

const MsgErrorField = styled(ErrorMessage)`
   width: 100%;
   position: absolute;
   bottom: -40px;
   left: 0;
   font-family: ${props => props.theme.fonts.secondy};
   font-size: ${props => props.theme.fonts.size.mediumSmall};
   color: ${props => props.theme.colors.firstDark};
`

const MsgSend = styled.p`
   font-family: ${props => props.theme.fonts.secondy};
   font-size: ${props => props.theme.fonts.size.medium};
   &.-msgok {
      color: ${props => props.theme.colors.msgok};
   }
   &.-msgerr {
      color: ${props => props.theme.colors.msgerr};
   }
`

const Button = styled.button`
   height: 40px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   border-radius: 3px;
   outline: none;
   padding: 0 30px;
   transition: all 0.3s linear;
   text-decoration: none;
   font-family: ${props => props.theme.fonts.secondy};
   text-transform: uppercase;
   font-size: ${props => props.theme.fonts.size.mediumSmall};
   font-weight: bold;
   color: ${props => props.theme.colors.secondyClear};
   letter-spacing: 0.05rem;
   background-color: ${props => props.theme.colors.firstDark};
   cursor: pointer;
   &:hover {
      background-color: rgba(160,0,0,0.7);
      transition: all 0.3s linear;
   }
`

export {
   WrapForm,
   InputItem,
   FieldItem,
   TextAreaItem,
   MsgErrorField,
   MsgSend,
   Button
}