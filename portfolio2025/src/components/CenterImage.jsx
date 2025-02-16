import { useState } from "react";
import originalHeadshot from "../../photos/portfolio-pics/center.jpg";
import clickedHeadshot from "../../photos/portfolio-pics/center-clicked.jpg";
import headshot1 from "../../photos/portfolio-pics/image1.jpg";
import headshot2 from "../../photos/portfolio-pics/image2.jpg";
import headshot3 from "../../photos/portfolio-pics/image3.jpg";
import headshot4 from "../../photos/portfolio-pics/image4.jpg";
import headshot5 from "../../photos/portfolio-pics/image5.jpg";
import headshot6 from "../../photos/portfolio-pics/image6.jpg";
import headshot7 from "../../photos/portfolio-pics/image7.jpg";
import headshot8 from "../../photos/portfolio-pics/image8.jpg";
import headshot9 from "../../photos/portfolio-pics/image9.jpg";
import headshot10 from "../../photos/portfolio-pics/image10.jpg";
import headshot11 from "../../photos/portfolio-pics/image11.jpg";
import headshot12 from "../../photos/portfolio-pics/image12.jpg";
import headshot13 from "../../photos/portfolio-pics/image13.jpg";
import headshot14 from "../../photos/portfolio-pics/image14.jpg";
import headshot15 from "../../photos/portfolio-pics/image15.jpg";
import headshot16 from "../../photos/portfolio-pics/image16.jpg";

const CenterImage = () => {
  const [headshot, setHeadshot] = useState(headshot1);
  function trackPointer(event) {
    let x = event.touches[0].clientX;
    let y = event.touches[0].clientY;
    console.log("x", x);
    console.log("y", y);
    if (x <= window.innerWidth / 5) {
      setHeadshot(headshot1);
    }
    if (x > (1 / 5) * window.innerWidth && x <= (2 / 5) * window.innerWidth) {
      setHeadshot(headshot2);
    }
    if (x >= (2 / 5) * window.innerWidth && x <= (3 / 5) * window.innerWidth) {
      setHeadshot(headshot3);
    }
    if (x >= (3 / 5) * window.innerWidth && x <= (4 / 5) * window.innerWidth) {
      setHeadshot(headshot4);
    }
    if (x >= (4 / 5) * window.innerWidth && x <= window.innerWidth) {
      setHeadshot(headshot5);
    }
    if (
      // x >= (4 / 5) * window.innerWidth &&
      // x <= window.innerWidth &&
      y >= (1 / 5) * window.innerHeight &&
      y <= (2 / 5) * window.innerHeight
    ) {
      setHeadshot(headshot6);
    }
    if (
      y >= (2 / 5) * window.innerHeight &&
      y <= (3 / 5) * window.innerHeight
    ) {
      setHeadshot(headshot7);
    }
    if (
      y >= (3 / 5) * window.innerHeight &&
      y <= (4 / 5) * window.innerHeight
    ) {
      setHeadshot(headshot8);
    }
    if (y >= (4 / 5) * window.innerHeight && y <= window.innerHeight) {
      setHeadshot(headshot9);
    }
    if (
      x >= (3 / 5) * window.innerWidth &&
      x <= (4 / 5) * window.innerWidth &&
      y >= (4 / 5) * window.innerHeight &&
      y <= window.innerHeight
    ) {
      setHeadshot(headshot10);
    }
    if (
      x >= (2 / 5) * window.innerWidth &&
      x <= (3 / 5) * window.innerWidth &&
      y >= (4 / 5) * window.innerHeight &&
      y <= window.innerHeight
    ) {
      setHeadshot(headshot11);
    }
    if (
      x >= (1 / 5) * window.innerWidth &&
      x <= (2 / 5) * window.innerWidth &&
      y >= (4 / 5) * window.innerHeight &&
      y <= window.innerHeight
    ) {
      setHeadshot(headshot12);
    }
    if (
      x <= (1 / 5) * window.innerWidth &&
      y >= (4 / 5) * window.innerHeight &&
      y <= window.innerHeight
    ) {
      setHeadshot(headshot13);
    }
    if (
      x <= (1 / 5) * window.innerWidth &&
      y >= (3 / 5) * window.innerHeight &&
      y <= (4 / 5) * window.innerHeight
    ) {
      setHeadshot(headshot14);
    }
    if (
      x <= (1 / 5) * window.innerWidth &&
      y >= (2 / 5) * window.innerHeight &&
      y <= (3 / 5) * window.innerHeight
    ) {
      setHeadshot(headshot15);
    }
    if (
      x <= (1 / 5) * window.innerWidth &&
      y >= (1 / 5) * window.innerHeight &&
      y <= (2 / 5) * window.innerHeight
    ) {
      setHeadshot(headshot16);
    }
    if (
      x >= (1 / 5) * window.innerWidth &&
      x <= (2 / 5) * window.innerWidth &&
      y >= (1 / 5) * window.innerHeight &&
      y <= (2 / 5) * window.innerHeight
    ) {
      setHeadshot(headshot1);
    }
    if (
      x >= (2 / 5) * window.innerWidth &&
      x <= (3 / 5) * window.innerWidth &&
      y >= (1 / 5) * window.innerHeight &&
      y <= (2 / 5) * window.innerHeight
    ) {
      setHeadshot(headshot3);
    }
    if (
      x >= (3 / 5) * window.innerWidth &&
      x <= (4 / 5) * window.innerWidth &&
      y >= (1 / 5) * window.innerHeight &&
      y <= (2 / 5) * window.innerHeight
    ) {
      setHeadshot(headshot5);
    }
    if (
      x >= (3 / 5) * window.innerWidth &&
      x <= (4 / 5) * window.innerWidth &&
      y >= (2 / 5) * window.innerHeight &&
      y <= (3 / 5) * window.innerHeight
    ) {
      setHeadshot(headshot7);
    }
    if (
      x >= (3 / 5) * window.innerWidth &&
      x <= (4 / 5) * window.innerWidth &&
      y >= (3 / 5) * window.innerHeight &&
      y <= (4 / 5) * window.innerHeight
    ) {
      setHeadshot(headshot9);
    }
    if (
      x >= (2 / 5) * window.innerWidth &&
      x <= (3 / 5) * window.innerWidth &&
      y >= (3 / 5) * window.innerHeight &&
      y <= (4 / 5) * window.innerHeight
    ) {
      setHeadshot(headshot11);
    }
    if (
      x >= (1 / 5) * window.innerWidth &&
      x <= (2 / 5) * window.innerWidth &&
      y >= (3 / 5) * window.innerHeight &&
      y <= (4 / 5) * window.innerHeight
    ) {
      setHeadshot(headshot13);
    }
    if (
      x >= (1 / 5) * window.innerWidth &&
      x <= (2 / 5) * window.innerWidth &&
      y >= (2 / 5) * window.innerHeight &&
      y <= (3 / 5) * window.innerHeight
    ) {
      setHeadshot(headshot15);
    }
    if (
      x >= (2 / 5) * window.innerWidth &&
      x <= (3 / 5) * window.innerWidth &&
      y >= (2 / 5) * window.innerHeight &&
      y <= (3 / 5) * window.innerHeight
    ) {
      setHeadshot(originalHeadshot);
    }
  }
  return (
    <div className="photo-container">
      <div
        onMouseEnter={() => setHeadshot(headshot1)}
        onTouchMove={(e) => trackPointer(e)}
      ></div>
      <div
        onMouseEnter={() => setHeadshot(headshot2)}
        onTouchMove={(e) => trackPointer(e)}
      ></div>
      <div
        onMouseEnter={() => setHeadshot(headshot3)}
        onTouchMove={(e) => trackPointer(e)}
      ></div>
      <div
        onMouseEnter={() => setHeadshot(headshot4)}
        onTouchMove={(e) => trackPointer(e)}
      ></div>
      <div
        onMouseEnter={() => setHeadshot(headshot5)}
        onTouchMove={(e) => trackPointer(e)}
      ></div>
      <div
        onMouseEnter={() => setHeadshot(headshot16)}
        onTouchMove={(e) => trackPointer(e)}
      ></div>
      <div
        onMouseEnter={() => setHeadshot(headshot1)}
        onTouchMove={(e) => trackPointer(e)}
      ></div>
      <div
        onMouseEnter={() => setHeadshot(headshot3)}
        onTouchMove={(e) => trackPointer(e)}
      ></div>
      <div
        onMouseEnter={() => setHeadshot(headshot5)}
        onTouchMove={(e) => trackPointer(e)}
      ></div>
      <div
        onMouseEnter={() => setHeadshot(headshot6)}
        onTouchMove={(e) => trackPointer(e)}
      ></div>
      <div
        onMouseEnter={() => setHeadshot(headshot15)}
        onTouchMove={(e) => trackPointer(e)}
      ></div>
      <div
        onMouseEnter={() => setHeadshot(headshot15)}
        onTouchMove={(e) => trackPointer(e)}
      ></div>
      <div
        onMouseEnter={() => setHeadshot(originalHeadshot)}
        onTouchMove={(e) => trackPointer(e)}
        onClick={() => setHeadshot(clickedHeadshot)}
      ></div>
      <div
        onMouseEnter={() => setHeadshot(headshot7)}
        onTouchMove={(e) => trackPointer(e)}
      ></div>
      <div
        onMouseEnter={() => setHeadshot(headshot7)}
        onTouchMove={(e) => trackPointer(e)}
      ></div>
      <div
        onMouseEnter={() => setHeadshot(headshot14)}
        onTouchMove={(e) => trackPointer(e)}
      ></div>
      <div
        onMouseEnter={() => setHeadshot(headshot13)}
        onTouchMove={(e) => trackPointer(e)}
      ></div>
      <div
        onMouseEnter={() => setHeadshot(headshot11)}
        onTouchMove={(e) => trackPointer(e)}
      ></div>
      <div
        onMouseEnter={() => setHeadshot(headshot9)}
        onTouchMove={(e) => trackPointer(e)}
      ></div>
      <div
        onMouseEnter={() => setHeadshot(headshot8)}
        onTouchMove={(e) => trackPointer(e)}
      ></div>
      <div
        onMouseEnter={() => setHeadshot(headshot13)}
        onTouchMove={(e) => trackPointer(e)}
      ></div>
      <div
        onMouseEnter={() => setHeadshot(headshot12)}
        onTouchMove={(e) => trackPointer(e)}
      ></div>
      <div
        onMouseEnter={() => setHeadshot(headshot11)}
        onTouchMove={(e) => trackPointer(e)}
      ></div>
      <div
        onMouseEnter={() => setHeadshot(headshot10)}
        onTouchMove={(e) => trackPointer(e)}
      ></div>
      <div
        onMouseEnter={() => setHeadshot(headshot9)}
        onTouchMove={(e) => trackPointer(e)}
      ></div>
      <div className="img-container">
        <div className="overflow">
          <img src={headshot} class="center-image" />
        </div>
      </div>
    </div>
  );
};

export default CenterImage;
