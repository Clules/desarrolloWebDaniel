import React, { useEffect, useState } from "react";

const BackgroundGif = ({ gifUrl, onVisibilityChange, duration }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const changeBackgroundToGif = async () => {
      await new Promise((resolve) => setTimeout(resolve, duration));

      setVisible(false);
      onVisibilityChange(false);
    };

    changeBackgroundToGif();
  }, [gifUrl, onVisibilityChange]);

  return visible ? (
    <img
      src={gifUrl}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
      alt="Background GIF"
    />
  ) : null;
};

export default BackgroundGif;
