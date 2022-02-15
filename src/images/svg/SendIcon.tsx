import React from "react";
import {View} from "react-native";
import Svg, {Path, Circle, Rect, Line} from "react-native-svg";
import {IconProp} from "../../utilities";

export const SendIcon = ({color}: IconProp) => (
  <View>
    <Svg
      width="26"
      height="24"
      viewBox="0 0 26 24"
      fill="none">
      <Rect
        x="1"
        y="9"
        width="24"
        height="14"
        rx="3"
        stroke="#A6AAB4"/>
      <Line
        x1="9.5"
        y1="9"
        x2="16.5"
        y2="9"
        stroke="#A6AAB4"
        stroke-linecap="round"/>
      <Line
        x1="4.5"
        y1="9"
        x2="9.5"
        y2="9"
        stroke="#A6AAB4"
        stroke-linecap="round"/>
      <Line
        x1="16.5"
        y1="9"
        x2="21.5"
        y2="9"
        stroke="#A6AAB4"
        stroke-linecap="round"/>
      <Path
        d="M13 9L13 2"
        stroke="#A6AAB4"
        stroke-linecap="round"/>
      <Path
        d="M11 3L12.9293 1.07071C12.9683 1.03166 13.0317 1.03166 13.0707 1.07071L15 3"
        stroke="#A6AAB4"
        stroke-linecap="round"/>
      <Circle
        cx="13"
        cy="16"
        r="3.5"
        stroke="#A6AAB4"/>
      <Circle
        cx="5"
        cy="16"
        r="1"
        fill="#A6AAB4"/>
      <Circle
        cx="21"
        cy="16"
        r="1"
        fill="#A6AAB4"/>
    </Svg>
  </View>
);
