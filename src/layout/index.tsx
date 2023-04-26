import React, { ReactNode } from "react"

import { rhythm } from "../utils/typography"

import "./index.scss"

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(0.5)} 0`,
        }}
      >
        {children}
      </div>
    </>
  )
}
