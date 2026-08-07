import React from "react"

import Layout from "../components/Layout";
import SEO from "../components/seo"

const IndexPage = ({ data }) => {

  return (
    <Layout>
      <SEO
        lang='pt-BR'
        title="Home"
      />
      <div>Home page</div>
    </Layout>
  )
};

export default IndexPage;