import React from "react";

const MeetingLogo = ({ img }) => {
  return (
    <div className="content-with-images-img-container content-with-images-img-logo">
      <img
        src={`/images/${img}`}
        alt="Henriette"
        className="content-with-images-img"
      />
    </div>
  );
};

export default MeetingLogo;
