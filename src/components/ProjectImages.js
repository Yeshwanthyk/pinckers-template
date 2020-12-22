import React from 'react';
import Image from 'next/image';
import { Box, Flex, Image as CImage } from '@chakra-ui/react';

const ProjectImages = ({
  imageNames,
  photoIndex,
  projectName,
  projectDesc,
  imageNum,
  imageSizes,
  setphotoIndex,
}) => {
  const nextImage = () => {
    if (!(photoIndex > imageNum - 2)) {
      setphotoIndex(photoIndex + 1);
    } else {
      setphotoIndex(0);
    }
  };

  return (
    <Flex
      flexDirection={['column', 'column', 'column', 'row']}
      align="center"
      justify="center"
    >
      {photoIndex === 0 ? (
        <Box
          maxW={['60vw', '60vw', '50vw', '55vw']}
          mx={[2, 8]}
          my={[1, 4, 4, 0]}
          cursor="pointer"
          onClick={nextImage}
        >
          <Image
            src={imageNames[photoIndex]}
            alt={`images for project ${projectName}`}
            width={imageSizes[photoIndex].width}
            height={imageSizes[photoIndex].height}
            key={imageNames[photoIndex]}
          />
        </Box>
      ) : (
        <Box
          maxW={['70vw', '70vw', '60vw', '65vw']}
          mx={[2, 8]}
          my={[1, 4, 4, 0]}
          cursor="pointer"
          onClick={nextImage}
        >
          <Image
            src={imageNames[photoIndex]}
            width={imageSizes[photoIndex].width}
            height={imageSizes[photoIndex].height}
            alt={`images for project ${projectName}`}
            key={imageNames[photoIndex]}
          />
        </Box>
      )}

      {photoIndex === 0 && (
        <Box alignSelf="center" mb="auto">
          <Box
            textTransform="capitalize"
            my={1}
            fontWeight={'bold'}
            fontSize={['m', 'm', 'xl']}
          >
            {projectName}
          </Box>
          <Box maxW={['50vw']} fontWeight={'normal'} fontSize={['xs', 'sm']}>
            {projectDesc}
          </Box>
        </Box>
      )}
    </Flex>
  );
};

export default ProjectImages;
