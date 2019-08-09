import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import blogStyles from "./blog.module.scss"
import Head from "../components/head"

function Blog() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
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
        {data.allContentfulBlogPost.edges.map(blog => (
          <li className={blogStyles.post} key={blog.node.title}>
            <Link to={`/blog/${blog.node.slug}`}>
              <h2>{blog.node.title}</h2>
              <p>{blog.node.publishedDate}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default Blog
