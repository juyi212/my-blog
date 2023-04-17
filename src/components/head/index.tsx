import React from "react"
import { StaticQuery, graphql } from "gatsby"

export function Head() {
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data: any) => (
        <header>
          {data.site.siteMetadata ? data.site.siteMetadata.title : "없나"}
        </header>
      )}
    />
  )
}

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
