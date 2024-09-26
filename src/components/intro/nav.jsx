import { useRef, useState } from 'react';
import '../intro/nav.css'; // Make sure this path is correct
import ReactLogo from "../../assets/logo/logo-color.svg"; // Ensure the logo path is correct

const Navbar = () => {
  const navRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false); // State to track menu status

  const showMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu state
    navRef.current.classList.toggle("responsive_menu");
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false); // Close menu after click
    navRef.current.classList.remove("responsive_menu"); // Remove class for mobile view
  };

  return (
    <div className='nav-bar'>
      <img src={ReactLogo} alt='ReactLogo' className='nav-logo' />

      <ul ref={navRef} className={menuOpen ? "responsive_menu" : ""}> 
        <li><a  onClick={() => scrollToSection('skills')}>Skills</a></li>
        <li><a  onClick={() => scrollToSection('contact')}>Contact</a></li>
      </ul>

      <button className='nav-menu' onClick={showMenu}>
        {menuOpen ? "✕" : "☰"} 
      </button>
    </div>
  );
};

export default Navbar;
 