import React, { useState } from 'react';
import { ChakraProvider, Grid, Box, Text, Button, Image, Link, Icon, useBreakpointValue, extendTheme, IconButton, VStack, Flex, HStack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Divider } from '@chakra-ui/react';
import AboutMe from './assets/AboutMe pic.png';
import { ArrowBackIcon, ArrowDownIcon, ChevronDownIcon, ChevronRightIcon, HamburgerIcon } from '@chakra-ui/icons'; // Importing HamburgerIcon
import ProjectShowcase from './components/ProjectShowcase';
import projectData from './assets/projects.json';
import aboutMeData from './assets/aboutMeData.json'; // Adjust the path as necessary
import Lifecycle1 from './assets/projectLifecycle.png'; 
import EmailCycle from './assets/LifecycleEmail.png'

import DPA from './assets/projectDpa.png'
const theme = extendTheme({
  breakpoints: {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  },
});
const imageMap: Record<string, any> = {
  '1': Lifecycle1,
  '2': DPA,
  '3': EmailCycle,
};
const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projectData.length) % projectData.length);
  };
  const projectShowcaseRef = React.useRef<HTMLDivElement>(null);

  const scrollToProjectShowcase = () => {
    // Scroll to the ProjectShowcase component
    projectShowcaseRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const responsiveFontSize = {
    fontSize: ['2xl', '3xl', '4xl', '5xl', '6xl'],
  };

  // Responsive padding
  const responsivePadding = {
    p: ['4', '8', '16', '32']
  };


  return (

    <ChakraProvider theme={theme}>
      {/* Entire Page Grid */}
      <Grid
        h="100vh"
        templateColumns={{ sm: '1fr', md: '1fr 1fr' }}
        templateRows="auto 1fr"
      >



        {/* Navigation and Hero Section */}
        <Flex
          as="nav"
          gridRow="1 / 2"
          gridColumn="1 / -1"
          bg="#7551FF"
          color="white"
          justifyContent="space-between"
          alignItems="center"
          px={4}
          py={3}
          position="relative"
        >
          <Text fontSize="lg" fontWeight="bold">SC</Text>
          <Flex>
            <IconButton
              aria-label="Open menu"
              icon={<HamburgerIcon />}
              size="lg"
              variant="ghost"
              display={{ base: 'flex', md: 'none' }}
            />

          </Flex>
        </Flex>


        {/* Text Section */}
        <Flex
          gridRow="2 / 3"
          gridColumn="1 / 2"
          bg="#7551FF"
          color="white"
          p={8}
          direction="column"
          justify="center"
          zIndex="1" // Ensure text content is above the image
        >
          <HStack spacing={4}>
          <Flex
  align="center"

  onClick={scrollToProjectShowcase}
  display="flex" // Adjust as needed for responsiveness
  cursor="pointer" // Make it clear it's clickable
  _hover={{ textDecoration: "underline" }} // Example hover effect
>
          <ArrowDownIcon mr={2} onClick={scrollToProjectShowcase} />
  <Text>Projects</Text>
    </Flex>
{/* General Info */}
            <Box>
              <Text fontSize="lg" textColor={'#FFFFFF'} opacity="0.7">Product Designer</Text>
              <Text {...responsiveFontSize} fontWeight="bold" mb={4}>
                Siobhan Carmody
              </Text>

              {/* About me Text */}
              <Text mb={4} >
                Partnership experience with Altice, AOL, ATmT, Bell, Brightspeed, CenturyLink, Charter, Cox, Mastercard,
                Shaw, T-Mobile, Verizon Wireless, and Visa.During the of summer 2022, I began working on my master's in UXD at Kent State University. Both in and outside of my program, I have created many projects including an illustration system (inspired by Pablo Stanely's Open Peeps) that shows the interchangeable parts of my character. While simple, its purpose is to visually communicate with users beyond a logo.
              </Text>
             
              <Button colorScheme="purple" variant="transparent" rightIcon={<ChevronRightIcon />} onClick={onOpen}>
                More about me
              </Button>



  {/* Modal for "More about me" */}
 <Modal isOpen={isOpen} onClose={onClose} size={'xs'}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>
    <Flex justifyContent="center" width="full">
        <Link
          textColor={'black'}
          href={`${process.env.PUBLIC_URL}/Resume-2.pdf`}// Update with the path to your resume file
          isExternal // If it's an external link, otherwise remove this prop
          download="Siobhans-Resume.pdf" // Suggest a filename for download, optional
        >
          Download Resume
        </Link>
        </Flex>
    </ModalHeader>
    <ModalCloseButton />
    <ModalBody>
      <VStack divider={<Divider borderColor="gray.200" />} spacing={8}>
        <Box>
          <Text fontWeight="bold" mb={2}>Experience</Text>
          {/* Map through experience data */}
          {aboutMeData.experience.map((exp, index) => (
            <Box key={index} mb={4}>
              <Text fontWeight="semibold">{exp.role} at {exp.company}</Text>
              <Text fontSize="sm">{exp.duration}</Text>
              <Text mt={1}>{exp.description}</Text>
            </Box>
          ))}
        </Box>
        <Box>
          <Text fontWeight="bold" mb={2}>Education</Text>
          {/* Map through education data */}
          {aboutMeData.education.map((edu, index) => (
            <Box key={index} mb={4}>
              <Text fontWeight="semibold">{edu.degree}</Text>
              <Text fontSize="sm">{edu.institution}</Text>
              <Text mt={1}>{edu.duration}</Text>
              <Text>{edu.description}</Text>
            </Box>
          ))}
        </Box>
      </VStack>
    </ModalBody>
    <ModalFooter>
      <Button  mr={3} onClick={onClose}>
        Close
      </Button>
    </ModalFooter>
  </ModalContent>
</Modal>





            </Box>
          </HStack>
          {/* Social Icons */}
          <Flex mt={4} justify="center">
            {/* Your social icons here */}
          </Flex>
        </Flex>
        {/* Image Section */}
        <Box
          gridRow="1 / 3"
          gridColumn="2 / 3"
          position="relative"
          width="100%"
          height="100vh"
          bgGradient="linear(to-br, #FFFFFF, #1A365D)"
        >
          <Image
            src={AboutMe}
            position="absolute"
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </Box>

      </Grid>
      <div ref={projectShowcaseRef}>
      <ProjectShowcase
  title={projectData[currentIndex].title}
  description={projectData[currentIndex].description}
  imageUrl={''} // This can now be optional if you always expect projectId to match
  onNext={handleNext}
  onPrev={handlePrev}
  projectId={projectData[currentIndex].id.toString()} // Make sure to convert id to string if it's not already
/>
      </div>
    </ChakraProvider>
  );
}

export default App;
