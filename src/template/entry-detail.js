import React from "react";
import { Link, graphql } from "gatsby";
import { Col, Row, Card } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo"

const EntryDetail = ({ data }) => {
  const entry = data.MarkdownRemark
  return (
    <Layout>
      <SEO title={entry.frontmatter.title} />
      <Row>
        <Col className="space"></Col>
      </Row>
      <Row>
        <Col className="title-obi">
        <h1 className="h1-font">{entry.frontmatter.title}</h1>
        </Col>
      </Row>
      <Row>
        <Col className="space"></Col>
      </Row>
      <Row>
        <Col className="space"></Col>
      </Row>
      <Row>
        <Col>
          <div dangerouslySetInnerHTML={{ __html: entry.html }} />
        </Col>
      </Row>
      <Row>
        <Col className="space"></Col>
      </Row>
    </Layout>
  )
}

export default EntryDetail;

export const query = graphql`
query($slug: String!) {
  markdownRemark(fields: { slug: {eq: $slug} }) {
    html
    frontmatter {
      date(formatString: "YYYY年MM月DD日")
      title
    }
  }
}
`
