module.exports = {
    plugins: [
      {
        resolve: "gatsby-plugin-seo",
        options: {
          siteName: "Example Company",
          defaultSiteImage: "/img/logo.png",
          siteUrl: "https://example.com",
          twitterCreator: "@twitterhandle",
          twitterSite: "@twitterhandle",
          globalSchema: `{
              "@type": "WebSite",
              "@id": "https://example.com/#website",
              "url": "https://example.com/",
              "name": "Example Site Title",
              "publisher": {
                "@id": "https://example.com/about/#organization"
              },
              "image": {
                "@type": "ImageObject",
                "@id": "https://example.com/#logo",
                "url": "https://example.com/img/logo.png",
                "caption": "Example Company Logo"
              }
            }`
        }
      }
    ]
  };