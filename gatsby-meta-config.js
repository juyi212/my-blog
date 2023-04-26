/**
 * @typedef {Object} Links
 * @prop {string} github Your github repository
 */

/**
 * @typedef {Object} MetaConfig
 * @prop {string} title Your website title
 * @prop {string} description Your website description
 * @prop {string} author Maybe your name
 * @prop {string} siteUrl Your website URL
 * @prop {string} lang Your website Language
 * @prop {string} utterances Github repository to store comments
 * @prop {Links} links
 * @prop {string} favicon Favicon Path
 */

/** @type {MetaConfig} */
const metaConfig = {
  title: "Ari",
  description: `Ari's Blog`,
  author: {
    name: `이주이`,
    nickname: `아리`,
    bio: {
      role: `개발자`,
      description: ["Frontend", "React", "Typescript"],
      birth: "1996.06.25",
      residence: "Seoul, South Korea",
    },
  },

  siteUrl: "https://gatsby-starter-apple.netlify.app",
  lang: "en",
  links: {
    github: "https://github.com/sungik-choi/gatsby-starter-apple",
  },
  favicon: "src/images/icon.png",
}

// eslint-disable-next-line no-undef
module.exports = metaConfig
