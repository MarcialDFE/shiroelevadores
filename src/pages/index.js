import React from "react"
import { useStaticQuery, graphql } from 'gatsby';

import Layout from "../components/Layout";
import SEO from "../components/seo";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ServiceCards from "../components/ServiceCards"
import TitleSection from "../objects/TitleSection"

import MemberCards from "../components/MemberCards"
import TextSection from "../objects/TextSection"

import { 
  ServiceSection, 
  ServiceContainer,
  TeamSection, 
  TeamContainer,
  WrapTeam } from "./styles"

const dataJson = require("../data/data.json")
const dataTopbar = dataJson.topbar
const dataBannerHome = dataJson.banners
const dataTitle = dataJson.sectiontitles.home

const IndexPage = () => {

  const content = useStaticQuery (
    graphql`
      query {
        # imgPortfolio: allFile(filter: {relativeDirectory: {eq: "portfolio"}}) {
        #   edges {
        #     node {
        #       childImageSharp {
        #         sizes(maxHeight: 500) {
        #           ...GatsbyImageSharpSizes
        #         }
        #       }
        #     }
        #   }
        # }
        imgBanner: file(relativePath: { eq: "banner/banner-home.jpg" }) {
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
      <SEO
        lang='pt-BR'
        title="Home"
      />
      <TopBar 
        andress={dataTopbar.andress}
        whatsapp={dataTopbar.whatsapp}
      />
      <Header />
      <Banner
        title={dataBannerHome.home.title}
        description={dataBannerHome.home.description}
        action={dataBannerHome.home.action}
        imageFluid={content.imgBanner.childImageSharp.fluid}
        imageAlt={dataBannerHome.home.imageAlt}
        classButton={dataBannerHome.home.classButton}
      />
      <ServiceSection>
        <ServiceContainer>
          <TitleSection
            title={dataTitle.sec1.title}
            subtitle={dataTitle.sec1.subtitle}
          />
          <ServiceCards />
        </ServiceContainer>
      </ServiceSection>
      <TeamSection>
        <TeamContainer>
          <WrapTeam>
            <TitleSection
              title={dataTitle.sec2.title}
              subtitle={dataTitle.sec2.subtitle}
            />
            <TextSection>
              Nossa equipe é formada por profissionais com mais de 30 anos de experiência em usinagem, manutenção, recondicionamento, diagnósticos, com larga experiência industrial. No segmento de elevadores com destaque à montagens, manutenções mecânicas e usinagem em geral.
            </TextSection>
          </WrapTeam>
          <MemberCards />
        </TeamContainer>
      </TeamSection>

    </Layout>
  )
};

export default IndexPage;