import React, { useState, useEffect } from 'react';
import './Home.css';
import handcodedImg from '../images/marquee/handcoded.png';
import transrights1Img from '../images/marquee/transrights1.gif';
import lgbtfriendlyImg from '../images/marquee/lgbtfriendly.gif';
import freePalestineImg from '../images/marquee/FreePalestine.gif';
import antifaImg from '../images/marquee/Antifa.png';
import blackLivesMatterImg from '../images/marquee/blacklivesmatter.gif';

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
        <span className="rte">MICHJORD0001</span>
      </header>

      <main className="teletext-body">

        <div className="header-right">
          {formatDateTime(currentTime)}
        </div>

        <section className="section title">Contact</section>

        <section className="section links">
          <div>
            <a href="mailto:mj@michjord0001.digital">Email</a>
            <span className="number"><a href="mailto:mj@michjord0001.digital">102</a></span>
          </div>
          <div>
            <a href="https://github.com/michjord0001">GitHub</a>
            <span className="number"><a href="https://github.com/michjord0001">200</a></span>
          </div>
          <div>
            <a href="https://mastodon.green/@michjord0001">Mastodon</a>
            <span className="number"><a href="https://mastodon.green/@michjord0001">300</a></span>
          </div>
          <div>
            <a href="https://pixelfed.social/michjord0001">PixelFed</a>
            <span className="number"><a href="https://pixelfed.social/michjord0001">130</a></span>
          </div>
          <div>
            <a href="http://linkedin.com/in/michjord0001">LinkedIn</a>
            <span className="number"><a href="http://linkedin.com/in/michjord0001">170</a></span>
          </div>
          <div>
            <a href="https://x.com/michjord0001">Twitte𝕏</a>
            <span className="number"><a href="https://x.com/michjord0001">600</a></span>
          </div>
          <div>
            <a href="http://facebook.com/michjord0001">Facebook</a>
            <span className="number"><a href="http://facebook.com/michjord0001">500</a></span>
          </div>
          <div>
            <a href="http://instagram.com/michjord0001">Instagram</a>
            <span className="number"><a href="http://instagram.com/michjord0001">620</a></span>
          </div>
          <div>
            <a href="https://t.me/michjord0001">Telegram</a>
            <span className="number"><a href="https://t.me/michjord0001">600</a></span>
          </div>
          <div>
            <a href="https://open.spotify.com/user/1156208606">Spotify</a>
            <span className="number"><a href="https://open.spotify.com/user/1156208606">600</a></span>
          </div>
        </section>

        <div className="bottom-container">
          <div className="bottom-item">
            <img src={handcodedImg} alt="Handcoded" />
          </div>
          <div className="bottom-item">
            <img src={transrights1Img} alt="Trans Rights" />
          </div>
          <div className="bottom-item">
            <img src={lgbtfriendlyImg} alt="LGBT Friendly" />
          </div>
          <div className="bottom-item">
            <a href="https://bdsmovement.net/what-is-bds">
              <img src={freePalestineImg} alt="Free Palestine" />
            </a>
          </div>
          <div className="bottom-item">
            <img src={antifaImg} alt="Antifa" width="80" />
          </div>
          <div className="bottom-item">
            <img src={blackLivesMatterImg} alt="Black Lives Matter" />
          </div>
        </div>

        </main>

      <footer className="teletext-footer">
        Free Open Source Software
      </footer>
    </div>
  );
};

export default Home;
