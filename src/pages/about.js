import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About ページ" />
    <h1>about ページです</h1>
    <p>about ページへようこそ</p>
    <Link to="/page-2">セカンドページに行く</Link>
  </Layout>
)

export default AboutPage
