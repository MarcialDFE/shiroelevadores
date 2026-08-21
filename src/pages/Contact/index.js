import React from "react";
import { useStaticQuery, graphql } from 'gatsby';

import { BannerSection,
         BannerContainer, 
         FormContainer, 
         WrapContent, 
         ContentItem, 
         MapContainer } from "./styles";

import Layout from "../../components/Layout";
import SEO from "../../components/seo";
import TopBar from "../../components/TopBar";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Section from "../../objects/Section";
import ContactForm from "../../components/ContactForm";
import LocalMap from "../../objects/LocalMap"
import Footer from "../../components/Footer";

const dataJson = require("../../data/data.json")
const dataTopbar = dataJson.topbar
const dataBannerContact = dataJson.banners
const dataFooter = dataJson.footercontacts

const ContactPage = () => {
   
   //MAP
   const local = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.2184084422756!2d-46.615661148986355!3d-23.632348070028424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5b14b9609f53%3A0x36961263b9d4bccc!2sRua%20Coronel%20Fawcett%2C%20454%20-%20Vila%20Moraes%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004167-030!5e0!3m2!1spt-BR!2sbr!4v1583332049834!5m2!1spt-BR!2sbr"

   //BANNER
   const images = useStaticQuery (
      graphql`
         query {
            imgBanner: file(relativePath: { eq: "banner/banner-contact.jpg" }) {
               childImageSharp {
                  fluid(maxWidth: 1440) {
                     ...GatsbyImageSharpFluid_tracedSVG
                  }
               }
            }
         }
      `
   )

   return (
      <Layout>
         <SEO title="Contatos"/>
         <TopBar 
            andress={dataTopbar.andress}
            whatsapp={dataTopbar.whatsapp}
         />
         <Header />
         <BannerSection>
            <BannerContainer>
               <Banner
                  title={dataBannerContact.contact.title}
                  description={dataBannerContact.contact.description}
                  imageFluid={images.imgBanner.childImageSharp.fluid}
                  imageAlt={dataBannerContact.contact.imageAlt}
                  classButton={dataBannerContact.contact.classButton}
               />
            </BannerContainer>
         </BannerSection>
         <Section>
            <FormContainer>
               <WrapContent>
                  <ContentItem className="-local">
                     {dataFooter.andress1}<br></br>
                     {dataFooter.andress2}
                  </ContentItem>
                  <ContentItem className="-whatsapp">
                     <strong>{dataFooter.contact1}<br></br>
                     {dataFooter.contact2}</strong>
                  </ContentItem>
                  <ContentItem className="-email">
                     {dataFooter.email1}<br></br>
                     {dataFooter.email2}
                  </ContentItem>
               </WrapContent>
               <ContactForm /> 
            </FormContainer>
         </Section>
         <Section>
            <MapContainer>
               <LocalMap local={local}/>
            </MapContainer>
         </Section>
         <Footer />
      </Layout>
   )
}

export default ContactPage;
