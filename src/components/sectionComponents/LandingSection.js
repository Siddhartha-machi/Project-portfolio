import React from "react";
import { Avatar, Container, Heading, HStack, Stack, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import My_photo from "../images/My_photo.jpg"

const greeting = "Hello, I am Siddhartha Reddy Machi!";
const bio1 = "An enthusiastic Full-stack developer";
const bio2 = "specialised in Django";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (


  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    marginTop={"10rem"}
  >

    
    <VStack spacing={3} align={"center"}  >
    <Avatar 
      name="avatar" 
      src={My_photo}
      size ="2xl"
       />
    <strong >{greeting}</strong>
      <Heading as={"h6"} size="md">{bio1}</Heading>
      <Heading >{ bio2 }</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
