import { useEffect, useState } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";

import Marquee from "react-fast-marquee";

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [loaded, setLoaded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);

  if (percent >= 100) {
    setTimeout(() => {
      setLoaded(true);
      setTimeout(() => {
        setIsLoaded(true);
      }, 1000);
    }, 600);
  }

  useEffect(() => {
    import("./utils/initialFX").then((module) => {
      if (isLoaded) {
        setClicked(true);
        setTimeout(() => {
          if (module.initialFX) {
            module.initialFX();
          }
          setIsLoading(false);
        }, 900);
      }
    });
  }, [isLoaded]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }

  return (
    <>
      <div className="loading-header">
        <a href="/#" className="loader-title" data-cursor="disable">
          NJ
        </a>
      </div>
      <div className="loading-screen">
        <style>{`
          .tom-jerry-running-container {
            position: absolute;
            bottom: 12%;
            left: -150px;
            z-index: 9999;
            animation: tom-jerry-run-across 5s linear infinite;
            transition: opacity 0.5s ease-out;
            pointer-events: none;
          }
          .tom-jerry-running-container img {
            height: 180px;
          }
          .tom-jerry-running-container.loader-out {
            opacity: 0;
          }
          @keyframes tom-jerry-run-across {
            0% { transform: translateX(0vw); }
            100% { transform: translateX(120vw); } /* Runs past the edge of the screen */
          }
          .loading-marquee {
            top: 35% !important;
            color: #000000 !important;
          }
          .loading-marquee span::before {
            background-color: #000000 !important;
          }
          .loading-wrap {
            margin-top: 150px;
          }
          .loading-floor {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100vw;
            z-index: 9998;
            transition: opacity 0.5s ease-out;
            pointer-events: none;
            line-height: 0;
          }
          .loading-floor img {
            width: 100%;
            height: 12vh;
            object-fit: cover;
          }
          .loading-floor.loader-out {
            opacity: 0;
          }
        `}</style>
        <div className={`loading-floor ${clicked ? "loader-out" : ""}`}>
          <img src="/images/floor.png" alt="Floor" />
        </div>
        <div className={`tom-jerry-running-container ${clicked ? "loader-out" : ""}`}>
          <img src="/images/mario.gif" alt="Mario Running" />
        </div>
        <div className="loading-marquee">
          <Marquee>
            <span> AI Cinematic Artist</span> <span>Lighting and LookDev Artist</span>
            
          </Marquee>
        </div>
        <div
          className={`loading-wrap ${clicked && "loading-clicked"}`}
          onMouseMove={(e) => handleMouseMove(e)}
        >
          <div className="loading-hover"></div>
          <div className={`loading-button ${loaded && "loading-complete"}`}>
            <div className="loading-container">
              <div className="loading-content">
                <div className="loading-content-in">
                  Loading <span>{percent}%</span>
                </div>
              </div>
              <div className="loading-box"></div>
            </div>
            <div className="loading-content2">
              <span>Welcome</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;

export const setProgress = (setLoading: (value: number) => void) => {
  let percent: number = 0;

  let interval = setInterval(() => {
    if (percent <= 50) {
      let rand = Math.round(Math.random() * 5);
      percent = percent + rand;
      setLoading(percent);
    } else {
      clearInterval(interval);
      interval = setInterval(() => {
        percent = percent + Math.round(Math.random());
        setLoading(percent);
        if (percent > 91) {
          clearInterval(interval);
        }
      }, 2000);
    }
  }, 100);

  function clear() {
    clearInterval(interval);
    setLoading(100);
  }

  function loaded() {
    return new Promise<number>((resolve) => {
      clearInterval(interval);
      interval = setInterval(() => {
        if (percent < 100) {
          percent++;
          setLoading(percent);
        } else {
          resolve(percent);
          clearInterval(interval);
        }
      }, 2);
    });
  }
  return { loaded, percent, clear };
};
