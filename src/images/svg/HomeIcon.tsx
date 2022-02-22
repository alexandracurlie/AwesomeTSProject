import React from "react";
import {View} from "react-native";
import Svg, {Path} from "react-native-svg";
import {IconProp} from "../../utilities";

export const HomeIcon = ({color}: IconProp) => (
  <View>
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M3 8.5V22C3 22.5523 3.44772 23 4 23H20C20.5523 23 21 22.5523 21 22V8.5"
        stroke={color}
      />
      <Path
        d="M23 10L12.811 1.26656C12.6301 1.11154 12.365 1.10563 12.1774 1.25244L1 10"
        stroke={color}
        strokeLinecap="round"
      />
      <Path d="M17.5 3.5H19.5V6.93248L17.5 5.26581V3.5Z" stroke="#613EEA" />
      <Path
        d="M9 14.5C9 14.2239 9.22386 14 9.5 14H14.5C14.7761 14 15 14.2239 15 14.5V23H9V14.5Z"
        stroke={color}
      />
    </Svg>
  </View>
);
