import { useState, useEffect, useCallback } from "react";
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

const gridMap = [
  [headshot1, headshot16, headshot15, headshot14, headshot13],
  [headshot2, headshot1, headshot15, headshot13, headshot12],
  [headshot3, headshot3, originalHeadshot, headshot11, headshot11],
  [headshot4, headshot6, headshot7, headshot9, headshot10],
  [headshot5, headshot6, headshot7, headshot8, headshot9],
];

const getGridPosition = (x, y, width, height) => {
  const col = Math.floor((x / width) * 5);
  const row = Math.floor((y / height) * 5);
  return { col, row };
};

const CenterImage = () => {
  const [headshot, setHeadshot] = useState(originalHeadshot);
  const [centerClicked, setCenterClicked] = useState(false);

  const isCenter = (col, row) => col === 2 && row === 2;

  const updateHeadshot = useCallback(
    (x, y) => {
      const { col, row } = getGridPosition(
        x,
        y,
        window.innerWidth,
        window.innerHeight
      );

      if (col < 0 || col >= 5 || row < 0 || row >= 5) return;

      if (isCenter(col, row)) {
        if (centerClicked) {
          setHeadshot(clickedHeadshot);
        } else {
          setHeadshot(originalHeadshot);
        }
      } else {
        setHeadshot(gridMap[col][row]);
        setCenterClicked(false); // Reset clicked state when leaving center
      }
    },
    [centerClicked]
  );

  const handleClick = useCallback((x, y) => {
    const { col, row } = getGridPosition(
      x,
      y,
      window.innerWidth,
      window.innerHeight
    );
    if (isCenter(col, row)) {
      setCenterClicked(true);
      setHeadshot(clickedHeadshot);
    }
  }, []);

  useEffect(() => {
    const onMouseMove = (e) => updateHeadshot(e.clientX, e.clientY);
    const onTouchMove = (e) => {
      if (e.touches[0])
        updateHeadshot(e.touches[0].clientX, e.touches[0].clientY);
    };
    const onClick = (e) => handleClick(e.clientX, e.clientY);
    const onTouchEnd = (e) => {
      if (e.changedTouches[0]) {
        handleClick(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("click", onClick);
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("click", onClick);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [updateHeadshot, handleClick]);

  return (
    <div className="photo-container">
      <div className="img-container">
        <div className="overflow">
          <img src={headshot} className="center-image" alt="center" />
        </div>
      </div>
    </div>
  );
};

export default CenterImage;
