import siteData from './siteData';

const title = siteData.websiteName;
const description = siteData.description;
const SEO = {
  title,
  description,
  canonical: siteData.websiteUrl,
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: siteData.websiteUrl,
    title,
    description,
    images: [
      {
        url: `${siteData.websiteUrl}${siteData.mainImage}`,
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
};
export default SEO;
