import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

export const Head = ({ description, lang, title }: any) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description

        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                property: "og:author",
                content: data.site.siteMetadata.author.name,
              },
              {
                property: "og:author",
                content: data.site.siteMetadata.author.nickname,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },

              {
                name: `twitter:description`,
                content: metaDescription,
              },
            ]}
          />
        )
      }}
    ></StaticQuery>
  )
}

Head.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author {
          name
          nickname
        }
      }
    }
  }
`

export default Head
