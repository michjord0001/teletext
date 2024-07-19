import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const tick = () => {
      setCurrentTime(new Date());
    };

    const timerId = setInterval(tick, 1000);
    return () => clearInterval(timerId);
  }, []);

  const formatDateTime = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const weekday = date.toLocaleDateString(undefined, { weekday: 'long' });
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${weekday} ${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="teletext-container">
      <header className="teletext-header">
        <span className="rte">MICHJORD0001</span><span className="aertel">.XYZ</span>
      </header>
      <div className="teletext-body">
        <div className="header-right">
          {formatDateTime(currentTime)}
        </div>
        <div className="section title">MJ Index</div>
        {/*<div className="section headline"></div>*/}
        <div className="section subtitle">Free Open Source Software</div>
        <div className="section links">
          <div>News <span>102</span></div>
          <div>Sport <span>200</span></div>
          <div>Entertainment <span>300</span></div>
          <div>Business <span>130</span></div>
          <div>TV INDEX <span>170</span></div>
          <div>Travel <span>500</span></div>
          <div>Competitions <span>620</span></div>
          <div>Classifieds <span>600</span></div>
        </div>
        <div className="section info">AERTEL FULL CONTENTS <span>101</span></div>
      </div>
    </div>
  );
};

export default Home;
