import React from "react";

const DefaultProfile = ({ picUrl }) => {
  return (
    <div className="w-8 rounded-full overflow-hidden">
      <img src={picUrl} alt="" />
    </div>
  );
};

export default DefaultProfile;
