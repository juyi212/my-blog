import React from "react"
import { Link } from "gatsby"

import "./index.scss"

const NavBar = ({ title }: any) => {
  return (
    <div className="top">
      <Link to={`/`} className="link">
        {title}.com
      </Link>
      <div className="menu">
        <Link to={`/posts`} className="link">
          posts
        </Link>
        <Link to={`/about`} className="link">
          about
        </Link>
      </div>
    </div>
  )
}

export default NavBar
