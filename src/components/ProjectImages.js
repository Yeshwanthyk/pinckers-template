import React from 'react';
import { Box, Flex, Image as CImage } from '@chakra-ui/core';

const ProjectImages = ({
  imageNames,
  photoIndex,
  projectName,
  projectDesc,
}) => {
  return (
    <Flex flexDirection={['column', 'column', 'column', 'row']}>
      {photoIndex === 0 ? (
        <Box maxW={['60vw', '60vw', '50vw', '55vw']} mx={8} my={[4, 4, 4, 0]}>
          <CImage src={imageNames[photoIndex]} objectFit="cover" />
        </Box>
      ) : (
        <Box maxW={['70vw', '70vw', '60vw', '65vw']} mx={8} my={[4, 4, 4, 0]}>
          <CImage src={imageNames[photoIndex]} objectFit="cover" />
        </Box>
      )}

      {photoIndex === 0 && (
        <Box>
          <Box
            textTransform="capitalize"
            mb={4}
            fontWeight={'bold'}
            fontSize={['sm', 'base', 'base']}
          >
            {projectName}
          </Box>
          <Box
            maxW={['50vw']}
            fontWeight={'normal'}
            fontSize={['0.5rem', '0.75rem']}
          >
            {projectDesc}
          </Box>
        </Box>
      )}
    </Flex>
  );
};

export default ProjectImages;
