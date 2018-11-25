import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SinglePage = ({ data, pathContext }) => {
  console.log(data);
  return (
    <Layout>
      <Post data={data} />
      <Link to="/">Topへ戻る</Link>
    </Layout>
  )
}

const Post = ({ data }) => {
  const post = data.wordpressPost
  return (
    <div>
      <article className="article">
        <header className="article-header">
          <h1>{post.title}</h1>
          <time>{post.date}</time>
          {post.categories.map((category) => {
            return <div key={category.id}>{category.name}</div>
          })}
        </header>
        <div className="article-body" style={{marginTop: '40px'}}>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </article>
    </div>
  )
}

export default SinglePage

export const pageQuery = graphql`
  query ($id: String!) {
    wordpressPost(id: {eq: $id}) {
      wordpress_id,
      title,
      date(formatString: "MMMM DD, YYYY"),
      categories {
        id,
        name
      },
      tags {
        id,
        name
      },
      content,
    }
  }
`;