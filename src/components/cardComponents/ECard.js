import React from 'react';
import {  Divider, Heading, Text, VStack } from "@chakra-ui/react";


function ECard(props) {

    const cardStyle = {
        backgroundColor : 'white',
        color : 'black',
        borderRadius : '3%',
      }
    return (

            <VStack style={cardStyle} padding="1rem" align="start">
                <Heading as="h3" size="md">{ props.data.title}</Heading>
                <Divider   />
                <Text fontSize="13px" color="gray" noOfLines={2}>Course : {props.data.course}</Text>
                <Text fontSize="13px" color="gray" noOfLines={2}>institution : {props.data.institution}</Text>
                <Text fontSize="13px" color="gray" noOfLines={2}>Score  :{props.data.score}</Text>
                <Text fontSize="13px" color="gray" noOfLines={2}>Start : {props.data.start}</Text>
                <Text fontSize="13px" color="gray" noOfLines={2}>End : {props.data.end}</Text>
            </VStack>
    );
}

export default ECard;