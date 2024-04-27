import React from 'react';
import {
  ChakraProvider, Grid, Box, Text, Image, useDisclosure, extendTheme, Flex, Divider, Link, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, HStack, ModalFooter, VStack
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon, ArrowUpIcon, DownloadIcon } from '@chakra-ui/icons';

// Import images
import FandangoCoverPhoto from '../assets/Fandango images/Fandango Cover Photo.png';
import LCM from '../assets/DPA images/Lifecycle email clickable image.png';
import DPAImage from '../assets/Email images/DPA clickable image.png';
import PersonIcon from '../assets/Fandango images/Person icon.png';
import InterviewPics from '../assets/Fandango images/Interview pics.png';
import MountainsReflected from '../assets/Fandango images/Mountains Reflected.png';

function Fandango () {
    const { isOpen, onClose } = useDisclosure();
    const navigate = useNavigate();

    const goToPage = useNavigate();
    const homePageClick = () => {
      goToPage('/')
  };

   // Globally defined scrollToMiddle function
const scrollToMiddle = () => {
  const middle = document.documentElement.scrollHeight / 2 -90;
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


  const goToEmails = () => {
    goToPage('/emails');
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const goToDPA = () => {
    goToPage('/dpa');
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

<Flex align="center" paddingTop={'6'}>
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
              Fandango App Research Analysis
              </Text>
            
              <Text fontSize="lg">
              UX/UI Research   |   Usability Testing   |   Analysis
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
            src={FandangoCoverPhoto}
            position="absolute"
            width="100%"
            height="100%"
            objectFit="cover" 
            alt="Fandango cover image"
          />
        </Box>
      </Grid>

      {/* Problem Section */}
      <Grid templateColumns={{ sm: '1fr', md: '1fr 1fr' }} p={8} bg="#98B5D8" color="white" alignItems="start">
        <Box
        my={{sm: '-5' , md: '-15'}}
        >
          <Image src={PersonIcon} fit="cover" w={{sm: '100%', md: '70%'}} h="auto" alt="girl on tablet standing in front of monitor with graph displayed on it" />
        </Box>
        <Box
        my={{sm: '-5' , md: '50'}}
        paddingRight={{xl: '100'}}
        >
          <Text fontSize={responsiveFontSize} fontWeight="bold">Problem</Text>
          <Divider borderColor="white" my={2} />
          <Text fontSize="lg">
          Users encounter challenges when navigating the Fandango app to gather movie information and purchase tickets. This hinders their overall experience and can result in frustration or app abandonment. The objective of this initiative was to evaluate the app's effectiveness regarding these key actions, with the aim of pinpointing points of friction and providing insights for enhancing the user experience in future releases.
          </Text>
          <Text fontSize="lg" paddingTop='4' fontStyle={'italic'}>
          How might we analyze the functionality of the Fandango app in aiding users to access movie information and purchase tickets, identifying usability issues, and offering guidance for enhancing the user experience to ensure smoother interactions?
          </Text>
        </Box>
      </Grid>

      <Box
  bg="#98B5D8"
  color="white"
  p={8}
  zIndex="1" // Ensure text content is above the image
  paddingBottom={'150'}
  mx="auto" // Center horizontally
  display="flex" flexDirection="column" justifyContent="center" alignItems="center"
>
  <Text fontSize={responsiveFontSize} fontWeight="bold">Research Goals</Text>

  <ul>
    <li>
      <Text fontSize="xl" my={'2'}>Understand expectations of functionality and use of movie ticket apps</Text>
    </li>
    <li>
      <Text fontSize="xl" my={'2'}>Identify frustrations when navigating the Fandango app</Text>
    </li>
    <li>
      <Text fontSize="xl" my={'2'}>Analyze and synthesize findings into a comprehensive report</Text>
    </li>
  </ul>
</Box>




      {/* Usability Testing Section */}
      <Grid templateColumns={{ sm: '1fr', md: '1fr 1fr' }} p={8} bg="#98B5D8" color="white" my={{sm: '0' , md: '-20'}}>
      {/* Image Box - Ensure this is first in the source order */}
      <Box order={{ md: 2 }}>
        <Image my={{sm: '-100' , md: '12'}} marginLeft={{md:'100'}} src={InterviewPics} fit="cover" h="auto" w={{sm: '90%%', md: '70%'}} alt="three images overlapping: two are of interviewees and one is of someone on the Fandango mobile app" />
      </Box>

      {/* Text Box - Adjust the order for desktop view to bring it to the left */}
      <Box order={{ md: 1 }}
      paddingLeft={{xl: '100'}}
      paddingBottom={{md: '100', lg:'100',xl:'100'}}
      my={{sm: '200' , md: '12'}}>
        <Text fontSize={responsiveFontSize} fontWeight="bold" >Usability testing</Text>
        <Divider borderColor="white" />
        <Text fontSize="lg">
        My team of five UX researchers, including myself, conducted <b>12 moderated usability studies</b> to assess user interactions with the Fandango app. We assigned participants <b>three typical tasks</b> mirroring real-world scenarios:
        </Text>
            <Text my={'2'} fontSize="lg"> 1. Finding and filtering specific movie ratings and genres</Text>
            <Text my={'2'} fontSize="lg"> 2. Locating a nearby theater and purchasing two tickets for a specific showing </Text>
            <Text my={'2'} fontSize="lg"> 3. Exploring details about upcoming movies </Text>

            <Text fontSize="lg"> We recruited participants meeting specific criteria via email and text, ensuring a diverse and representative participant pool. Each session was moderated and recorded either in-person or virtually, with participants utilizing their mobile phones to replicate real-world usage scenarios. 
            </Text>

            <Text fontStyle={'italic'} paddingTop='4' fontSize="lg">
            “Figuring out where to find the coming soon section [was the hardest part of the experience] because I kinda expected it to be at home and it wasn't there.”
            </Text>
            <Text>- Participant</Text>
      </Box>
    </Grid>

 {/* Results & Recommendations text */}
 <Flex
      bg="#98B5D8"
      color="white"
      justify="center" // Center content horizontally
      alignItems="center" // Center content vertically
      zIndex="1" // Ensure text content is above the image
      direction="column"
      textAlign="left" // Center text horizontally within the Flex container
      my={{md: '-20'}}
    >
    <Box
      bg="#98B5D8"
      color="white"
      p={8}
      zIndex="1" // Ensure text content is above the image
      paddingLeft={{xl: '120'}} paddingRight={{xl: '120'}}
    >

      <Text fontSize={responsiveFontSize} fontWeight="bold" >Results & Recommendations</Text>
        <Divider borderColor="white" my={2} />
        <Text fontSize="lg">
        Analysis of participant interactions revealed several key findings, which informed the following recommendations:
        </Text>

        <Text fontSize="lg" my={'2'} >
        <b>1. Sort Tool Enhancement:</b> Users encountered challenges with the Sort tool's inconsistent location and functionality across platforms. To address this, we recommend relocating the Sort function to a more intuitive location and ensuring consistent functionality across all platforms.
        </Text>
        
        <Text fontSize="lg" my={'2'} >
        <b>2. Improved Visibility for Coming Soon Movies:</b> Participants struggled to locate the "Coming Soon" movies within the app. To enhance user experience, we recommend introducing a dedicated "Coming Soon" section on the Home page and conducting additional research to determine optimal content placement.
        </Text>
        
        <Text fontSize="lg" my={'2'} >
        <b>3. Refined Search Functionality:</b> Users expressed a desire for more comprehensive search results. To meet this expectation, we suggest conducting further research to refine search functionality and align it with user needs and preferences.
        </Text>

        <div style={{ textAlign: 'center' }}>
  <Button 
    verticalAlign="center" 
    color="#333333" 
    variant="solid" 
    mt={20} 
    ml={10} 
    _hover={{ textColor: 'white', bg: 'gray.700' }}
  >
    <a href="https://docs.google.com/presentation/d/1m28awh6ZcsTpjTAGv5-1lCKsnkpDIkJp/edit?usp=sharing&ouid=102284223751054415050&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">
      View final Fandango report
    </a>
  </Button>
</div>

    </Box>
  </Flex>

  
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

    {/* Image Section (Mountains Picture) */}
    <Box mt={8}>
      <Image
        src={MountainsReflected}
        width="100%"
        height="auto" // Make the height auto to maintain aspect ratio
        objectFit="cover"
        my={{sm: '-10' , md: '10'}}
        alt="divider mountain-like image with a reflection"
      />
    </Box>
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
      {/* ConnectPaws Image and Text */}
      <Box mx={{ sm: 'auto', md: 20 }} mb={{ sm: 8, md: 0 }}> {/* Center both horizontally in mobile view and add margin between images */}
      <Link onClick={goToDPA} style={{ textDecoration: 'none' }}>
        <Image
          src={DPAImage}
          width="100%"
          height="auto" // Make the height auto to maintain aspect ratio
          objectFit="cover"
          cursor="pointer"
          alt="ConnectPaws Mobile App clickable image"
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

      {/* LCM Image and Text */}
      <Box mx={{ sm: 'auto', md: 20 }} mb={{ sm: 8, md: 0 }}> {/* Center both horizontally in mobile view and add margin between images */}
      <Link onClick={goToEmails} style={{ textDecoration: 'none' }}>
        <Image
          src={LCM}
          width="100%"
          height="auto" // Make the height auto to maintain aspect ratio
          objectFit="cover"
          cursor="pointer"
          alt="Lifecycle Emails clickable image"
        />
        <Text
          mt={4}
          textAlign="center"
          textColor="#333333"
          fontWeight="semibold"
          cursor="pointer"
        >
          Lifecycle Emails
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
export default Fandango;