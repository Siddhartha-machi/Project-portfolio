import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/extraComponents/Header";
import Footer from "./components/extraComponents/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/extraComponents/Alert";
import {coursesConst , constData} from "./components/Consts";
import LandingSection from "./components/sectionComponents/LandingSection";
import EducationSection from "./components/sectionComponents/EducationSection";
import ProjectsSection from "./components/sectionComponents/ProjectsSection";
import ContactMeSection from "./components/sectionComponents/ContactMeSection";
import CertificationSection from "./components/sectionComponents/CertificationSection";
function App() {
  return (
    
      <ChakraProvider>
      <AlertProvider>
      <main>
        <Header />      
        <LandingSection />
        <EducationSection data={constData} />
        <CertificationSection data={coursesConst}/>
        <ProjectsSection />
        <ContactMeSection />
        <Footer />
        <Alert />
      </main>
      </AlertProvider>
    </ChakraProvider>   
    
  );
}

export default App;
