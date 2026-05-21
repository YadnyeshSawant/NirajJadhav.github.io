import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO" style={{ height: "auto", minHeight: "100vh", paddingBottom: "120px" }}>
      <style>{`
        .what-box, .what-box-in, .what-content-in {
          height: auto !important;
          max-height: none !important;
        }
        .what-content:hover, .what-content.what-content-active {
          height: auto !important;
          max-height: 3000px !important;
        }
        .what-hidden-content {
          opacity: 0;
          max-height: 0;
          overflow: hidden;
          transition: all 0.4s ease-in-out;
        }
        .what-content:hover .what-hidden-content, .what-content.what-content-active .what-hidden-content {
          opacity: 1;
          max-height: 2000px;
          margin-top: 15px;
          padding-bottom: 20px;
        }
      `}</style>
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in" style={{ paddingBottom: "60px" }}>
              <h3>UNREAL ENGINE</h3>
              <h4>Creating Immersive 3D Experiences</h4>
              <div className="what-hidden-content">
                <p>
                  Developing visually stunning, interactive 3D environments and experiences using Unreal Engine.
                  From concept to deployment, I bring creative visions to life with cutting-edge technology.
                </p>
                <h5>Skillset & tools</h5>
                <div className="what-content-flex">
                  <div className="what-tags">Unreal Engine</div>
                  <div className="what-tags">Blueprints</div>
                  <div className="what-tags">Animation</div>
                  <div className="what-tags">Gaming</div>
                  <div className="what-tags">Material Editor</div>
                  <div className="what-tags">Animation Blueprints</div>
                  <div className="what-tags">Lighting Setup</div>
                  <div className="what-tags">Sequencer</div>
                </div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in" style={{ paddingBottom: "60px" }}>
              <h3>AI CINEMATIC ARTIST</h3>
              <h4>Designing Intelligent Cinematic Experiences</h4>
              <div className="what-hidden-content">
                <p>
                  Using different tools to create cinematic content using AI technologies and Edit them in a way to make them more engaging and immersive. I Create visually stunning cinematic sequences that captivate audiences and enhance storytelling.
                </p>
                <h5>Skillset & tools</h5>
                <div className="what-content-flex">
                  <div className="what-tags">Pixverse</div>
                  <div className="what-tags">Seedance2.0</div>
                  <div className="what-tags">KlingAI</div>
                  <div className="what-tags">Runway</div>
                  <div className="what-tags">Pika</div>
                  <div className="what-tags">Luma Dream Machine</div>
                  <div className="what-tags">Google Veo</div>
                  <div className="what-tags">Pika Labs</div>
                  <div className="what-tags">Sora 2</div>
                  <div className="what-tags">Claude AI</div>
                </div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
