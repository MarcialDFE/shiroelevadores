import React from "react";
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"

import { 
   BannerSection,
   BannerContainer, 
   AboutContainer,
   Side,
   DifferentialsContainer,
   HistoryTitleSection,
   HistoryTextSection,
   ListDifferentials,
   ListIcon,
   TeamContainer,
   AboutTeam } from "./styles"

import Layout from "../../components/Layout";
import SEO from "../../components/seo"
import TopBar from "../../components/TopBar"
import Header from "../../components/Header"
import Banner from "../../components/Banner"
import Section from "../../objects/Section"
import TitleSection from "../../objects/TitleSection"
import Footer from "../../components/Footer"

const dataJson = require("../../data/data.json")
const dataTopbar = dataJson.topbar
const dataBannerAbout = dataJson.banners
const dataTitle = dataJson.sectiontitles.about

const AboutPage = () => {

   const images = useStaticQuery (
      graphql`
         query {
            imgBanner: file(relativePath: { eq: "banner/banner-about.jpg" }) {
               childImageSharp {
                  fluid(maxWidth: 1440) {
                     ...GatsbyImageSharpFluid_tracedSVG
                  }
               }
            }
            imgHistory: file(relativePath: { eq: "about-history.jpg" }) {
               childImageSharp {
                  fluid(maxWidth: 1440) {
                     ...GatsbyImageSharpFluid_tracedSVG
                  }
               }
            }
            imgDifferentials: file(relativePath: { eq: "about-differentials.jpg" }) {
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
         <SEO title="Sobre"/>
         <TopBar 
            andress={dataTopbar.andress}
            whatsapp={dataTopbar.whatsapp}
         />
         <Header />
         <BannerSection>
            <BannerContainer>
               <Banner
                  title={dataBannerAbout.about.title}
                  description={dataBannerAbout.about.description}
                  imageFluid={images.imgBanner.childImageSharp.fluid}
                  imageAlt={dataBannerAbout.about.imageAlt}
                  classButton={dataBannerAbout.about.classButton}
               />
            </BannerContainer>
         </BannerSection>
         <Section>
            <AboutContainer>
               <Side className="-content">
                  <HistoryTitleSection
                     title={dataTitle.sec1.title}
                     subtitle={dataTitle.sec1.subtitle}
                  />
                  <HistoryTextSection>
                     <p>A <strong>Shiro Elevadores</strong> é uma empresa atuando em parceria com nossos clientes prestando serviços na solução de suas demandas, com agilidade, qualidade e a melhor relação custo x benefício do mercado.</p>
                     <p>Nossa equipe é formada por profissionais com mais de 30 ano de experiência em usinagem de pequeno e médio porte, manutenção, recondicionamento, diagnósticos, com larga experiência industrial e no segmento de elevadores com destaque à montagens, manutenções mecânicas e usinagem em geral.</p>
                  </HistoryTextSection>
               </Side>
               <Side>
                  <Img 
                     fluid={images.imgHistory.childImageSharp.fluid}
                     alt="imagem da oficina da Shiro Usinagens"
                  />
               </Side>               
            </AboutContainer>
         </Section>
         <Section>
            <DifferentialsContainer>
               <Side>
                  <Img 
                     fluid={images.imgDifferentials.childImageSharp.fluid}
                     alt="imagem de torno da oficina da Shiro Usinagens"
                  />
               </Side>               

               <Side className="-content">      
                  <HistoryTitleSection
                     title={dataTitle.sec2.title}
                     subtitle={dataTitle.sec2.subtitle}
                  />
                  <HistoryTextSection>
                     <ListDifferentials>
                        <li><ListIcon />Atendimento com agilidade e qualidade;</li>
                        <li><ListIcon />Preços competitivos com a melhor relação custo x benefício;</li>
                        <li><ListIcon />Trabalhamos com segurança e responsabilidade;</li>
                        <li><ListIcon />Equipe com mais de 30 anos de experiência;</li>
                        <li><ListIcon />Retífica de polia direto na casa de máquinas com torno portátil;</li>
                        <li><ListIcon />Terceirização de serviços de elevadores capaz de agregar valor a sua empresa;</li>
                     </ListDifferentials>
                  </HistoryTextSection>
               </Side>
            </DifferentialsContainer>
         </Section>
         <Section>
            <TeamContainer>
               <TitleSection
                  title={dataTitle.sec3.title}
                  subtitle={dataTitle.sec3.subtitle}
               />
               <AboutTeam />
            </TeamContainer>
         </Section>
         <Footer />
      </Layout>
   )
}

export default AboutPage;
