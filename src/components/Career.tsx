import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" style={{ height: "auto", minHeight: "100vh", paddingBottom: "100px" }}>
      <div className="career-container">
        <h2>
          My <span>Experience</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>LIGHTING & LOOKDEV ARTIST</h4>
                <h5>ZEBU ANIMATION STUDIO (TRIVANDRUM - KERALA)</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              <strong>The Legend of Hanuman — Season 7</strong> Worked as a Lighting & Look
              Development Artist, responsible for creating cinematic lighting,
              developing shaders and materials, and enhancing the final visual
              quality of animated sequences. Collaborated with animation and
              compositing teams to maintain visual consistency and deliver
              production-ready renders.
            </p>
          </div>
        </div>
        <h2 style={{ marginTop: "50px" }}>
          My <span>Education</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>VFX / 3D / UNREAL</h4>
                <h5>ARENA ANIMATION NASHIK</h5>
              </div>
              
            </div>
            <p>
              Focused on visual effects, 3D modeling, and Unreal Engine development. Gained hands-on experience with industry-standard tools and techniques, enhancing my ability to create compelling digital content.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BACHELOR OF COMPUTER APPLICATIONS (BCA)</h4>
                <h5>Pune University</h5>
              </div>
              
            </div>
            <p>
              Completed a comprehensive curriculum covering programming languages, software development, database management, and computer systems. Developed strong problem-solving skills and a solid understanding of computing principles, which enhance my ability to work effectively in technical and creative roles within the digital media industry.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Career;
