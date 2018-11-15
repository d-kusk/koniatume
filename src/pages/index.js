import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ({data}) => (
  <Layout>
    <section>
      <h2>こにごはん</h2>
      <Posts data={data} />
    </section>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

const Posts = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.allWordpressPost.edges.map(({ node }) => (
        <div className="post-item">
          <p>{node.title}</p>
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
          title
        }
      }
    }
  }
`;