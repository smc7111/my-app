import React, { useState } from 'react';
import {
  ChakraProvider, Grid, Box, Text, Button, Image, Link, IconButton, VStack, Flex, HStack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Divider, useDisclosure, extendTheme
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon, ArrowUpIcon, DownloadIcon } from '@chakra-ui/icons';
import ProjectShowcase from './components/ProjectShowcase';
import projectData from './assets/projects.json';
import AboutMePic from './assets/AboutMe pic.png'; // Ensure this is the correct path to the image
import aboutMeData from './assets/aboutMeData.json'; // Adjust the path as necessary
import { isTemplateMiddle } from 'typescript';

const theme = extendTheme({
  breakpoints: {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  },
});

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // This now represents the index of the project in the projectData array
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Function to cycle to the next project
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectData.length);
  };

  

  // Function to cycle to the previous project
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projectData.length) % projectData.length);
  };

  const scrollToMiddle = () => {
    // Calculate the middle of the page by dividing the total document height by 2
    const middle = document.documentElement.scrollHeight / 2 -90;
  
    window.scrollTo({
      top: middle, // Set the scroll position to the calculated middle
      behavior: 'smooth', // Enable smooth scrolling
    });
  };

  return (
    <ChakraProvider theme={theme}>
      {/* Page Layout */}
  <Grid templateColumns={{ sm: '1fr', md: '1fr 1fr' }} templateRows="auto 1fr" h="100vh">
  {/* Hero Section */}
  <Flex
    as="nav"
    gridRow="1 / 2"
    gridColumn="1 / 2"
    bg="#00A3FF"
    color="white"
    justifyContent="space-between"
    alignItems="center"
    px={4}
  >
    {/* Flex container for SC and My Work to group them together */}
    <Flex align="center" paddingTop={'6'}>
    <Link style={{ textDecoration: 'none' }} _hover={{ textDecoration: 'none' }} fontSize="lg" fontWeight="bold" mr={4}>SC</Link> {/* Added margin-right to space between SC and My Work */}
      <Link className='color-00A3FF' onClick={scrollToMiddle}>my work</Link>
    </Flex>
    <Link paddingTop={'6'} className='color-00A3FF' onClick={onOpen}>my background</Link>
  </Flex>

        <Flex
        gridRow="2 / 3"
        gridColumn="1 / 2"
        bg="#00A3FF"
        color="white"
        p={8}
        direction="column"
        justify="center"
        zIndex="1" // Ensure text content is above the image
        >
          <VStack align="start" spacing={4}> {/* Align VStack content to the start, and provide spacing */}
            <Text fontSize="xl">UX/UI Designer</Text>
            <Text fontSize="2xl" fontWeight="bold">Siobhan Carmody</Text>
            <Text fontSize="lg">
            Based in <b>Dallas, TX</b>, my career began in partner marketing within the mobile and ISP industry, yet my heart lies in UX design. This unique blend has fueled my passion for creating intuitive, human-centered designs that cater to the diverse needs of tech enthusiasts, professionals, and everyday users alike. My experience has honed my ability to communicate effectively and thrive in agile as well as collaborative environments. I carry these principles into my UX/UI endeavors.            </Text>
            <Text
            my={'2'}
            fontSize="lg"
            >
            I aim to merge marketing insights with a profound understanding of user needs,<b> striving to deliver solutions that not only meet expectations but also inspire.</b> My journey is about embracing new challenges and designing with purpose, aiming to impact lives across cultures through thoughtful design.
            </Text>
            <Box width="100%" display="flex" alignItems="center" justifyContent="center"> {/* This container will take the full width and center its children */}
  <Text paddingTop={'4'} textAlign="center"> {/* Ensures the text inside is centered if it wraps to multiple lines */} <a
      href="https://www.linkedin.com/in/smc7111/"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        textDecoration: 'none', // Ensures the text is not underlined by default
        color: 'inherit', // Ensures the link color matches the surrounding text
      }}
      onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'} // Applies underline on hover
      onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'} // Removes underline after hover
    >
    connect with me on LinkedIn
    <ChevronRightIcon />
    </a>
  </Text>
</Box>
                      </VStack>
                    </Flex>



        <Box
          gridRow="1 / 3"
          gridColumn="2 / 3"
          position="relative"
          width="100%"
          height="100vh"
          bgGradient="linear(to-br, #FFFFFF, #FFFFFF, #00A3FF, #646464)"
        >
          <Image
            src={AboutMePic}
            position="absolute"
            width="100%"
            height="100%"
            objectFit="cover" 
          />
        </Box>

        {/* Modal for 'About Me' section */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader textAlign={'center'}>My Background</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <VStack divider={<Divider borderColor="gray.200" />} spacing={8}>
                      <Box>
                        <Text fontWeight="bold"  mb={2}>Current Experience</Text>
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
                          </Box>
                        ))}
                        <Flex justifyContent="center">
                        <Button my="4" color="#333333" variant="solid" _hover={{ textColor: 'white', bg: 'gray.700' }}>
                        <Link textColor="#33333" href={`${process.env.PUBLIC_URL}/Resume-2.pdf`} isExternal download="Siobhans-Resume.pdf" _hover={{ textColor: 'white', textDecoration: 'none' }}>
                        Resume {<DownloadIcon/>}
                      </Link>
                        </Button>
                      </Flex>
                      </Box>
                    </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Grid>

      {/* Project Showcase Component */}
      <ProjectShowcase
        title={projectData[currentIndex].title}
        description={projectData[currentIndex].description}
        imageUrl={''} // Assuming you are dynamically loading or have a default image
        onNext={handleNext}
        onPrev={handlePrev}
        projectId={projectData[currentIndex].id} // Passing the projectId as a number directly
      />
    </ChakraProvider>
  );
};

export default App;
