import { Nav } from "components/nav"
import useSiteMetadata from "hooks/useSiteMetaData"
import React from "react"
import "./index.scss"

export const Layout = ({}) => {
  const { title } = useSiteMetadata()

  return (
    <React.Fragment>
      <Nav title={title} />
      {/* <Head /> */}
      {/* <Top title={title} location={location} rootPath={rootPath} /> */}
      {/* <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <ThemeSwitch />
        <Header title={title} location={location} rootPath={rootPath} />
        {children}
        <Footer />
      </div> */}
    </React.Fragment>
  )
}
