// import logo from './logo.svg';
import './App.css';
import BlogsSection from './sections/BlogsSection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';
import Header from './sections/Header';
import NavBar from './sections/NavBar';
import ProjectsSection from './sections/ProjectsSection';
import ServicesSection from './sections/ServicesSection';
import SkillsSection from './sections/SkillsSection';

function App() {
  return (
    <div className="App text-white">
      <NavBar/>
      <Header/>
      <ServicesSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <BlogsSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default App;
