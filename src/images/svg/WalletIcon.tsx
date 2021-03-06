import React from "react";
import {View} from "react-native";
import Svg, {Circle, Path, Rect} from "react-native-svg";
import {IconProp} from "../../utilities";

export const WalletIcon = ({color}: IconProp) => (
  <View>
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M1 8.2629C1 6.92346 1.88793 5.7463 3.17584 5.37833L17.2253 1.36421C17.8641 1.18169 18.5 1.66135 18.5
        2.32573V20C18.5 21.6569 17.1569 23 15.5 23H4C2.34315 23 1 21.6569 1 20V8.2629Z"
        fill="white"
        stroke={color}/>
      <Rect
        x="1"
        y="7"
        width="22"
        height="16"
        rx="3"
        fill="white"
        stroke={color}/>
      <Circle
        cx="19.5"
        cy="15.5"
        r="1.5"
        fill={color}/>
      <Rect
        x="18"
        y="5.5"
        width="1"
        height="1"
        fill="white"/>
    </Svg>
  </View>
);
