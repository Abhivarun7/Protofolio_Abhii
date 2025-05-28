import React, { useEffect } from "react";
import { FiCheckSquare, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import './slideInNotifications.css'; // Import the CSS file

const SlideInNotifications = ({ notifications }) => {
  return (
    <div className="notification-container">
      <AnimatePresence>
        {notifications.map(({ id, text }) => (
          <Notification key={id} id={id} text={text} />
        ))}
      </AnimatePresence>
    </div>
  );
};

const Notification = ({ text, id }) => {
  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      // Automatically remove the notification after TTL
    }, 3000); 

    return () => clearTimeout(timeoutRef);
  }, []);

  return (
    <motion.div
      className="notification"
      initial={{ y: -15, scale: 0.95 }}
      animate={{ y: 0, scale: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <FiCheckSquare className="icon" />
      <span>{text}</span>
    </motion.div>
  );
};

export default SlideInNotifications;
