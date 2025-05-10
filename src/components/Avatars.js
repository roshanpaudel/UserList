import React from "react";
import man from "../assets/man.png";
import woman from "../assets/woman.png";
export const MaleAvatar = () => {
  return (
    <div>
      <img src={man} alt="man" width="50px" />
    </div>
  );
};

export const FemaleAvatar = () => {
  return (
    <div>
      <img src={woman} alt="woman" width="50px" />
    </div>
  );
};
