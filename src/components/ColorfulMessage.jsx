import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentsStyle = {
    color,
    fontSize: "20px"
  };
  return <p style={contentsStyle}>{children}</p>;
};
