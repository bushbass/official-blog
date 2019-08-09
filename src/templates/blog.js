import React from "react"
import { graphql } from "gatsby"
import Head from "../components/head"

import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      title
      date(formatString: "MMMM Do YYYY")
      content
    }
  }
`

function Blog(props) {
  return (
    <Layout>
      <Head title={props.data.wordpressPost.title} />
      <h1>{props.data.wordpressPost.title}</h1>
      <p>{props.data.wordpressPost.date}</p>
      {props.data.wordpressPost.content}
    </Layout>
  )
}

export default Blog
