import React from "react";
import GradientText from "../Animations/GradientText";
const FS = () => {
  return (
    <div>
      <GradientText
        colors={["#40ffaa", " #4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={3}
        showBorder={false}
        className="custom-class text-2xl sm:text-3xl"
      >
        Financial Services
      </GradientText>
    </div>
  );
};

export default FS;
