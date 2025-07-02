import "./education.css"
import React, { useState, useEffect } from 'react';
import { GraduationCap, MapPin, Calendar, Award, ChevronDown, ChevronUp, Star, BookOpen, Trophy, Target } from 'lucide-react';

const Education = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    setAnimateCards(true);
  }, []);


  const educationData = [
    {
      id: 1,
      degree: "Master of Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      period: "2020 - 2022",
      gpa: "3.9/4.0",
      status: "Completed",
      description: "Advanced studies in Machine Learning and Artificial Intelligence with specialization in deep learning algorithms, neural networks, and computer vision.",
      achievements: [
        "Dean's List for 4 consecutive semesters",
        "Graduate Research Assistant",
        "Published 3 papers in top-tier AI conferences",
        "Teaching Assistant for ML course"
      ],
      courses: ["Deep Learning", "Computer Vision", "NLP", "Distributed Systems", "Advanced Algorithms", "AI Ethics"],
      projects: ["Neural Style Transfer", "Autonomous Vehicle Navigation", "Medical Image Analysis"]
    },
    {
      id: 2,
      degree: "Bachelor of Engineering",
      institution: "University of California, Berkeley",
      location: "Berkeley, CA", 
      period: "2016 - 2020",
      gpa: "3.8/4.0",
      status: "Completed",
      description: "Comprehensive foundation in computer science with emphasis on software engineering, algorithms, and system design.",
      achievements: [
        "Summa Cum Laude",
        "President of Computer Science Society",
        "Winner of Annual Hackathon 2019",
        "Outstanding Student Award"
      ],
      courses: ["Data Structures", "Software Engineering", "Database Systems", "Operating Systems", "Web Development", "Mobile Apps"],
      projects: ["E-commerce Platform", "Social Media App", "Blockchain Voting System"]
    },
    {
      id: 3,
      degree: "High School Diploma",
      institution: "Tech Valley High School",
      location: "San Jose, CA",
      period: "2012 - 2016",
      gpa: "4.0/4.0",
      status: "Completed",
      description: "Valedictorian with advanced placement courses in mathematics, science, and computer programming.",
      achievements: [
        "Valedictorian",
        "National Merit Scholar",
        "Science Olympiad State Champion",
        "Math Competition Winner"
      ],
      courses: ["AP Computer Science", "AP Calculus BC", "AP Physics", "AP Chemistry", "Statistics", "Programming"],
      projects: ["School Management System", "Science Fair Winner", "Math Tutoring App"]
    }
  ];

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const stats = [
    { icon: <BookOpen className="w-6 h-6" />, value: "8+", label: "Years of Study", color: "from-cyan-400 to-blue-500" },
    { icon: <Trophy className="w-6 h-6" />, value: "15+", label: "Awards", color: "from-yellow-400 to-orange-500" },
    { icon: <Target className="w-6 h-6" />, value: "3.9", label: "Average GPA", color: "from-green-400 to-emerald-500" },
    {icon: <Star className="w-6 h-6" />, value: "25+", label: "Projects", color: "from-purple-400 to-pink-500" }

  ];
  return (
    <>  

  <div className="education-container">
        {/* Floating Particles */}
        <div className="floating-particles">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>

        {/* Header */}
        <div className="header-section">
          {/* <div className="header-icon">
            <GraduationCap className="w-8 h-8 text-black" />
          </div> */}
          <div className="eduction-box-wrapper">
          <h1 className="main-title">Education Journey</h1>
          </div>
        </div>

        {/* Timeline */}
        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {educationData.map((edu, index) => (
            <div key={edu.id} className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-dot"></div>
              </div>
              
              <div className="education-card" onClick={() => toggleExpand(edu.id)}>
                <div className="card-header">
                  <div>
                    <h3 className="degree-title">{edu.degree}</h3>
                    <p className="institution">{edu.institution}</p>
                    <div className="card-meta">
                      <div className="meta-item">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="meta-item">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="meta-item">
                        <Award className="w-4 h-4" />
                        <span>GPA: {edu.gpa}</span>
                      </div>
                    </div>
                    <span className="status-badge">{edu.status}</span>
                  </div>
                  <div className={`expand-icon ${expandedCard === edu.id ? 'rotated' : ''}`}>
                    {expandedCard === edu.id ? <ChevronUp /> : <ChevronDown />}
                  </div>
                </div>

                <div className={`card-content ${expandedCard === edu.id ? 'expanded' : ''}`}>
                  <p className="description">{edu.description}</p>
                  
                  <div className="content-grid">
                    <div className="content-section">
                      <h4>
                        <Trophy className="w-4 h-4" />
                        Key Achievements
                      </h4>
                      <ul className="achievement-list">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="achievement-item">
                            <div className="achievement-bullet"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="content-section">
                      <h4>
                        <BookOpen className="w-4 h-4" />
                        Relevant Courses
                      </h4>
                      <div className="tag-container">
                        {edu.courses.map((course, idx) => (
                          <span key={idx} className="tag">{course}</span>
                        ))}
                      </div>
                    </div>

                    <div className="content-section">
                      <h4>
                        <Target className="w-4 h-4" />
                        Notable Projects
                      </h4>
                      <div className="tag-container">
                        {edu.projects.map((project, idx) => (
                          <span key={idx} className="tag">{project}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className={`stat-icon bg-gradient-to-r ${stat.color}`}>
                  {stat.icon}
                </div>
                <div className={`stat-value bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};








export default Education;
