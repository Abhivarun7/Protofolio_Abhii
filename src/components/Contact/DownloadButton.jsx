import React, { useState } from 'react';
import './downloadbutton.css'; // Import the styles

const DownloadButton = () => {
  const [downloaded, setDownloaded] = useState(false);

  const handleClick = () => {
    setDownloaded(!downloaded);
  };

  return (
    <a 
      id="btn-download" 
      className={downloaded ? 'downloaded' : ''} 
      onClick={handleClick}
      href="/Resume.pdf" // Change this to your resume file's name
      download // This attribute triggers the download
    >
      <svg width="22px" height="16px" viewBox="0 0 22 16">
        <path d="M2,10 L6,13 L12.8760559,4.5959317 C14.1180021,3.0779974 16.2457925,2.62289624 18,3.5 L18,3.5 C19.8385982,4.4192991 21,6.29848669 21,8.35410197 L21,10 C21,12.7614237 18.7614237,15 16,15 L1,15" id="check"></path>
        <polyline points="4.5 8.5 8 11 11.5 8.5" className="svg-out"></polyline>
        <path d="M8,1 L8,11" className="svg-out"></path>
      </svg>
      <a className="credit" href="https://dribbble.com/shots/4570587-Download-micro-interaction" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.dribbble.com/assets/logo-footer-hd-a05db77841b4b27c0bf23ec1378e97c988190dfe7d26e32e1faea7269f9e001b.png" alt="" />
      </a>
    </a>
  );
};

export default DownloadButton;
