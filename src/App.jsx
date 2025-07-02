import Intro from "../src/components/intro/intro"
import Navbar from "../src/components/intro/nav"
import "../src/App.css"
import Comp from "../src/assets/model/Comp"
import Projects from "./components/Projects/Work"
import Contact from "./components/Contact/Contact"
import Education from "./components/Education/Education"

function App() {
  
  return (
    <>
      <section className='container' id='introduction'>
        <div className='introduction'>
          <Navbar />
          <Intro />
          <div className='model'>
            <Comp />
          </div>
        </div> 
      </section>
      <section className='projects' id='projects'>
        <Projects />
      </section>
      <section className='education' id='education'>
        <Education />
      </section>
      <section className='contact' id='contact'>
        <Contact />
        <div className='footer'>
          <p>This site was developed using React</p>
        </div>
      </section>
    </>
  )
}

export default App
