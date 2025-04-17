import bicycle from "../../../photos/icons/bicycle.png";
import boardGame from "../../../photos/icons/board-game.png";
import code from "../../../photos/icons/code.png";
import cooking from "../../../photos/icons/cooking.png";
import gardening from "../../../photos/icons/gardening.png";

import closeImg from "../../../photos/x-thin-svgrepo-com.svg";

const ContactModal = ({ show, onClick }) => {
  const showHideClassName = show ? "contact-outer-wrapper" : "display-none";
  return (
    <div className={showHideClassName}>
      <div className="click-out-of-contact-modal" onClick={onClick}></div>
      <div className="contact-inner-wrapper">
        <button className="contact-close-button" onClick={onClick}>
          <img src={closeImg} />
        </button>
        <div className="contact-container">
          <div className="del-blurb">
            <p>
              As a software engineer, I tend to gravitate towards projects that
              emphasize community, safety, and fun. I'm especially driven to
              create tools that address real-world challenges through thoughtful
              and inclusive engineering. With experience across both front-end
              and back-end development, I enjoy collaborating on user-centered
              solutions that make a meaningful impact. One of my recent
              projects, ASL Lingo, is a full-stack web application designed to
              help users learn American Sign Language. When I saw DuoLingo
              didn't offer ASL, I set out to build a tool that does.
              {/* I'm also
              excited to share my upcoming project,{" "}
              <span className="pot-luck-bold">Pot Luck</span>, a community
              cookbook app launching this summer. */}
              {/* It's all about celebrating
              culture, connection, and good food. */}
            </p>
            <p>
              When I'm not coding, I enjoy riding my bike with friends, trying
              new recipes, gardening, and board games. Fun fact: I've never lost
              a game of Wing Span!
            </p>
          </div>
          <div className="icons-container">
            <a
              href="https://www.flaticon.com/free-icons/bike"
              title="Bike icons created by Freepik - Flaticon"
              target="_blank"
            >
              <img className="icon" src={bicycle} alt="bicycle icon"></img>
            </a>
            <a
              href="https://www.flaticon.com/free-icons/cooking"
              title="Cooking icons created by Freepik - Flaticon"
              target="_blank"
            >
              <img className="icon" src={cooking} alt="cooking icon" />
            </a>
            <a
              href="https://www.flaticon.com/free-icons/code"
              title="Code icons created by Royyan Wijaya - Flaticon"
              target="_blank"
            >
              {" "}
              <img className="icon" src={code} alt="code snippet icon" />
            </a>
            <a
              href="https://www.flaticon.com/free-icons/gardening"
              title="Gardening icons created by Freepik - Flaticon"
              target="_blank"
            >
              {" "}
              <img className="icon" src={gardening} alt="gardening icon" />
            </a>
            <a
              href="https://www.flaticon.com/free-icons/board-game"
              title="Board game icons created by Freepik - Flaticon"
              target="_blank"
            >
              {" "}
              <img className="icon" src={boardGame} alt="board game icon" />
            </a>
          </div>
          <div className="contact-blurb">
            <p>
              I'm currently accepting freelance clients and always open to
              meaningful collaborations. Let's bring your ideas to life. And if
              you've got any favorite food spots in Philly, send them my way!
            </p>
          </div>
          <a className="contact-email-link" href="mailto:amaurycodes@gmail.com">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
