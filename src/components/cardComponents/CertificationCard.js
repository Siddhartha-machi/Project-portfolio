import { Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';

function CertificationCard(props) {


  const cardStyle = {
    backgroundColor : 'white',
    color : 'black',
    borderRadius : '2%', 

  }
  
  
  return (
    <VStack style={cardStyle} align="flex-start">
      <VStack padding="1rem" align="start">
        <Heading as="h3" size="md">{ props.data.title}</Heading>
        <Text fontSize="13px" color="gray" noOfLines={3}>{props.data.duration}</Text>
        <Text fontSize="13px" color="gray" noOfLines={3}>{props.data.platform}</Text>
      </VStack>     
    </VStack>
  );
    
}

export default CertificationCard;