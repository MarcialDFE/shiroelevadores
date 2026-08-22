import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"

import { BannerSection,
         BannerContainer,
         ServiceListection,
         ServicesListContainer,
         Side,
         ServicesTitleSection,
         ServicesTextSection,
         ListServices,
         ListIcon,
         BeforeAfterSection,
         BeforeAfterContainer,
         BeforeAfterTitleSection,
         BeforeAfterTextSection,
         SideComparison,
         PortfolioSection,
         PortfolioContainer,
         GalleryContainer } from "./styles";

import { labels, measures, services } from "./content"

import Layout from "../../components/Layout";
import SEO from "../../components/seo";
import TopBar from "../../components/TopBar";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Section from "../../objects/Section";
import TitleSection from "../../objects/TitleSection"
import ComparisonServiceMechanical from "../../components/ImageComparison"
import PortfolioMecanica from "../../components/PortfolioMecanica" 
import Footer from "../../components/Footer";

const dataJson = require("../../data/data.json")
const dataTopbar = dataJson.topbar
const dataBannerRepMec = dataJson.banners
const dataTitle = dataJson.sectiontitles.mecanica

const ReparosMecanicos = () => {
   
   const images = useStaticQuery (
      graphql`
         query {
            imgBanner: file(relativePath: { eq: "banner/banner-reparos-mecanicos.jpg" }) {
               childImageSharp {
                  fluid(maxWidth: 1440) {
                     ...GatsbyImageSharpFluid_tracedSVG
                  }
               }
            }
            imgService: file(relativePath: { eq: "reparos-mecanicos.jpg" }) {
               childImageSharp {
                  fluid(maxWidth: 1440) {
                     ...GatsbyImageSharpFluid_tracedSVG
                  }
               }
            }
            imgAfterLarge: file(relativePath: { eq: "comparison/reparo-mecanico-depois-large.jpg" }) {
               childImageSharp {
                  fixed(width: 600) {
                     ...GatsbyImageSharpFixed_tracedSVG
                  }
               }
            }
            imgBeforeLarge: file(relativePath: { eq: "comparison/reparo-mecanico-antes-large.jpg" }) {
               childImageSharp {
                  fixed(width: 600) {
                     ...GatsbyImageSharpFixed_tracedSVG
                  }
               }
            }
            imgAfterSmall: file(relativePath: { eq: "comparison/reparo-mecanico-depois-small.jpg" }) {
               childImageSharp {
                  fixed(width: 300) {
                     ...GatsbyImageSharpFixed_tracedSVG
                  }
               }
            }
            imgBeforeSmall: file(relativePath: { eq: "comparison/reparo-mecanico-antes-small.jpg" }) {
               childImageSharp {
                  fixed(width: 300) {
                     ...GatsbyImageSharpFixed_tracedSVG
                  }
               }
            }
         }
      `
   )

   let defaultWidth
   let smallImage = false

   if (typeof window !== `undefined`) {
      defaultWidth = window.innerWidth
   }

   const useWindowSize = () => {
      const [dimensions, setDimensions] = useState(defaultWidth)

      useEffect(() => {
         const handler = () => setDimensions(window.innerWidth)
         window.addEventListener(`resize`, handler)
         return () => window.removeEventListener(`resize`, handler)
      }, [])

      return dimensions
   }

   let getWidthWindow = useWindowSize()

   if (getWidthWindow < 768) {
      smallImage = true
   } else if (getWidthWindow >= 900 && getWidthWindow <= 1200) {
      smallImage = true
   } else {
      smallImage = false
   }

   return (
      <Layout>
         <SEO title="Reparos Mecânicos"/>
         <TopBar 
            andress={dataTopbar.andress}
            whatsapp={dataTopbar.whatsapp}
         />
         <Header />
         <BannerSection>
            <BannerContainer>
               <Banner
                  title={dataBannerRepMec.mecanica.title}
                  description={dataBannerRepMec.mecanica.description}
                  imageFluid={images.imgBanner.childImageSharp.fluid}
                  imageAlt={dataBannerRepMec.mecanica.imageAlt}
                  classButton={dataBannerRepMec.mecanica.classButton}
               />
            </BannerContainer>
         </BannerSection>
         <ServiceListection>
            <ServicesListContainer>
               <Side className="-content">
                  <ServicesTitleSection
                     title={dataTitle.sec1.title}
                     subtitle={dataTitle.sec1.subtitle}
                  />
                  <ServicesTextSection>
                     <ListServices>
                        <li><ListIcon />
                           Troca de cabos e polias de tração. Instalação de novas máquinas;
                        </li>
                        <li><ListIcon />
                           Máquinas de tração, motores, freios: eliminação de ruídos, vazamentos e ajustes de folgas;
                        </li>
                        <li><ListIcon />
                           Limitador de velocidade: serviços de recondicionamento, aferição e trocas do conjunto;
                        </li>
                        <li><ListIcon />
                           Retífica da polia de tração, recondicionamento de polias, desvios e eixos;
                        </li>
                        <li><ListIcon />
                           Alinhamento de guias, troca das corrediças, encurtamento, equalização de cabos de tração;
                        </li>
                        <li><ListIcon />
                           Elevadores hidráulicos: reparo dos pistões e geral;
                        </li>
                     </ListServices>
                  </ServicesTextSection>
               </Side>
               <Side>
                  <Img 
                     fluid={images.imgService.childImageSharp.fluid}
                     alt="imagem de serviços de reparo mecânico da Shiro Usinagens" 
                  />
               </Side>
            </ServicesListContainer>
         </ServiceListection>
         <BeforeAfterSection>
            <BeforeAfterContainer>
               <SideComparison>
                  <ComparisonServiceMechanical
                     className=""
                     imgAfter={smallImage ? images.imgAfterSmall.childImageSharp.fixed : images.imgAfterLarge.childImageSharp.fixed}
                     altAfter="imagem de depois"
                     labelAfter={labels.after}
                     imgBefore={smallImage ? images.imgBeforeSmall.childImageSharp.fixed : images.imgBeforeLarge.childImageSharp.fixed}
                     altBefore="imagem de antes"
                     labelBefore={labels.before}
                     widthComponent={measures.width}
                     heightComponent={measures.height}
                     small={smallImage}
                  />
               </SideComparison>
               <Side className="-content">
                  <BeforeAfterTitleSection
                     title={dataTitle.sec2.title}
                     subtitle={dataTitle.sec2.subtitle}
                     className="-inverse"
                  />
                  <BeforeAfterTextSection >
                     <p>Exemplo do antes e depois em serviço de reparo no motor de tração realizado pela Shiro Usinagens.</p>
                     <p>Foi trocado lorem ipsum lorem ipsum e ajustado lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.</p>
                  </BeforeAfterTextSection>
               </Side>
            </BeforeAfterContainer>
         </BeforeAfterSection>
         <PortfolioSection>
            <PortfolioContainer>
               <TitleSection
                  title={dataTitle.sec3.title}
                  subtitle={dataTitle.sec3.subtitle}
               />
               <GalleryContainer>
                  <PortfolioMecanica />
               </GalleryContainer>
            </PortfolioContainer>
         </PortfolioSection>
         <Footer />
      </Layout>
   )
}

export default ReparosMecanicos;
