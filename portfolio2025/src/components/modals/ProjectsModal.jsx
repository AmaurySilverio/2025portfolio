import { useRef, useEffect, useState } from "react";
import aslLingo from "../../../photos/projects/ASL-Lingo.gif";
import arrange from "../../../photos/projects/arrange-portfolio.gif";
import communityCatalyst from "../../../photos/projects/community-catalyst.gif";
import connections from "../../../photos/projects/connections.gif";
import mozilla from "../../../photos/projects/mozilla.gif";
import cardGame from "../../../photos/projects/naruto-card-game.gif";
import slotMachine from "../../../photos/projects/slotMachine.gif";
import slimeMolds from "../../../photos/projects/slimeMolds";
import closeImg from "../../../photos/x-thin-svgrepo-com.svg";

const ProjectsModal = ({ show, onClick }) => {
  const showHideClassName = show ? "projects-outer-wrapper" : "display-none";

  return (
    <div className={showHideClassName}>
      <div className="click-out-of-projects-modal" onClick={onClick}></div>
      <div className="projects-inner-wrapper">
        <button className="projects-close-button" onClick={onClick}>
          <img src={closeImg} />
        </button>
        <div className="projects-container">
          <div className="project">
            <img src={arrange} />
            <h3>[arr]ange</h3>
            <p>
              A Job Application Tracker with a built-in Pomodoro Timer to boost
              productivity. The front-end is built with React.js, featuring
              components I designed and developed. The back-end is powered by
              Appwrite.
            </p>
            <a href="https://arrange-hitlist.netlify.app/" target="_blank">
              <button>View Project</button>
            </a>
          </div>
          <div className="project">
            <img src={connections} />
            <h3>Connections Game</h3>
            <p>
              New York Times Connections clone where you can create your own
              custom game! The front-end was created using React, JS, and CSS.
              The back-end was created using python and MongoDB. Create a game
              and share with friends!
            </p>
            <a
              href="https://freestyleconnections.onrender.com/"
              target="_blank"
            >
              <button>View Project</button>
            </a>
          </div>
          <div className="project">
            <img src={aslLingo} />
            <h3>ASL-Lingo</h3>
            <p>
              MVP Full-Stack Application that teaches users basic American Sign
              Language. The front-end was created using EJS, Javascript, CSS,
              and Bootstrap. The back-end was created using MongoDB and Node.JS.
            </p>
            <a href="https://asl-lingo.onrender.com/" target="_blank">
              <button>View Project</button>
            </a>
          </div>
          <div className="project">
            <img src={communityCatalyst} />
            <h3>Community Catalyst</h3>
            <p>
              MVP Full-Stack Application that allows members of your community
              to connect and create meaningful impact through event organizing.
              The front-end was created using EJS and CSS. The back-end was
              created using Node.JS and MongoDB.
            </p>
            <a href="https://community-catalyst.onrender.com/" target="_blank">
              <button>View Project</button>
            </a>
          </div>
          <div className="project">
            <img src={slimeMolds} />
            <h3>Slime Molds Visualizer</h3>
            <p>
              An interactive simulation inspired by the movement patterns of
              Slime Molds, generated using a custom algorithm. Users can
              customize the color, size, and background to create mesmerizing
              scenes. Built with p5.js.
            </p>
            <a href="https://physarum.netlify.app/" target="_blank">
              <button>View Project</button>
            </a>
          </div>
          {/* <div className="project">
            <img src={cardGame} />
            <h3>Matching Card Game</h3>
            <p>
              Naruto Themed Matching card game created using Javascript, CSS &
              HMTL.
            </p>
            <a href="https://narutocardgame.netlify.app/" target="_blank">
              <button>View Project</button>
            </a>
          </div> */}
          {/* <div className="project">
            <img src={slotMachine} />
            <h3>Slot Machine Game</h3>
            <p>
              Responsive slot machine game created using Javascript, CSS & HTML.
            </p>
            <a href="https://wrestlingslotmachine.netlify.app/" target="_blank">
              <button>View Project</button>
            </a>
          </div> */}
          <div className="project">
            <img src={mozilla} />
            <h3>Mozilla Mock-up</h3>
            <p>
              Responsive mock-up of Mozilla's site created using HTML & CSS.
            </p>
            <a href="https://mozillamockup.netlify.app/" target="_blank">
              <button>View Project</button>
            </a>
          </div>
          {/* <div className="project">
          <img />
          <h3></h3>
          <p></p>
          <button>View Project</button>
        </div>*/}
        </div>
      </div>
    </div>
  );
};

export default ProjectsModal;
