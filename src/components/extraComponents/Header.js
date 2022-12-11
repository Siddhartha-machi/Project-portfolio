import React, { useEffect ,useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, HStack } from "@chakra-ui/react";
import { socials } from "../Consts";



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
      <Box color="white"  >
        <HStack
          px={{sm : 8 ,lg : 8}}
          py={4}
          justifyContent="space-between"
        >
          <nav>
          <HStack spacing={2}>
            {socials.map((item, index) => {
              return <a key={index} href={item.url} ><FontAwesomeIcon icon={ item.icon} size="2x" /></a>
            })}
          </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
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
