import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ({data}) => (
  <Layout>
    <section>
      <h2>こにごはん</h2>
      <Posts data={data} />
    </section>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

const Posts = ({ data }) => {
  return (
    <div>
      {data.allWordpressPost.edges.map(({ node }) => (
        <div className="post-item" key={node.id}>
          <time>{node.date}</time>
          <p>
            <Link to={node.slug}>{node.title}</Link>
          </p>
        </div>
      ))}
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query MyFiles {
    allWordpressPost {
      edges {
        node {
          id,
          slug,
          title,
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`;