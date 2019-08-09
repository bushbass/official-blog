import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import footerStyles from "./footer.module.scss"

function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          twitter
          author
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          &copy; {new Date().getFullYear()} {data.site.siteMetadata.author}.{" "}
          <a href="https://twitter.com/{data.site.siteMetadata.twitter}">
            @{data.site.siteMetadata.twitter}
          </a>
          <br /> Get in touch if you want to know more or to hire me!!
        </li>
      </ul>
    </footer>
  )
}

export default Footer
