import React from 'react';
import ModelViewer from './ModelViewer'; 
import "../../components/intro/intro.css"

const Comp = () => {
  return (
    <>
      <div className='model-wrapper'>
        <ModelViewer />
      </div>
      <div className='profile-description'>
        <div className='des' style={{ color: 'aliceblue' }}>

            I'm a Software Engineer living in Andhra Pradesh, India. Currently pursuing my B.Tech final year at&nbsp;
            <a href="https://cutmap.ac.in/" target="_blank" rel="noopener noreferrer" className="link"> 
              Centurion University 
            </a>
            &nbsp;Vizianagaram.
        </div>
      </div>
    </>
  );
};

export default Comp;
