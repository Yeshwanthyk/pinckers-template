import React from 'react';
import { Flex, Box } from '@chakra-ui/core';

const PhotoCounter = ({ imageNum, photoIndex, setphotoIndex }) => {
  const nextImage = () => {
    if (!(photoIndex > imageNum - 2)) {
      setphotoIndex(photoIndex + 1);
    }
  };

  const prevImage = () => {
    if (photoIndex > 0) {
      setphotoIndex(photoIndex - 1);
    }
  };
  return (
    <Flex mb={2}>
      <Box mr={2} ml={8} fontSize={['xs']}>{`${
        photoIndex + 1
      } of ${imageNum}`}</Box>
      <Box as="button" mr={1} fontSize={['xs']} onClick={prevImage}>
        Previous
      </Box>
      <Box mr={1} fontSize={['xs']}>
        /
      </Box>
      <Box as="button" fontSize={['xs']} onClick={nextImage}>
        Next
      </Box>
    </Flex>
  );
};

export default PhotoCounter;
