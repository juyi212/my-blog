import Head from 'next/head'

const CustomHead = () => {
  return (
    <Head>
      <meta property="og:title" content="GEE Blog" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        // content="학습과 경험을 기록하고 있습니다."
      />
      <meta
        property="og:url"
        // content="https://maintainhoon.vercel.app"
      />
      <meta
        property="og:image"
        // content="https://maintainhoon.vercel.app/images/metaLogo.png"
      />
    </Head>
  )
}

export default CustomHead
