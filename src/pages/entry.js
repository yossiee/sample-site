import React from "react";
import { Link, graphql } from "gatsby";
import { Col, Row, Card } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo"

const EntryPage = ({ data }) => (
  <Layout>
    <SEO title="エントリー" />
    <Row>
      <Col className="space"></Col>
    </Row>
    <Row>
      <Col className="title-obi">
        <h1 className="h1-font">エントリー</h1>
      </Col>
    </Row>
    <Row>
      <Col className="space"></Col>
    </Row>
    <Row>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <Col xs={12} md={6} key={node.fields.slug}>
        <Card style={{marginTop:`1rem`}}>
          <Card.Body>
            <Card.Title>
                <Link to={`/${node.fields.slug}`}>
                    {node.frontmatter.title}
                </Link>
            </Card.Title>
            <Card.Text>
                {node.excerpt}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
    </Row>
    <Row>
      <Col className="space"></Col>
    </Row>
  </Layout>
);

export default EntryPage;

export const query = graphql`
query MyQuery {
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        excerpt(pruneLength: 50, truncate: true)
        frontmatter {
          title
          slug
          date(formatString: "YYYY年MM月DD日")
        }
        fields {
          slug
        }
      }
    }
  }
}
`
