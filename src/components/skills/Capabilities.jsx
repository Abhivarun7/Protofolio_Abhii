import { useState } from "react";
import "./capabilities.css"; // Your CSS file for styles
import { skills } from "../data/constant"; // Your skills data

import Marquee from "react-fast-marquee";

const Capabilities = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div className="scroll-container">
      <Marquee
        gradient={false}
        speed={80}
        pauseOnHover={true}
        pauseOnClick={true}
        delay={0}
        play={true}
        direction="left"
      >
        {skills.map((skill, index) => (
          <div
            className="skill-item"
            key={index}
            onMouseEnter={() => setHoveredSkill(skill)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className="skill-logo">
              <img
                src={skill.img} 
                alt={skill.name} 
                width={80}
                height={80}
                className="h-full w-auto rounded-lg"
              />
            </div>
            {hoveredSkill === skill && (
              <div className="description-box">
                {skill.des}
              </div>
            )}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Capabilities;
