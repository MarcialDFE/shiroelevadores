import React from "react"
import { useStaticQuery, graphql } from 'gatsby';

import Layout from "../components/Layout";
import SEO from "../components/seo";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Banner from "../components/Banner";

const dataJson = require("../data/data.json")
const dataTopbar = dataJson.topbar
const dataBannerHome = dataJson.banners

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
        andress={dataTopbar[0].andress}
        whatsapp={dataTopbar[0].whatsapp}
      />
      <Header />
      <Banner
        title={dataBannerHome[0].title}
        description={dataBannerHome[0].description}
        action={dataBannerHome[0].action}
        imageFluid={content.imgBanner.childImageSharp.fluid}
        imageAlt={dataBannerHome[0].imageAlt}
        classButton={dataBannerHome[0].classButton}
      />
    </Layout>
  )
};

export default IndexPage;