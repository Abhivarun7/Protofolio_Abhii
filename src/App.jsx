import Intro from "../src/components/intro/intro"
import Navbar from "../src/components/intro/nav"
import "../src/App.css"
import Comp from "../src/assets/model/Comp"
import Projects from "./components/Projects/Work"
import Contact from "./components/Contact/Contact"

function App() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <section className='container' id='introduction'>
        <div className='introduction'>
          <Navbar />
          <Intro />
          <div className='model'>
            <Comp />
          </div>
          <div className='projects-button'>
            <button className="custom-button" onClick={scrollToProjects}>View my work</button>
        </div>
        </div> 
      </section>
      <section className='projects' id='projects'>
        <Projects />
      </section>
      <section className='contact' id='contact'>
        <Contact />
      </section>
    </>
  )
}

export default App
