import React, { useState } from 'react';
import HistorySection from './HistorySection';
import styles from '@/styles/Navbar.module.css';

const Navbar = () => {
  const [showHistory, setShowHistory] = useState(false);

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.hamburgerMenu} onClick={toggleHistory}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </div>
      {showHistory && <HistorySection />}
    </div>
  );
};

export default Navbar;
