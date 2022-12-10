import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  const cardStyle = {
    backgroundColor : 'white',
    color : 'black',
    borderRadius : '3%',

  }
  
  
  return (
    <VStack style={cardStyle}>
      <Image src={imageSrc} alt="project-image" style={{borderRadius : '3%'}}/>
      <VStack padding="1rem" align="start">
        <Heading as="h3" size="md">{ title}</Heading>
        <Text fontSize="13px" color="gray" noOfLines={2}>{description}</Text>
        <a href="#see-more" >see more  <FontAwesomeIcon icon={faArrowRight} size="1x" /></a>
      </VStack>
      
    </VStack>
  );
};

export default Card;
