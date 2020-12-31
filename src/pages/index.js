import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import ProfileImg from "../images/profile.png"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>やっほー、こんにちは</h1>
    <p>サンプルサイトへようこそ。</p>
    <p>当サイトは、Gatsby を使って構築してみました。</p>
    <div style={{ maxWidth: `100px`, marginBottom: `1.45rem` }}>
      <img src={ProfileImg} alt="プロフィール画像" />
    </div>
    <Link to="/entry/">エントリ一覧</Link> <br />
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
