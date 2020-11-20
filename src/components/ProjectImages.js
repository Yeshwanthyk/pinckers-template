import React from 'react';
import { Box, Flex, Image as CImage } from '@chakra-ui/react';

const ProjectImages = ({
  imageNames,
  photoIndex,
  projectName,
  projectDesc,
  imageNum,
  setphotoIndex,
}) => {
  const nextImage = () => {
    if (!(photoIndex > imageNum - 2)) {
      setphotoIndex(photoIndex + 1);
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
          mx={[0, 8]}
          my={[1, 4, 4, 0]}
          cursor="pointer"
          onClick={nextImage}
        >
          <CImage
            src={imageNames[photoIndex]}
            alt={`images for project ${projectName}`}
            objectFit="cover"
          />
        </Box>
      ) : (
        <Box
          maxW={['70vw', '70vw', '60vw', '65vw']}
          mx={[0, 8]}
          my={[1, 4, 4, 0]}
          cursor="pointer"
          onClick={nextImage}
        >
          <CImage
            src={imageNames[photoIndex]}
            objectFit="cover"
            alt={`images for project ${projectName}`}
          />
        </Box>
      )}

      {photoIndex === 0 && (
        <Box alignSelf="center">
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
