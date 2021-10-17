/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { Helmet } from "react-helmet"

function Seo({ description, keyword, title, logo }) {

  return (
    <Helmet>

      <meta property="og:type" content="article" />
      <meta property="og:title" content={title + ""} />
      <meta property="og:url" content={window.location.href} />

      <meta property="og:description" content={description + ""} />
      <meta name="og:keyword" content={keyword} />
      <meta name="twitter:title" content={title + ""} />

      <meta name="twitter:description" content={description + ""} />

      <meta name="description" content={description + ""} />
      <meta name="robots" content="index,follow" />
      {logo &&
        <link rel="apple-touch-icon" href={logo} />
      }    {logo &&
        <meta property="og:image" itemProp="image" content={logo} />
      }



      <title>{title}</title>

    </Helmet>
  )

}

export default Seo
