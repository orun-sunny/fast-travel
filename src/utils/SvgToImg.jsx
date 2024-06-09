import React from "react";

const SvgToImg = ({ code, alt, width, height, className }) => {
  return (
    <img
      src={`data:image/svg+xml;utf8,${encodeURIComponent(code)}`}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default SvgToImg;
