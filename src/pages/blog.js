import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import blogStyles from "./blog.module.scss"
import Head from "../components/head"

function Blog() {
  const data = useStaticQuery(graphql`
    query {
      allWordpressPost(sort: { fields: date, order: DESC }) {
        edges {
          node {
            title
            slug
            date(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <div>Blog page</div>
      <ol className={blogStyles.posts}>
        {data.allWordpressPost.edges.map(blog => (
          <li className={blogStyles.post} key={blog.node.title}>
            <Link to={`/blog/${blog.node.slug}`}>
              <h2>{blog.node.title}</h2>
              <p>{blog.node.date}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default Blog
