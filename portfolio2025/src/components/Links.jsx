import { useState } from "react";
import ProjectsModal from "./modals/ProjectsModal";
import ContactModal from "./modals/ContactModal";
const Links = () => {
  const [projects, setProjects] = useState(false);
  const [contact, setContact] = useState(false);
  const handleProjectsClick = () => {
    setProjects(true);
  };
  const handleContactClick = () => {
    setContact(true);
  };
  const handleProjectsModalClose = () => {
    setProjects(false);
  };
  const handleContactModalClose = () => {
    setContact(false);
  };

  return (
    <>
      <ProjectsModal show={projects} onClick={handleProjectsModalClose} />
      <ContactModal show={contact} onClick={handleContactModalClose} />
      <div className="links-container">
        <div className="links">
          <a
            className="social-link"
            href="/Software Development Resume.pdf"
            target="_blank"
          >
            Resume
          </a>
          <p className="social-link p" onClick={handleProjectsClick}>
            Projects
          </p>
          <a
            className="social-link"
            href="https://github.com/AmaurySilverio"
            target="_blank"
          >
            GitHub
          </a>
          <a
            className="social-link"
            href="https://www.linkedin.com/in/amaury-silverio/"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            className="social-link"
            href="https://x.com/AmauryCodes"
            target="_blank"
          >
            X
          </a>
          <a
            className="social-link"
            href="https://www.instagram.com/amaurycodes/"
            target="_blank"
          >
            Instagram
          </a>
          <p className="social-link p" onClick={handleContactClick}>
            Contact/About
          </p>
        </div>
      </div>
    </>
  );
};

export default Links;
