import React from 'react';
import siteData from '../../siteData';
import { NextSeo } from 'next-seo';

const Meta = () => {
  return (
    <NextSeo
      title={siteData.websiteName}
      description={siteData.description}
      canonical={siteData.websiteUrl}
      openGraph={{
        url: siteData.websiteUrl,
        title: siteData.websiteName,
        description: siteData.description,
        images: [
          {
            url: siteData.mainImage,
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
          },
        ],
        site_name: siteData.websiteUrl,
      }}
      twitter={{
        handle: `@${siteData.twitter}`,
        site: siteData.websiteUrl,
        cardType: 'summary_large_image',
      }}
    />
  );
};

export default Meta;
