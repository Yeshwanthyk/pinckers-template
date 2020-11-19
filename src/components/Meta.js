import Head from 'next/head';
import React from 'react';
import siteData from '../../siteData';

const Meta = () => {
  return (
    <Head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={siteData.websiteName}></meta>
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="../assets/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="../assets/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="../assets/favicon-16x16.png"
      />
      <meta property="og:site_name" content={siteData.websiteName} />
      <meta
        property="og:title"
        content={`Images of ${siteData.author}`}
        key="ogtitle"
      />
      <meta
        property="og:description"
        content={siteData.websiteName}
        key="ogdesc"
      ></meta>

      <title>{siteData.websiteName}</title>

      {/* Twitter */}
      <meta name="twitter:card" content="summary" key="twcard" />
      <meta name="twitter:creator" content={siteData.twitter} key="twhandle" />

      {/* Open Graph */}
      <meta property="og:url" content={siteData.websiteUrl} key="ogurl" />
      <meta property="og:image" content={siteData.mainImage} key="ogimage" />
      <meta
        property="og:site_name"
        content={siteData.websiteName}
        key="ogsitename"
      />
      <meta property="og:title" content={siteData.websiteName} key="ogtitle" />
      <meta
        property="og:description"
        content={siteData.websiteName}
        key="ogdesc"
      />
    </Head>
  );
};

export default Meta;
