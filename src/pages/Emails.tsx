import React from 'react';
import {
  ChakraProvider, Grid, Box, Text, Image, useDisclosure, extendTheme, Flex, Divider, Link, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, HStack, ModalFooter, VStack
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon, ArrowUpIcon, DownloadIcon } from '@chakra-ui/icons';

// Import images
import LifecycleCoverPhoto from '../assets/Email images/Lifecycle Cover photo.png';
import ProblemImage from '../assets/Email images/problem section image.png';
import ActionImage from '../assets/Email images/Action Image.png';
import ResultImage from '../assets/Email images/results section image.png';
import EmailTimeline from '../assets/Email images/Email timeline.png';
import DPAImage from '../assets/Email images/DPA clickable image.png';

import FandangoImage from '../assets/DPA images/Fandango clickable image 2.png';

function Emails() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();

    const goToPage = useNavigate();
    const homePageClick = () => {
      goToPage('/')
  };

   // Globally defined scrollToMiddle function
const scrollToMiddle = () => {
  const middle = document.documentElement.scrollHeight / 2 -40;
  window.scrollTo({
    top: middle,
    behavior: 'smooth',
  });
};

const goToWork = () => {
  goToPage('/'); // Navigate to the homepage

  // Use a timeout to ensure the page has a chance to load before scrolling
  setTimeout(scrollToMiddle, 500); // Adjust the timeout as needed
};



  const goToDPA = () => {
    goToPage('/dpa');
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const goToFandango = () => {
    goToPage('/fandango');
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

    // Theme customization for breakpoints
    const theme = extendTheme({
        breakpoints: {
            sm: '320px',
            md: '768px',
            lg: '960px',
            xl: '1200px',
            '2xl': '1536px',
        },
    });

    // Responsive font sizes
    const responsiveFontSize = ['2xl', '3xl', '4xl', '5xl', '6xl'];

    return (
    <ChakraProvider theme={theme}>
      {/* Navigation and Hero Section */}
      <Grid
        h="100vh"
        templateColumns={{ sm: '1fr', md: '1fr 1fr' }}
        templateRows="auto 1fr"
      >

        {/* Navigation and Hero Section */}
        <Flex
          as="nav"
          gridRow="1 / 2"
          gridColumn="1 / 2"
          bg="#00A3FF"
          color="white"
          justifyContent="normal"
          alignItems="center"
          px={4}
          py={3}
          position="relative"
        >
<Flex align="center">
<Link onClick={homePageClick} style={{ textDecoration: 'none' }} _hover={{ textDecoration: 'none' }} fontSize="lg" fontWeight="bold" mr={4}>SC</Link> {/* Added margin-right to space between SC and My Work */}
      <Link onClick={goToWork}>my work</Link>
    </Flex>
  </Flex>

        {/* Text Section */}
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
          <HStack spacing={4}>

            {/* General Info */}
            <Box
            mb={4}
            
            >
            
            <Text
            fontWeight={'bold'}
            fontSize={responsiveFontSize}>
              Lifecycle Emails
              </Text>
            
              <Text fontSize="lg">
              UX/UI Design   |   Security   |   Responsive Design
              </Text>
             
              <Modal isOpen={isOpen} onClose={onClose} size={'xs'}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>
                    <Flex justifyContent="center" width="full">
                    </Flex>
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <VStack divider={<Divider borderColor="gray.200" />} spacing={8}>
                      
                        ))
                      
                    </VStack>
                  </ModalBody>
                  <ModalFooter>
                      
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
          bgGradient="linear(to-br, #FFFFFF, #FFFFFF, #00A3FF, #646464)"
        >
          <Image
            src={LifecycleCoverPhoto}
            position="absolute"
            width="100%"
            height="100%"
            objectFit="cover" 
          />
        </Box>
      </Grid>

      {/* Problem Section */}
      <Grid templateColumns={{ sm: '1fr', md: '1fr 1fr' }} p={8} bg="#98B5D8" color="white" alignItems="start">
        <Box>
          <Image my={{sm:'0', md: '-10'}} src={ProblemImage} fit="cover" w="100%" h="auto" />
        </Box>
        <Box
        my={{sm: '2',md: '20'}}
        paddingRight={{xl: '100'}}
        >
          <Text fontSize={responsiveFontSize} fontWeight="bold" >Problem</Text>
          <Divider borderColor="white" my={2} />
          <Text fontSize="lg">
          The primary challenge involved communicating the value of McAfee's security product to a new customer base through email campaigns, aligning with the latest branding. Compounding the complexity was the necessity to launch within a tight timeframe, ensuring these emails became an integral part of the onboarding experience for new customers. The task was further complicated by resource constraints, adding an additional layer of difficulty to the project.          </Text>
        </Box>
      </Grid>


      {/* Actions Section */}
      <Grid templateColumns={{ sm: '1fr', md: '1fr 1fr' }} p={8} bg="#98B5D8" color="white">
      {/* Image Box - Ensure this is first in the source order */}
      <Box order={{ md: 2 }} my={{sm: '-15' , md: '-155'}}>
        <Image  src={ActionImage} fit="cover" w="100%" h="auto" />
      </Box>

      {/* Text Box - Adjust the order for desktop view to bring it to the left */}
      <Box order={{ md: 1 }} paddingLeft={{xl: '100'}} >
        <Text fontSize={responsiveFontSize} fontWeight="bold">Actions</Text>
        <Divider borderColor="white" my={2} />
        <Text fontSize="lg">Adopting a comprehensive strategy, I orchestrated a blend of design and content tactics to overhaul the email communication for McAfee's security product. Rooted in a user-centric design philosophy, each email was meticulously crafted not just to impart information but to actively empower and engage employee benefit customers. The selection of design elements was a thoughtful process, aimed at creating a visually captivating and cohesive narrative harmonizing with McAfee's brand identity.</Text>

        <Text fontSize="lg" my={8}>Significantly, the designs were conceived as evergreen, ensuring enduring relevance over time. It's noteworthy that initial designs incorporated blogs, but these were later omitted to prevent potential obsolescence concerns, aligning to maintain perpetual relevance without the need for frequent updates.</Text>     
        </Box>
    </Grid>

      {/* Results Section */}
      <Grid templateColumns={{ sm: '1fr', md: '1fr 1fr' }} p={8} bg="#98B5D8" color="white" alignItems="start">
      <Box order={{ md: 2 }} my={{sm: '-16' , md: '-15'}}
        >
        <Image src={ResultImage} fit="cover" w="100%" h="auto" />
      </Box>

      <Box paddingLeft={{xl: '100'}} >
          <Text fontSize={responsiveFontSize} fontWeight="bold">Results</Text>
          <Divider borderColor="white" my={2} />
          <Text fontSize="lg">
          Leveraging comprehensive research rooted in McAfee's existing consumer base, we strategically designed and tailored the content of the emails. This approach enabled us to identify key features, pinpoint pain points, and ultimately boost both engagement and perceived value. Additionally, the email creation process drew insights from best-in-class practices across different facets of the McAfee business. The overarching goal was to align the messaging precisely with the audience's needs, ensuring a resonant and effective communication strategy.
          </Text>
          </Box>

    </Grid>

  {/* Lessons Learned text */}
    <Flex
      bg="#98B5D8"
      color="white"
      p={8}
      justify="center" // Center content horizontally
      alignItems="center" // Center content vertically
      zIndex="1" // Ensure text content is above the image
      direction="column"
      textAlign="center" // Center text horizontally within the Flex container
    >
    <Box
      bg="#98B5D8"
      color="white"
      p={8}
      zIndex="1" // Ensure text content is above the image
      my={{sm: '-10' , md: '-200'}}
      paddingLeft={{xl: '100'}} paddingRight={{xl: '100'}}
    >
      <Text fontSize={responsiveFontSize} fontWeight="bold" mb={4}>
        Lessons Learned
      </Text>

      <Text fontSize="lg" mb={4}>
      This project underscored the vital role of a user-focused design in email campaigns. Seamless collaboration across diverse teams, spanning time zones, proved critical. While maintaining clear communication and transparency was paramount, prioritizing the project amid competing initiatives posed challenges, emphasizing the need for continuous strategy evolution in the dynamic cybersecurity landscape.
      </Text>
    </Box>

    {/* Image Section (Zoom in Picture) */}
    <Box mt={{sm: '8', md: '60' }} onClick={onOpen} cursor="zoom-in">
        <Image
          src={EmailTimeline}
          width="100%"
          height="auto" // Make the height auto to maintain aspect ratio
          objectFit="cover"
          alt="Email Timeline"
        />
      </Box>

       {/* Modal for Zoomed Image */}
       <Modal isOpen={isOpen} size="full" onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Flex justify="center" align="center" h="100%">
              <Image src={EmailTimeline} maxW="100%" maxH="100%" />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>

  </Flex>



      {/* Fandango and LCM Project Previews */}
      <Grid
        h="auto" // Change the height to auto for mobile view
        templateColumns={{ sm: '1fr', md: '1fr' }}
        templateRows={{ sm: 'auto', md: '1fr' }} // Adjusted templateRows for mobile view
        bg="#98B5D8"
          >
  {/* Text */}
  <Flex
    bg="#98B5D8"
    color="white"
    p={8}
    justify="center" // Center content horizontally
    alignItems="center" // Center content vertically
    zIndex="1" // Ensure text content is above the image
    direction="column"
    textAlign="center" // Center text horizontally within the Flex container
  >
    <Box
      bg="#98B5D8"
      color="#333333"
      p={8}
      zIndex="1" // Ensure text content is above the image
      fontWeight={'bold'}
      fontSize={{sm: 'lg', md:'2xl'}}
    >
      <Text> 
        Check out more of my projects
      </Text> 
    </Box>

    {/* Images Section */}
    <Flex
      direction={{ sm: 'column', md: 'row' }} // Flex direction changes based on screen size
      justify="center"
      alignItems="center"
      textAlign="center"
    >
      {/* DPA Image and Text */}
      <Box mx={{ sm: 'auto', md: 20 }} mb={{ sm: 8, md: 0 }}> {/* Center both horizontally in mobile view and add margin between images */}
      <Link onClick={goToDPA} style={{ textDecoration: 'none' }}>
        <Image
          src={DPAImage}
          width="100%"
          height="auto" // Make the height auto to maintain aspect ratio
          objectFit="cover"
          cursor="pointer"
        />
        <Text
          mt={4}
          textAlign="center"
          textColor="#333333"
          fontWeight="semibold"
          cursor="pointer"
        >
          ConnectPaws Mobile App
        </Text>
        </Link>
      </Box>

      {/* Fandango Image and Text */}
      <Box mx={{ sm: 'auto', md: 20 }} mb={{ sm: 8, md: 0 }}> {/* Center both horizontally in mobile view and add margin between images */}
      <Link onClick={goToFandango} style={{ textDecoration: 'none' }}>
        <Image
          src={FandangoImage}
          width="100%"
          height="auto" // Make the height auto to maintain aspect ratio
          objectFit="cover"
          cursor="pointer"
        />
        <Text
          mt={4}
          textAlign="center"
          textColor="#333333"
          fontWeight="semibold"
          cursor="pointer"
        >
          Fandango App <br /> Research Analysis
        </Text>
        </Link>
      </Box>
    </Flex>
  </Flex>
</Grid>

<footer>
  <Box bg='#98B5D8' textAlign="center" py={4}> {/* Set background color and center content */}
    <Divider borderColor="#333333" borderWidth="1.5px" borderRadius="full" w="85%" mx="auto" my={4} /> {/* Adjusted margin for visibility */}
    <Flex justifyContent="center" alignItems="center"> {/* Center content */}
      <Box color="black" textAlign="center" p={1}>
        <Button color="#333333" variant="solid" mt={4} _hover={{ textColor: 'white', bg: 'gray.700' }}>
          <Link textColor="#33333" href={`${process.env.PUBLIC_URL}/Resume-2.pdf`} isExternal download="Siobhans-Resume.pdf" _hover={{ textColor: 'white', textDecoration: 'none' }}>
            Resume {<DownloadIcon />}
          </Link>
        </Button>
        <Button color="#333333" variant="solid" mt={4} ml={10} _hover={{ textColor: 'white', bg: 'gray.700' }}>
          <a href="https://www.linkedin.com/in/smc7111/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </Button>
        <Text paddingTop={'4'} paddingBottom={'4'} mt={4} ml={1}>designed by siobhan</Text>
      </Box>
    </Flex>
  </Box>
</footer>
    </ChakraProvider>
    );
}
export default Emails;