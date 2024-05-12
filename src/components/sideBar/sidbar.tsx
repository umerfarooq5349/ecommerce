import React, { useState, useEffect, useRef } from "react";
import styles from "@/utils/saas/sidebar.module.scss"; // Assuming you have a Sidebar.module.scss file for styles
import Footer from "../footer/footer";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={isOpen ? styles.sidebarOpen : styles.sidebarClosed}>
      <button onClick={toggleSidebar}>Toggle Sidebar</button>
      <div ref={sidebarRef} className={styles.sidebarContent}>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Sidebar;
