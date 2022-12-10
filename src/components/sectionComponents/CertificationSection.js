import React from 'react';
import { Heading, VStack } from "@chakra-ui/react";
import CertificationCard from '../cardComponents/CertificationCard';
import FullScreenSection from './FullScreenSection';

function CertificationSection(props) {
    return (
        <FullScreenSection
        backgroundColor="#2A4365"
        isDarkBackground
        p={8}
        alignItems="flex-start"
        spacing={8}
      >
        <Heading as="h1" id="education-section">
          Certifications
        </Heading>
        <VStack align={"stretch"}>
          {props.data.map((item,index) =>{
            return <CertificationCard key={index} data={item}/>
          })}
        </VStack>

      </FullScreenSection>
    );
}

export default CertificationSection;