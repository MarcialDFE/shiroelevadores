import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"

import { BannerSection,
         BannerContainer,
         ServiceListSection,
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

import Layout from "../../components/Layout";
import SEO from "../../components/seo";
import TopBar from "../../components/TopBar";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import TitleSection from "../../objects/TitleSection"
import ComparisonServicePolia from "../../components/ImageComparison"
import PortfolioPolia from "../../components/PortfolioPolia" 
import Footer from "../../components/Footer";

const dataJson = require("../../data/data.json")
const dataTopbar = dataJson.topbar
const dataBannerPolia = dataJson.banners
const dataTitle = dataJson.sectiontitles.polia
const dataLabels = dataJson.labels
const dataMeasures = dataJson.measures

const RetificaPolias = () => {

   const images = useStaticQuery (
      graphql`
         query {
            imgBanner: file(relativePath: { eq: "banner/banner-retifica-polia-tracao.jpg" }) {
               childImageSharp {
                  fluid(maxWidth: 1440) {
                     ...GatsbyImageSharpFluid_tracedSVG
                  }
               }
            }
            imgService: file(relativePath: { eq: "retifica-polias.jpg" }) {
               childImageSharp {
                  fluid(maxWidth: 1440) {
                     ...GatsbyImageSharpFluid_tracedSVG
                  }
               }
            }
            imgAfterLarge: file(relativePath: { eq: "comparison/retifica-polia-depois-large.jpg" }) {
               childImageSharp {
                  fixed(width: 600) {
                     ...GatsbyImageSharpFixed_tracedSVG
                  }
               }
            }
            imgBeforeLarge: file(relativePath: { eq: "comparison/retifica-polia-antes-large.jpg" }) {
               childImageSharp {
                  fixed(width: 600) {
                     ...GatsbyImageSharpFixed_tracedSVG
                  }
               }
            }
            imgAfterSmall: file(relativePath: { eq: "comparison/retifica-polia-depois-small.jpg" }) {
               childImageSharp {
                  fixed(width: 300) {
                     ...GatsbyImageSharpFixed_tracedSVG
                  }
               }
            }
            imgBeforeSmall: file(relativePath: { eq: "comparison/retifica-polia-antes-small.jpg" }) {
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
         <SEO title="Retífica de Polias de Tração"/>
         <TopBar 
            andress={dataTopbar.andress}
            whatsapp={dataTopbar.whatsapp}
         />
         <Header />
         <BannerSection>
            <BannerContainer>
               <Banner
                  title={dataBannerPolia.polia.title}
                  description={dataBannerPolia.polia.description}
                  imageFluid={images.imgBanner.childImageSharp.fluid}
                  imageAlt={dataBannerPolia.polia.imageAlt}
                  classButton={dataBannerPolia.polia.classButton}
               />
            </BannerContainer>
         </BannerSection>
         <ServiceListSection>
            <ServicesListContainer>
               <Side className="-content">
                  <ServicesTitleSection
                     title={dataTitle.sec1.title}
                     subtitle={dataTitle.sec1.subtitle}
                  />
                  <ServicesTextSection>
                     <ListServices>
                        <li><ListIcon />
                           Torno portátil para retífica de polias de tração executada direto na casa de máquinas com a mesma qualidade do torno convencional;
                        </li>
                        <li><ListIcon />
                           O processo de retífica é executado sem desmontagem e nem retirada das polias de tração diminuindo o tempo de execução;
                        </li>
                        <li><ListIcon />
                           Com o torno portátil evitamos operações complexas de transporte de máquinas.
                        </li>
                        <li><ListIcon />
                           Resolve o problema com a difícil remoção de polias grandes, principalmente em lugares apertados e pouco acessíveis;
                        </li>
                     </ListServices>
                  </ServicesTextSection>
               </Side>
               <Side>
                  <Img 
                     fluid={images.imgService.childImageSharp.fluid}
                     alt="imagem de serviço de retífica de polia de tração da Shiro Elevadores" 
                  />
               </Side>
            </ServicesListContainer>
         </ServiceListSection>
         <BeforeAfterSection>
            <BeforeAfterContainer>
               <SideComparison>
                  <ComparisonServicePolia
                     className=""
                     imgAfter={smallImage ? images.imgAfterSmall.childImageSharp.fixed : images.imgAfterLarge.childImageSharp.fixed}
                     altAfter="imagem após o serviço de retífica de polia de tração"
                     labelAfter={dataLabels.after}
                     imgBefore={smallImage ? images.imgBeforeSmall.childImageSharp.fixed : images.imgBeforeLarge.childImageSharp.fixed}
                     altBefore="imagem antes do serviço de retífica de polia de tração"
                     labelBefore={dataLabels.before}
                     widthComponent={dataMeasures.width}
                     heightComponent={dataMeasures.height}
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
                  <PortfolioPolia />
               </GalleryContainer>
            </PortfolioContainer>
         </PortfolioSection>
         <Footer />
      </Layout>
   )
}

export default RetificaPolias;
