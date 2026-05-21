import { PropsWithChildren, useEffect, useState } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current === 0 ? 1 : 0));
    }, 4000); // Adjust this to change how long each role stays on screen (4000 = 4 seconds)
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <style>{`
          body, html {
            overflow-x: hidden !important;
          }
          .landing-role-container {
            position: relative;
            height: 50px;
            width: 100%;
          }
          .landing-role {
            position: absolute;
            top: 0;
            left: 0;
            font-family: "Geist", sans-serif;
            font-weight: 600;
            font-size: 32px;
            color: #14b8a6;
            white-space: nowrap;
            letter-spacing: 2px;
            text-transform: uppercase;
            opacity: 0;
            transform: translateY(30px) scale(0.95);
            transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
            pointer-events: none;
          }
          .landing-role.active {
            opacity: 1;
            transform: translateY(0) scale(1);
            pointer-events: auto;
          }
          .landing-role.exit {
            opacity: 0;
            transform: translateY(-30px) scale(0.95);
          }
          .landing-h3-sync {
            transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
            opacity: 0;
            transform: translateY(15px);
          }
          .landing-h3-sync.active {
            opacity: 1;
            transform: translateY(0);
          }
          .landing-h3-sync.exit {
            opacity: 0;
            transform: translateY(-15px);
          }
          @media screen and (min-width: 768px) {
            .landing-role { font-size: 42px; }
            .landing-role-container { height: 60px; }
          }
          @media screen and (min-width: 1025px) {
            .landing-info { left: 60% !important; }
          }
          @media screen and (min-width: 1200px) {
            .landing-info { left: 63% !important; }
          }
          @media screen and (min-width: 1600px) {
            .landing-role { font-size: 60px; }
            .landing-role-container { height: 80px; }
          }
        `}</style>
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              NIRAJ
              <br />
              <span>JADHAV</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3 className={`landing-h3-sync ${activeIndex === 0 ? "active" : "exit"}`}>
              An Unreal Engine
            </h3>
            <div className="landing-role-container">
              <div className={`landing-role ${activeIndex === 0 ? "active" : "exit"}`}>
                Lighting Artist
              </div>
              <div className={`landing-role ${activeIndex === 1 ? "active" : "exit"}`}>
                AI Cinematic Artist
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
