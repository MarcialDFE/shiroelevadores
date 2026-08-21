import styled from "styled-components";
import media from "../../foundation/breakPoints"

import Container from "../../objects/Container"
import localItem from "../../images/globals/local-item.svg"
import whatsappItem from "../../images/globals/whatsapp-item.svg"
import emailItem from "../../images/globals/email-item.svg"

// BANNER CONTACT
const BannerSection = styled.section`
   width: 100%;
`
    
const BannerContainer = styled.div`
   position: relative;
   width: 100%;
   max-width: 1440px;
   height: auto;
   margin: 0 auto;

   ${media.lessThan("lg")`
      height: 300px;
   `}
   ${media.lessThan("sm")`
      height: 220px;
   `}
` 

// Forn Contact Section
const FormContainer = styled(Container)`
   max-width: 1440px;
   background: ${props => props.theme.gradients.fourth};
   padding: 120px;
   display: flex;
   justify-content: space-between;
   align-items: flex-start;

   ${media.lessThan("xl")`
      padding: 100px;
   `}
   ${media.lessThan("lg")`
      padding: 100px 60px;
   `}
   ${media.lessThan("md")`
      padding: 70px 0;
      flex-wrap: wrap;
      justify-content: center;
   `}

`

const WrapContent = styled.div`
   width: 100%;
   height: auto;

   ${media.lessThan("md")`
      width: 60%;
      margin-bottom: 70px;
   `}
   ${media.lessThan("600px")`
      width: 80%;
   `}
   ${media.lessThan("xs")`
      width: 100%;
      margin-bottom: 80px;
   `}

`

const ContactForm = styled.form`
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

const InputItem = styled.input`
   width: 48%;
   max-width: 330px;
   height: 40px;
   color: ${props => props.theme.colors.secondyMedium};
   font-family: ${props => props.theme.fonts.secondy};
   font-size: ${props => props.theme.fonts.size.mediumSmall};
   padding: 10px;
   outline: none;
   border: 1px solid ${props => props.theme.colors.secondyMedium};
   margin-bottom: 20px;

   ${media.lessThan("xs")`
      width: 100%;
      max-width: 100%;
   `}

`

const TextAreaItem = styled.textarea`
   width: 100%;
   color: ${props => props.theme.colors.secondyMedium};
   font-family: ${props => props.theme.fonts.secondy};
   font-size: ${props => props.theme.fonts.size.mediumSmall};
   padding: 10px;
   outline: none;
   resize: none;
   border: 1px solid ${props => props.theme.colors.secondyMedium};
   margin-bottom: 20px;
`

const ButtonSubmit = styled.button`
   height: 40px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   border-radius: 3px;
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

const ContentItem = styled.div`
   width: 100%;
   height: 50px;
   display: flex;
   align-items: center;
   font-family: ${props => props.theme.fonts.secondy};
   font-size: ${props => props.theme.fonts.size.mediumSmall};
   color: ${props => props.theme.colors.secondyDark};
   padding-left: 65px;
   line-height: 2.8rem;
   &:not(:last-child) {
      margin-bottom: 50px;
   }
   background-repeat: no-repeat;
   background-position: left center;
   &.-local {
      background-image: url(${localItem});
   }
   &.-whatsapp {
      background-image: url(${whatsappItem});
      font-weight: bold;
   }
   &.-email {
      background-image: url(${emailItem});
   }

   ${media.lessThan("xs")`
      justify-content: center;
      text-align: center;
      background-position: center top;
      padding-top: 90px;
      padding-left: 0;
      &:not(:last-child) {
         margin-bottom: 70px;
      }
   `}

`

const MapContainer = styled.div`
   width: 100%;
   max-width: 1440px;
   height: 400px;

   ${media.lessThan("sm")`
      height: 300px;
   `}
   ${media.lessThan("xs")`
      height: 200px;
   `}
`

export {
   BannerSection,
   BannerContainer, 
   FormContainer,
   WrapContent,
   ContentItem,
   ContactForm,
   InputItem,
   ButtonSubmit,
   TextAreaItem,
   MapContainer
}
