import RoboImg from "../data/Robo.jpg";
import Plant from "../data/Plant.png";
import Blynk from "../data/Blynk.jpg";
import Gym from "../data/Gym.png";
import Python from "../data/Python.png";
import Java from "../data/Java.png";
import C from "../data/C.png";
import React from "../data/React.png";
import JavaScript from "../data/JavaScript.png";
import Android from "../data/Android.svg";
import Css from "../data/CSS.png";
import Html from "../data/HTML.png";


const personalInfo = {
  greeting: "Hello, welcome to my website!",
  intro: "I am a software developer.",
  description: "I specialize in full-stack development.",
  message: "Feel free to explore my projects.",
  contact: "Contact me for more information."
};

const skills = [
  {
    name: "Java",
    description: "Proficient in data analysis and machine learning.",
    img:Java
  },
  {
    name: "c/c++",
    description: "Proficient in data analysis and machine learning.",
    img:C
  },
  {
    name: "JavaScript",
    description: "Experienced in ES6+, React",
    img: JavaScript
  },
  {
    name: "Python",
    description: "Proficient in data analysis and machine learning.",
    img:Python
  },
  {
    name: "HTML",
    description: "Expertise in building responsive web designs.",
    img:Html
  },

  {
    name: "CSS",
    description: "Expertise in building responsive web designs.",
    img:Css
  },
  {
    name: "SQL",
    description: "Experienced with relational databases like MySQL.",
    img:JavaScript
  },
  {
    name: "Android Development",
    description: "Version control and collaboration tools.",
    img:Android
  },
  {
    name: "React",
    description: "Version control and collaboration tools.",
    img:React
  }
];

const projects = [
  {
    name: "Object Based Navigation Robot",
    description: "Developed an autonomous robot for object-based navigation using ROS",
    image: RoboImg,
    technologies: ["Python","Android Development","Machine Learning", "ROS"], // Make sure this is an array
    url: "https://github.com/Abhivarun7/Robot_Navigation_Using_Vision",
  },
  {
    name: "App-Based Plant Disease Detection",
    description: "Developed a mobile application that uses image analysis to identify plant diseases accurately",
    image: Plant,
    technologies: ["Python", "Data Analysis", "Machine Learning"], // Make sure this is an array
    url:"https://github.com/Abhivarun7/Plant_disease_detection",
  },
  {
    name: "Home Automation System",
    description: "Designed and implemented a home automation system using NodeMCU connected to WiFi for receiving signals from the Blynk app.",
    image: Blynk,
    technologies: ["Blynk", "NodeMCU", "Relay Modules"], // Make sure this is an array
  },
  {
    name: "Gym Management System",
    description: "Created a comprehensive web page for managing gym members, staff, and equipment efficiently.",
    image: Gym,
    technologies: ["HTML", "CSS", "Java Script", "MySQL"], // Make sure this is an array
    url:"https://www.linkedin.com/posts/abhi-ram-3b9251279_html-css-javascript-activity-7069574199547219968-R1nd?utm_source=share&utm_medium=member_desktop",
  },
];
export { personalInfo, skills, projects };
