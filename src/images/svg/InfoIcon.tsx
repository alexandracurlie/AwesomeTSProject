import React from "react";
import Svg, {Circle, Path} from "react-native-svg";
import {IconProp} from "../../utilities";

export const InfoIcon = ({color}: IconProp) => (
  <Svg
    width="4"
    height="16"
    viewBox="0 0 4 16"
    fill="none">
    <Path
      d="M0.5 7.5C0.5 6.67157 1.17157 6 2 6C2.82843 6 3.5 6.67157 3.5 7.5V14.5C3.5 15.3284 2.82843 16 2 16C1.17157 16
      0.5 15.3284 0.5 14.5V7.5Z"
      fill={color}/>
    <Circle
      cx="2"
      cy="2"
      r="2"
      fill={color}/>
  </Svg>
)
