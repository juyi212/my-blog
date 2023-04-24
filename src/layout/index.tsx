import React, { ReactNode } from "react"

import NavBar from "components/nav"
import useSiteMetadata from "hooks/useSiteMetaData"
import { rhythm } from "../utils/typography"

import "./index.scss"

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const { title } = useSiteMetadata()

  return (
    <>
      <NavBar title={title} />
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} 0`,
        }}
      >
        {children}
      </div>
    </>
  )
}
