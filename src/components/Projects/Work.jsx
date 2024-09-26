import React from "react";
import "../Projects/work.css";
import { projects } from "../data/constant";
import Card from "./Card"; 
import Skills from "../skills/Capabilities"

const Work = () => {
  return (
    <div className="main">
      <div className="work-wrap">
        <div className="title">
          <h1 className="title-project">Projects</h1>
        </div>
      </div>
      <div className="body">
        <div className="project-card-view">
          <div className="flex-grid-thirds">
            {projects.map((project, index) => (
              <div className="col" key={index}>
                <Card project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
          <div className="work-wrap" id='skills'>
            <div className="title">
              <h1 className="title-skill">Skills</h1>
            </div>
          </div>
          <div className="skill-wrap">
            <Skills />
          </div>
        </div>
    </div>
  );
};

export default Work;
