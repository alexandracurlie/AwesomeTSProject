import React from "react";
import Svg, {Rect} from "react-native-svg";
import {IconProp} from "../../utilities";

export const AddIcon = ({color}: IconProp) => (
  <Svg width="10"
       height="10"
       viewBox="0 0 10 10"
       fill="none">
    <Rect x="4"
          width="2"
          height="10"
          fill={color}/>
    <Rect x="10"
          y="4"
          width="2"
          height="10"
          transform="rotate(90 10 4)"
          fill={color}/>
  </Svg>
)
