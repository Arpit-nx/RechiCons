import { useEffect, useState } from "react";
import rechiLogo from "../assets/rechi_logo.png";

function Home({ onSplashEnd }) {
  const [showSplash, setShowSplash] = useState(true);
  const [splashLeaving, setSplashLeaving] = useState(false);

  useEffect(() => {
    const hideSplashTimer = window.setTimeout(() => {
      setSplashLeaving(true);

      window.setTimeout(() => {
        setShowSplash(false);
        if (onSplashEnd) {
          onSplashEnd();
        }
      }, 650);
    }, 2200);

    return () => {
      window.clearTimeout(hideSplashTimer);
    };
  }, [onSplashEnd]);

  return (
    <div className="home-shell">
      {showSplash && (
        <div
          className={`home-splash ${splashLeaving ? "home-splash--leave" : ""}`}
          aria-hidden="true"
        >
          <div className="home-splash__halo" />
          <div className="home-splash__card">
            <img
              src={rechiLogo}
              alt="Rechi Construction"
              className="home-splash__logo"
            />
            <div className="home-splash__brand">
              <span className="home-splash__title" aria-label="Rechi Construction">
                <span className="home-splash__title-part home-splash__title-part--left">
                  Rechi
                </span>
                <span className="home-splash__title-part home-splash__title-part--right">
                  Construction
                </span>
              </span>
              <span className="home-splash__subtitle">Building spaces with trust and precision</span>
            </div>
            <div className="home-splash__loader" />
          </div>
        </div>
      )}

      <section
        className={`home-hero ${showSplash ? "home-hero--hidden" : "home-hero--enter"}`}
      >
        <div className="home-hero__content">
          <p className="home-hero__eyebrow">Welcome to Rechi Construction</p>
          <h1>Crafting homes, commercial spaces, and landmarks that last.</h1>
          <p className="home-hero__copy">
            We design and build with a balance of craftsmanship, planning, and
            dependable delivery for every project.
          </p>
          <div className="home-hero__actions">
            <a className="home-hero__button home-hero__button--primary" href="/projects">
              View Projects
            </a>
            <a className="home-hero__button" href="/about">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;