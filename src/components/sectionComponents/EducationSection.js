import React from 'react';
import { Heading, Wrap, WrapItem } from "@chakra-ui/react";
import FullScreenSection from './FullScreenSection';
import ECard from '../cardComponents/ECard';

function EducationSection(props) {
    return (
        <FullScreenSection
        backgroundColor="#2A4365"
        isDarkBackground
        p={8}
        alignItems="center"
        spacing={8}
      >
        <Heading as="h1" id="education-section">
          Education
        </Heading>
        <Wrap align="center" >
        
          {props.data.map((edata,index) => (
             (<WrapItem key={index}> 
           
            <ECard
                
                data={edata}
                />
            </WrapItem>)
          ))}
            
            
        </Wrap>
        
      </FullScreenSection>
    );
}

export default EducationSection;