import React from "react";
import {Dimensions} from "react-native";

export const ScreenSize = {
  width: Dimensions.get('screen').width/100,
  height: Dimensions.get('screen').height/100,
}
