import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import blogStyles from "./blog.module.scss"

function Blog() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div>Blog page</div>
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map(blog => (
          <li className={blogStyles.post} key={blog.node.frontmatter.title}>
            <Link to={`/blog/${blog.node.fields.slug}`}>
              <h2>{blog.node.frontmatter.title}</h2>
              <p>{blog.node.frontmatter.date}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default Blog
