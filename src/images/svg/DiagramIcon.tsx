import React from "react";
import {View} from "react-native";
import Svg, {Path, Circle, Mask} from "react-native-svg";
import {IconProp} from "../../constants/types";

export const DiagramIcon = ({color}: IconProp) => (
  <View>
    <Svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none">
      <Circle
        r="9.5"
        transform="matrix(-1 0 0 1 10 12)"
        fill="white"
        stroke={color}/>
      <Path
        d="M22 12C22 10.4241 21.6896 8.8637 21.0866 7.40779C20.4835 5.95188 19.5996 4.62901 18.4853 3.51471C17.371
        2.40041 16.0481 1.51649 14.5922 0.913439C13.1363 0.310384 11.5758 -3.02449e-06 9.99998 0L10 12L22 12Z"
        fill="white"/>
      <Mask
        id="path-3-inside-1_6951_221"
        fill="white">
        <Path
          d="M22 10.5C22 9.12112 21.7284 7.75574 21.2007 6.48182C20.6731 5.2079 19.8996 4.05039 18.9246 3.07537C17.9496
          2.10036 16.7921 1.32693 15.5182 0.799259C14.2442 0.271586 12.8789 -2.64643e-06 11.5 0L11.5 10.5L22 10.5Z"/>
      </Mask>
      <Path
        d="M22 10.5C22 9.12112 21.7284 7.75574 21.2007 6.48182C20.6731 5.2079 19.8996 4.05039 18.9246 3.07537C17.9496
        2.10036 16.7921 1.32693 15.5182 0.799259C14.2442 0.271586 12.8789 -2.64643e-06 11.5 0L11.5 10.5L22 10.5Z"
        fill="white"
        stroke={color}
        stroke-width="2"
        mask="url(#path-3-inside-1_6951_221)"/>
    </Svg>
  </View>
);
