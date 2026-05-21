import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "The Legend Hanuman",
    category: "AI Cinematic Video",
    tools: "Pixverse, GPT Image2, Gemini, CapCut, Claude",
    images: [
      "/images/hanuman.jpeg",
      "/images/hanuman2.jpeg",
      "/images/hanuman3.jpeg",
    ],
  }
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [imageIndices, setImageIndices] = useState<{ [key: number]: number }>({});

  const handleNextImage = (projectIndex: number, maxImages: number) => {
    setImageIndices((prev) => {
      const current = prev[projectIndex] || 0;
      return { ...prev, [projectIndex]: (current + 1) % maxImages };
    });
  };

  const handlePrevImage = (projectIndex: number, maxImages: number) => {
    setImageIndices((prev) => {
      const current = prev[projectIndex] || 0;
      return { ...prev, [projectIndex]: current === 0 ? maxImages - 1 : current - 1 };
    });
  };

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper" style={{ display: "flex", flexDirection: "column" }}>
                      <WorkImage image={project.images[imageIndices[index] || 0]} alt={project.title} />
                      {project.images.length > 1 && (
                        <div className="project-image-nav" style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "15px" }}>
                          <button
                            onClick={() => handlePrevImage(index, project.images.length)}
                            data-cursor="disable"
                            style={{ background: "transparent", border: "1px solid #14b8a6", color: "#14b8a6", borderRadius: "50%", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all 0.3s ease" }}
                          >
                            <MdArrowBack />
                          </button>
                          <span style={{ display: "flex", alignItems: "center", color: "#14b8a6", fontSize: "14px", fontWeight: 600 }}>
                            {(imageIndices[index] || 0) + 1} / {project.images.length}
                          </span>
                          <button
                            onClick={() => handleNextImage(index, project.images.length)}
                            data-cursor="disable"
                            style={{ background: "transparent", border: "1px solid #14b8a6", color: "#14b8a6", borderRadius: "50%", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all 0.3s ease" }}
                          >
                            <MdArrowForward />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
