import React from "react"

import NavBar from "components/nav"
import useSiteMetadata from "hooks/useSiteMetaData"
import { rhythm } from "../utils/typography"

import "./index.scss"

export const Layout = ({}) => {
  const { title } = useSiteMetadata()

  return (
    <React.Fragment>
      <NavBar title={title} />
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} 0`,
        }}
      ></div>
    </React.Fragment>
  )
}
