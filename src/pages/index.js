import React from "react"

import Layout from "../components/Layout";
import SEO from "../components/seo"
import TopBar from "../components/TopBar"

const IndexPage = ({ data }) => {

  return (
    <Layout>
      <SEO
        lang='pt-BR'
        title="Home"
      />
      <TopBar 
        andress={"Rua Coronel Fawcett, 454 – Vila Morais – São Paulo-SP"}
        whatsapp={"(11) 94901-5967 / (11) 98763-9248"}
      />
    </Layout>
  )
};

export default IndexPage;