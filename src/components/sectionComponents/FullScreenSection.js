import * as React from "react";
import { VStack } from "@chakra-ui/react";

/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({ children, isDarkBackground, screenWidth, ...boxProps }) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
      align={screenWidth !== null? screenWidth : 'center'}
    >
      <VStack  {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
