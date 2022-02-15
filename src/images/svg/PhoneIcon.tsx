import React from "react";
import Svg, {Path, G, Rect, ClipPath, Defs} from "react-native-svg";
import {IconProp} from "../../utilities";

export const PhoneIcon = ({color}: IconProp) => (
  <Svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none">
    <G clip-path="url(#clip0_7034_100)">
      <Path
        d="M15.6413 12.6447L13.1703 10.1734C12.6782 9.68326 11.8631 9.69815 11.3538 10.2076L10.1089 11.4522C10.0303
        11.4089 9.94889 11.3636 9.8633 11.3156C9.07717 10.88 8.00123 10.283 6.86902 9.14995C5.73346 8.01452 5.13589
        6.93692 4.69897 6.15029C4.65287 6.06695 4.60869 5.9866 4.56507 5.9103L5.40056 5.07605L5.81132 4.66478C6.32142
        4.15455 6.33548 3.33974 5.84447 2.84813L3.37352 0.376627C2.8825 -0.114299 2.0671 -0.099406 1.557
        0.410826L0.860607 1.11122L0.879637 1.13012C0.646125 1.42807 0.450996 1.77172 0.305787 2.1423C0.171932 2.49505
        0.088594 2.83167 0.0504875 3.16897C-0.275785 5.87385 0.960263 8.3459 4.31474 11.7004C8.95164 16.337 12.6884
        15.9867 12.8496 15.9696C13.2007 15.9277 13.5371 15.8438 13.8791 15.711C14.2465 15.5675 14.5899 15.3726 14.8877
        15.1396L14.9029 15.1531L15.6084 14.4623C16.1174 13.9522 16.1321 13.1371 15.6413 12.6447Z"
        fill={color}/>
    </G>
    <Defs>
      <ClipPath id="clip0_7034_100">
        <Rect width="16" height="16" fill={color}/>
      </ClipPath>
    </Defs>
  </Svg>
)
