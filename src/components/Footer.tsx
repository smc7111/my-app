import React from 'react';
import { Box, Divider, VStack, Button, Link, Text, HStack, Center, Flex } from '@chakra-ui/react';

const Footer = () => {
  return (
    <footer>
     <Box bg='#98B5D8' textAlign="center" py={4} mt={20}> {/* Set background color and center content */}
    <Divider borderColor="#333333" borderWidth="1.5px" borderRadius="full" w="85%" mx="auto" my={4} /> {/* Adjusted margin for visibility */}
    <Flex justifyContent="center" alignItems="center"> {/* Center content */}
      <Box color="black" textAlign="center" p={1}>
        <Button color="#333333" variant="solid" mt={4} _hover={{ textColor: 'white', bg: 'gray.700' }}>
          <Link textColor="#33333" href={`${process.env.PUBLIC_URL}/Resume-2.pdf`} isExternal download="Siobhans-Resume.pdf" _hover={{ textColor: 'white', textDecoration: 'none' }}>
            Resume
          </Link>
        </Button>
        <Button color="#333333" variant="solid" mt={4} ml={10} _hover={{ textColor: 'white', bg: 'gray.700' }}>
          <a href="https://www.linkedin.com/in/smc7111/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </Button>
        <Text mt={4} ml={1}>Visually designed by Siobhan</Text>
      </Box>
    </Flex>
  </Box>
    </footer>
  );
};
export default Footer;
