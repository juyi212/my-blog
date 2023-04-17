import { useStaticQuery, graphql } from "gatsby"

interface SiteMetaData {
  site: {
    siteMetadata: {
      title: string
      description: string
      author: string
    }
  }
}

const useSiteMetadata = () => {
  const { site } = useStaticQuery<SiteMetaData>(
    graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )
  return site.siteMetadata
}

export type UseSiteMetaDataReturnType = ReturnType<typeof useSiteMetadata>

export default useSiteMetadata
