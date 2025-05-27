import React, { useState, useEffect } from 'react';
import './Home.css';
import { ethers } from 'ethers';
// import handcodedImg from '../images/marquee/handcoded.png';
// import transrights1Img from '../images/marquee/transrights1.gif';
// import lgbtfriendlyImg from '../images/marquee/lgbtfriendly.gif';
// import freePalestineImg from '../images/marquee/FreePalestine.gif';
// import antifaImg from '../images/marquee/Antifa.png';
// import blackLivesMatterImg from '../images/marquee/blacklivesmatter.gif';

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [walletAddress, setWalletAddress] = useState(null);
  const [error, setError] = useState('');

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

  const connectWallet = async () => {
    if (!window.ethereum) {
      setError('MetaMask not detected');
      return;
    }
    try {
      const [account] = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      setWalletAddress(account);
      setError('');
    } catch (err) {
      setError('Failed to connect wallet');
    }
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

        <div className="wallet-section">
          {walletAddress ? (
            <>
              <button onClick={() => setWalletAddress(null)} className="connect-wallet-button">
                Disconnect
              </button>
              <p className="short-address">
                {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
              </p>
            </>
          ) : (
            <button onClick={connectWallet} className="connect-wallet-button">
              Connect Wallet
            </button>
          )}
          {error && <p className="error">{error}</p>}
        </div>
        

        <section className="section title">Contents</section>

        <section className="section links">
          <div>
            <a href="mailto:mj@michjord0001.digital">Email</a>
            <span className="number"><a href="mailto:mj@michjord0001.digital">101</a></span>
          </div>
          <div>
            <a href="https://github.com/michjord0001">GitHub</a>
            <span className="number"><a href="https://github.com/michjord0001">200</a></span>
          </div>
          <div>
            <a href="https://mastodon.green/@michjord0001">Mastodon</a>
            <span className="number"><a href="https://mastodon.green/@michjord0001">280</a></span>
          </div>
          <div>
            <a href="https://pixelfed.social/michjord0001">PixelFed</a>
            <span className="number"><a href="https://pixelfed.social/michjord0001">321</a></span>
          </div>
          <div>
            <a href="http://linkedin.com/in/michjord0001">LinkedIn</a>
            <span className="number"><a href="http://linkedin.com/in/michjord0001">350</a></span>
          </div>
          <div>
            <a href="https://x.com/michjord0001">Twitte𝕏</a>
            <span className="number"><a href="https://x.com/michjord0001">360</a></span>
          </div>
          <div>
            <a href="http://facebook.com/michjord0001">Facebook</a>
            <span className="number"><a href="http://facebook.com/michjord0001">400</a></span>
          </div>
          <div>
            <a href="http://instagram.com/michjord0001">Instagram</a>
            <span className="number"><a href="http://instagram.com/michjord0001">420</a></span>
          </div>
          <div>
            <a href="https://open.spotify.com/user/1156208606">Spotify</a>
            <span className="number"><a href="https://open.spotify.com/user/1156208606">432</a></span>
          </div>
          <div>
            <a href="https://t.me/michjord0001">Telegram</a>
            <span className="number"><a href="https://t.me/michjord0001">525</a></span>
          </div>
        </section>
{/* 
        <div className="bottom-container">
          <div className="bottom-item">
            <img src={handcodedImg} alt="Handcoded" />
          </div>
          <div className="bottom-item">
            <img src={blackLivesMatterImg} alt="Black Lives Matter" />
          </div>
          <div className="bottom-item">
            <a href="https://bdsmovement.net/what-is-bds">
              <img src={freePalestineImg} alt="Free Palestine" />
            </a>
          </div>         
          <div className="bottom-item">
            <img src={transrights1Img} alt="Trans Rights" />
          </div>
          <div className="bottom-item">
            <img src={lgbtfriendlyImg} alt="LGBT Friendly" />
          </div>
        </div> */}

        </main>

      <footer className="teletext-footer">
        Free Open Source Software
      </footer>
    </div>
  );
};

export default Home;
