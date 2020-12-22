import React from 'react';
import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import siteData from '../../siteData';
import path from 'path';

const MainGallery = () => {
  return (
    <>
      <Box>
        <Image
          src={siteData.mainImage}
          width={siteData.mainImageDimensions.width}
          height={siteData.mainImageDimensions.height}
          alt="feature image"
        />
      </Box>
    </>
  );
};

export default MainGallery;
