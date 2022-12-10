import React, { useEffect, useRef ,useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";


const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const [toggleheader , setToggleHeader] = useState(0)
  const [prevScroll , setPrevScroll] = useState(0)


  const headerHandler = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > prevScroll) { 
        setToggleHeader(-200);
      } else { 
        setToggleHeader(0);
      }

      setPrevScroll(window.scrollY);
    }
  };
  

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', headerHandler);

      return () => {
        window.removeEventListener('scroll', headerHandler);
      };
    }
  }, [prevScroll])


  

  return (
    <Box
      position="fixed"
      top={toggleheader}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
          
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            {socials.map((item, index) => {
              return <a key={index} href={item.url} style={{ paddingRight: "2rem" }}><FontAwesomeIcon icon={ item.icon} size="2x" /></a>
            })}
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href="#projects" onClick={handleClick("projects")}>Projects</a>
              <a href="#contactme" onClick={handleClick("contactme")} >contactMe</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
