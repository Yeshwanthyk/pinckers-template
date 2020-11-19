import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import siteData from '../../siteData';

const MainGallery = () => {
  return (
    <>
      <Box>
        <Image src={siteData.mainImage} />
      </Box>
    </>
  );
};

export default MainGallery;
