import BackgroundGif from "./BackgroundGif";
import React, { useState } from "react";
import "./EndScreen.css";
import Info from "./Info";

const EndScreen = ({ positionUD, infoM, setInfoM, setPositionUD }) => {
  const [gifVisible, setGifVisible] = useState(true);

  const handleGifVisibilityChange = (isVisible) => {
    setGifVisible(isVisible);
  };

  console.log(positionUD);
  return (
    <div className="end-screen">
      {gifVisible ? (
        <div>
          <BackgroundGif
            gifUrl="https://mir-s3-cdn-cf.behance.net/project_modules/disp/fecdc569547177.5b855342c669f.gif"
            onVisibilityChange={handleGifVisibilityChange}
            duration={3000}
          />
          {setPositionUD(1)}
        </div>
      ) : !infoM ? (
        <div>
          {positionUD == 1 ? (
            <div>
              <div className="back-button" style={{ backgroundColor: "blue" }}>
                Info
              </div>
              <div className="back-button">Menu</div>
            </div>
          ) : (
            <div>
              <div className="back-button">Info</div>
              <div className="back-button" style={{ backgroundColor: "blue" }}>
                Menu
              </div>
            </div>
          )}
        </div>
      ) : (
        <Info setInfoM={setInfoM} />
      )}
    </div>
  );
};

export default EndScreen;
