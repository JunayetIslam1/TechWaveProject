import React from "react";
import "./App.css";

// Images imported from local assets folder
import TechWaveLogo from "./assets/images/TechWave.png";
import HamburgerMenu from "./assets/images/hamburger-menu.png";
import HeroCircle from "./assets/images/hero-circle.png";
import Microphone from "./assets/images/microphone.png";
import SpotifyIcon from "./assets/images/spotify.png";
import MessageIcon from "./assets/images/message.png";
import HeadphoneIcon from "./assets/images/headphone.png";
import DeviceIcon from "./assets/images/device.png";
import LocationIcon from "./assets/images/location.png";
import ZapFastIcon from "./assets/images/zap-fast.png";
import ResourceIcon from "./assets/images/resource.png";
import ClockIcon from "./assets/images/clock.png";
import HostPhoto from "./assets/images/host.png";
import LinkedinIcon from "./assets/images/linkedin.png";
import XIcon from "./assets/images/x.png";
import InstagramIcon from "./assets/images/instagram.png";
import YoutubeIcon from "./assets/images/youtube.png";
import ApplePodcastIcon from "./assets/images/apple-podcast.png";
import YoutubePodcastIcon from "./assets/images/youtube-podcast.png";
import TwitterIcon from "./assets/images/twitter.png";

const ArrowRightIcon = () => (
  <svg width="14" height="14" viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
  </svg>
);

const StarIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 576 512"
    fill="#00FF88"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: "inline", verticalAlign: "middle" }}
  >
    <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0z" />
  </svg>
);

export default function App() {
  return (
    <div className="tw-root">
      <header id="home">
        <nav className="tw-navbar">
          <div className="tw-navbar-container">
            <img className="tw-logo" src={TechWaveLogo} alt="TechWave" />
            <ul className="tw-navbar-menu">
              <li><a href="#home">Home</a></li>
              <li><a href="#episodes">Episodes</a></li>
              <li><a href="#host">Host</a></li>
            </ul>
            <a
              className="tw-navbar-btn"
              href="https://open.spotify.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Subscribe <ArrowRightIcon />
            </a>
            <img className="tw-hamburger" src={HamburgerMenu} alt="menu" />
          </div>
        </nav>

        <section className="tw-hero-section">
          <div className="tw-hero-container">
            <div className="tw-hero-img-container">
              <button className="tw-hero-img-btn">New</button>
              <img className="tw-hero-background" src={HeroCircle} alt="" />
              <img className="tw-microphone" src={Microphone} alt="" />
            </div>

            <div className="tw-hero-desc">
              <h2 className="tw-hero-title">TechWave</h2>
              <p className="tw-hero-tagline">
                Your daily dose of tech insights, productivity hacks, and personal growth
              </p>
              <div className="tw-hero-buttons">
                <a
                  className="tw-btn-spotify"
                  href="https://open.spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={SpotifyIcon} alt="" />
                  Listen On Spotify
                </a>
                <a
                  className="tw-btn-subscribe"
                  href="https://podcasts.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={MessageIcon} alt="" />
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        </section>
      </header>

      <main>
        <section className="tw-about-section">
          <div className="tw-about-inner">
            <h1 className="tw-about-title">About The Podcast</h1>
            <p className="tw-about-text">
              TechWave is your go-to podcast for staying ahead in the fast-paced world of technology.<br />
              We break down complex topics into digestible insights, explore productivity strategies that actually work,<br />
              and share stories of personal growth from industry leaders.<br /><br />
              Join thousands of young professionals and tech enthusiasts who start their day with TechWave.
            </p>
          </div>

          <div className="tw-stats-grid">
            <div className="tw-stat">
              <h2 className="tw-stat-number">150k+</h2>
              <h5 className="tw-stat-label">MONTHLY LISTENERS</h5>
            </div>
            <div className="tw-stat">
              <h2 className="tw-stat-number">200+</h2>
              <h5 className="tw-stat-label">EPISODES PUBLISHED</h5>
            </div>
            <div className="tw-stat">
              <h2 className="tw-stat-number">4.9 <StarIcon /></h2>
              <h5 className="tw-stat-label">AVERAGE RATING</h5>
            </div>
            <div className="tw-stat">
              <h2 className="tw-stat-number">50+</h2>
              <h5 className="tw-stat-label">INDUSTRY EXPERTS</h5>
            </div>
          </div>
        </section>

        <section className="tw-why-section">
          <h2 className="tw-why-title">Why Choose TechWave</h2>

          <div className="tw-why-grid">
            <div className="tw-card tw-card-audio">
              <img src={HeadphoneIcon} alt="" className="tw-card-icon" />
              <h3 className="tw-card-title">Premium Audio Quality</h3>
              <p className="tw-card-text">
                Experience crystal-clear sound with professional-grade recording equipment and expert audio engineering.
              </p>
            </div>

            <div className="tw-card tw-card-mobile">
              <img src={DeviceIcon} alt="" className="tw-card-icon" />
              <h3 className="tw-card-title">Mobile Friendly</h3>
              <p className="tw-card-text">
                Access your favorite episodes on the go. Our platform is fully optimized for seamless streaming on any mobile device.
              </p>
            </div>

            <div className="tw-card tw-card-community">
              <img src={LocationIcon} alt="" className="tw-card-icon" />
              <h3 className="tw-card-title">Global Community</h3>
              <p className="tw-card-text">
                Join thousands of listeners worldwide. Connect, share insights, and grow with a community of tech enthusiasts.
              </p>
            </div>

            <div className="tw-card tw-card-interviews">
              <img src={ZapFastIcon} alt="" className="tw-card-icon" />
              <h3 className="tw-card-title">Exclusive Interviews</h3>
              <p className="tw-card-text">
                Get insider perspectives from industry leaders and innovators you won't find anywhere else.
              </p>
            </div>

            <div className="tw-card tw-card-resources">
              <img src={ResourceIcon} alt="" className="tw-card-icon" />
              <h3 className="tw-card-title">Rich Resources</h3>
              <p className="tw-card-text">
                Download show notes, transcripts, and curated resource lists for every single episode.
              </p>
            </div>
          </div>
        </section>

        <section className="tw-featured-section">
          <div className="tw-episodes-wrap">
    <h2 className="tw-section-title">Featured Episodes</h2>
    <div className="tw-episodes-row">
      <div className="tw-episode-card">
        <iframe
          className="tw-episode-iframe"
          height="215"
          src="https://www.youtube.com/embed/HvkqvbdwOlw"
          title="MUSTAFA JAAN E REHMAT | DAROOD O SALAAM | Atif Aslam | Boss Menn"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="tw-episode-body">
          <h2 className="tw-episode-title">
            MUSTAFA JAAN E REHMAT | DAROOD O SALAAM | Atif Aslam | Boss Menn
          </h2>
          <p className="tw-episode-desc">
            A soulful recitation of Darood O Salaam 'Mustafa Jaan E Rehmat' by Atif Aslam.
          </p>
          <p className="tw-episode-meta">
            <img src={ClockIcon} alt="" />
            <span>5 min</span>
          </p>
                </div>
              </div>

              <div className="tw-episode-card">
        <iframe
          className="tw-episode-iframe"
          height="215"
          src="https://www.youtube.com/embed/2VLqZtded_0"
          title="Maher Zain & Harris J - Qalbi Fil Madinah | Official Music Video | قلبي في المدينة"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="tw-episode-body">
          <h2 className="tw-episode-title">
            Maher Zain & Harris J - Qalbi Fil Madinah | Official Music Video
          </h2>
          <p className="tw-episode-desc">
            Official Music Video for "Qalbi Fil Madinah" performed by Maher Zain and Harris J.
          </p>
          <p className="tw-episode-meta">
            <img src={ClockIcon} alt="" />
            <span>4 min</span>
          </p>
                </div>
              </div>

             <div className="tw-episode-card">
        <iframe
          className="tw-episode-iframe"
          height="215"
          src="https://www.youtube.com/embed/w1sqYgnwEqI"
          title="Bismillah - Salim - Sulaiman, Kailash Kher, Munawar Masoom"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="tw-episode-body">
          <h2 className="tw-episode-title">
            Bismillah - Salim - Sulaiman, Kailash Kher
          </h2>
          <p className="tw-episode-desc">
            A soulful Sufi track composed by Salim-Sulaiman featuring Kailash Kher and Munawar Masoom Khan.
          </p>
          <p className="tw-episode-meta">
            <img src={ClockIcon} alt="" />
            <span>8 min</span>
          </p>
                </div>
              </div>
            </div>
          </div>

          <div className="tw-host-wrap" id="host">
            <h2 className="tw-host-title">Meet The Host</h2>
            <div className="tw-host-container">
              <img className="tw-host-photo" src={HostPhoto} alt="Junayet Islam" />
              <div className="tw-host-desc">
                <h1 className="tw-host-name">Junayet Islam</h1>
                <p className="tw-host-bio">
                  Software engineer, tech enthusiast, and lifelong learner. Junayet has been in the tech industry
        for over 2 years, working with startups and modern tech companies. Through TechWave, Junayet shares
        coding insights, development practices, and practical advice for anyone looking to grow as a developer.
                </p>
                <div className="tw-host-socials">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedinIcon} alt="LinkedIn" />
                  </a>
                  <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                    <img src={XIcon} alt="X" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={InstagramIcon} alt="Instagram" />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    <img src={YoutubeIcon} alt="YouTube" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="tw-footer">
        <img className="tw-footer-logo" src={TechWaveLogo} alt="TechWave" />
        <ul className="tw-footer-links">
          <li>
            <a className="tw-footer-link" href="https://open.spotify.com" target="_blank" rel="noopener noreferrer">
              <img src={SpotifyIcon} alt="" /><span>Spotify</span>
            </a>
          </li>
          <li>
            <a className="tw-footer-link" href="https://podcasts.apple.com" target="_blank" rel="noopener noreferrer">
              <img src={ApplePodcastIcon} alt="" /><span>Apple Podcast</span>
            </a>
          </li>
          <li>
            <a className="tw-footer-link" href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <img src={YoutubePodcastIcon} alt="" /><span>Youtube</span>
            </a>
          </li>
          <li>
            <a className="tw-footer-link" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={TwitterIcon} alt="" /><span>Twitter</span>
            </a>
          </li>
        </ul>
        <p className="tw-copyright">&copy; 2026 TechWave Podcast. All rights reserved.</p>
      </footer>
    </div>
  );
}
