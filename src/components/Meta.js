import Head from 'next/head';
import React from 'react';
import siteData from '../../siteData';

const Meta = () => {
  return (
    <Head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
      <meta property="og:title" content={`Images of ${siteData.author}`} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteData.websiteUrl} />
      <title>{siteData.websiteName}</title>
    </Head>
  );
};

<Head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
  <meta property="og:title" content={`Images of ${siteData.author}`} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={siteData.websiteUrl} />
  <title>{siteData.websiteName}</title>
</Head>;
export default Meta;
