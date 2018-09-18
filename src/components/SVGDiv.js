import React from "react";
import SVG from "./SVG";

const SVGDiv = () => (
  <div
    style={{
      position: "absolute",
      width: "100vw",
      height: "100vh"
    }}
  >
    <SVG
      icon="hexa"
      className="upDownMe"
      width={24}
      stroke={`#000`}
      left="30%"
      top="50%"
    />
    <SVG
      icon="hexa"
      className="upDownMe"
      width={24}
      stroke={`#bada55`}
      left="25%"
      top="60%"
    />
    <SVG
      icon="hexa"
      className="upDownMe"
      width={32}
      stroke={`#333`}
      left="65%"
      top="30%"
    />
    <SVG
      icon="hexa"
      className="upDownWideMe"
      width={24}
      stroke={`#333`}
      left="85%"
      top="55%"
    />
    <SVG
      icon="box"
      className="rotateMeTooFast"
      width={36}
      stroke={"blue"}
      left={"30.87%"}
      top={"34.2%"}
    />
    <SVG
      icon="hexa"
      className="upDownWideMe"
      width={44}
      strokeWidth={"2px"}
      stroke={`#bada55`}
      left="20%"
      top="30%"
    />
    <SVG
      icon="triangle"
      className="rotateMe"
      width={44}
      stroke={`#bada55`}
      left="80%"
      top="70%"
    />
  </div>
);

export default SVGDiv;
