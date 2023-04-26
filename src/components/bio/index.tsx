import ArrowLink from "components/icon/arrow"
import React from "react"
// import Image from "gatsby-image"

import "./index.scss"

const Bio = () => {
  return (
    <div className="bio">
      <div>
        {/* <Image /> */}
        <div className="author-introduction">
          <h2>JUYI-LEE</h2>
          <p>* Front-end Developer</p>
          <p>* I’m interested in Javascript, Typescript, ReactJS, and NextJS</p>
          More about me <ArrowLink />
        </div>
      </div>
    </div>
  )
}

export default Bio
