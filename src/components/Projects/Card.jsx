// Card.jsx
import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import "./c.css"; // Make sure to import your styles

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const Card = ({ project }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleHover = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const resetStyles = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
        className="card"
        ref={cardRef}
        onMouseMove={handleHover}
        onMouseLeave={resetStyles}
        style={{ transform, transformStyle: "preserve-3d" }}
      >
        <div className="content" style={{ transform: "translateZ(75px)" }}>
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <img src={project.image} className="project-image" alt={project.name} />
        </a>
          <h2 className="project-name">{project.name}</h2>
          <p className="project-des">{project.description}</p>
          
          {/* Technologies List */}
          {Array.isArray(project.technologies) && (
            <ul className="technologies-list">
              {project.technologies.map((tech, index) => (
                <li key={index} className="technology-item">{tech}</li>
              ))}
            </ul>
          )}
        </div>
      </motion.article>


  );
};

export default Card;
