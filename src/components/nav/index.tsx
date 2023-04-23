import React from "react"
import { Link } from "gatsby"
import { GitHubIcon } from "../social-share/index"

import "./index.scss"

const NavBar = ({ title }: any) => {
  return (
    <div className="top">
      <Link to={`/`} className="link">
        {title}
      </Link>
      <GitHubIcon />
    </div>
  )
}

export default NavBar
