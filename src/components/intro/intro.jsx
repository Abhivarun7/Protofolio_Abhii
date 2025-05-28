import "../intro/intro.css"
import Typer from "../intro/Typer" 
import "../../assets/model/comp.css"

const intro = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className='main'>
      <div className='profile-name'>
        <h1>
          This is
          <span className='name'> Abhii</span>
        </h1>
      </div>
      <div className='typer'>
        <Typer /> 
      </div>
      <div className='profile-description'>
        <div className='des' style={{ color: 'aliceblue' }}>

            I'm a Software Developer living in Andhra Pradesh, India. Currently pursuing my B.Tech final year at&nbsp;
            <a href="https://cutmap.ac.in/" target="_blank" rel="noopener noreferrer" className="link"> 
              Centurion University 
            </a>
            &nbsp;Vizianagaram.
            <div className='projects-button'>
            <button className="custom-button" onClick={scrollToProjects}>View my work</button>
             </div>
        </div>
        
      </div>
    </div>
    
  );
}

export default intro;
