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
  const [headshot, setHeadshot] = useState(originalHeadshot);

  return (
    <div className="photo-container">
      <div className="photoTopLeft" onMouseEnter={() => setHeadshot(headshot1)}>
        1
      </div>
      <div
        className="photoTopCenter"
        onMouseEnter={() => setHeadshot(headshot2)}
      >
        2
      </div>
      <div
        className="photoTopRight"
        onMouseEnter={() => setHeadshot(headshot3)}
      >
        3
      </div>
      <div
        className="photoMiddleLeft"
        onMouseEnter={() => setHeadshot(headshot4)}
      >
        4
      </div>
      <div
        className="photoMiddleCenter"
        onMouseEnter={() => setHeadshot(headshot5)}
      >
        5
      </div>
      <div
        className="photoMiddleRight"
        onMouseEnter={() => setHeadshot(headshot16)}
      >
        6
      </div>
      <div
        className="photoBottomLeft"
        onMouseEnter={() => setHeadshot(headshot1)}
      >
        7
      </div>
      <div
        className="photoBottomCenter"
        onMouseEnter={() => setHeadshot(headshot3)}
      >
        8
      </div>
      <div
        className="photoBottomRight"
        onMouseEnter={() => setHeadshot(headshot5)}
      >
        9
      </div>
      <div
        className="photoBottomRight"
        onMouseEnter={() => setHeadshot(headshot6)}
      >
        10
      </div>
      <div
        className="photoBottomRight"
        onMouseEnter={() => setHeadshot(headshot15)}
      >
        11
      </div>
      <div
        className="photoBottomRight"
        onMouseEnter={() => setHeadshot(headshot15)}
      >
        12
      </div>
      <div
        className="photoBottomRight"
        onMouseEnter={() => setHeadshot(originalHeadshot)}
        onClick={() => setHeadshot(clickedHeadshot)}
      >
        13
      </div>
      <div
        className="photoBottomRight"
        onMouseEnter={() => setHeadshot(headshot7)}
      >
        14
      </div>
      <div
        className="photoBottomRight"
        onMouseEnter={() => setHeadshot(headshot7)}
      >
        15
      </div>
      <div
        className="photoBottomRight"
        onMouseEnter={() => setHeadshot(headshot14)}
      >
        16
      </div>
      <div
        className="photoBottomRight"
        onMouseEnter={() => setHeadshot(headshot13)}
      >
        17
      </div>
      <div
        className="photoBottomRight"
        onMouseEnter={() => setHeadshot(headshot11)}
      >
        18
      </div>
      <div
        className="photoBottomRight"
        onMouseEnter={() => setHeadshot(headshot9)}
      >
        19
      </div>
      <div
        className="photoBottomRight"
        onMouseEnter={() => setHeadshot(headshot8)}
      >
        20
      </div>
      <div
        className="photoBottomRight"
        onMouseEnter={() => setHeadshot(headshot13)}
      >
        21
      </div>
      <div
        className="photoBottomRight"
        onMouseEnter={() => setHeadshot(headshot12)}
      >
        22
      </div>
      <div
        className="photoBottomRight"
        onMouseEnter={() => setHeadshot(headshot11)}
      >
        23
      </div>
      <div
        className="photoBottomRight"
        onMouseEnter={() => setHeadshot(headshot10)}
      >
        24
      </div>
      <div
        className="photoBottomRight"
        onMouseEnter={() => setHeadshot(headshot9)}
      >
        25
      </div>
      <img src={headshot} />
      {/* <div className="dot"></div> */}
    </div>
  );
};

export default CenterImage;
