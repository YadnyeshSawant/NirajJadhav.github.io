import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:jadhavniraj002@gmail.com" data-cursor="disable">
                jadhavniraj002@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+91 7972362891" data-cursor="disable">
                +91 79723 62891
              </a>
            </p>
            <h4>Education</h4>
            <p>Bachelor of Computer Applications</p>
            
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://www.linkedin.com/in/niraj-jadhav-301797230/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/niraj_jadhav_dj_nj"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Niraj Jadhav</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
