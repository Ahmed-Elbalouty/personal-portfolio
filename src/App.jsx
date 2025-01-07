import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from './components/Navbar';
import IntroSection from './components/IntroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactMe from './components/ContactMe';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <>
      <Navbar />
      <IntroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactMe />
      <FooterSection />
    </>
  );
}

export default App;
