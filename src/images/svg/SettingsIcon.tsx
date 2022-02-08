import React from "react";
import {View} from "react-native";
import Svg, {Path} from "react-native-svg";
import {IconProp} from "../../utilities";

export const SettingsIcon = ({color}: IconProp) => (
  <View>
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M10.3537 1.11378C10.4401 1.04038 10.5498 1.00006 10.6632 1H13.2938C13.4065 0.999874 13.5157 1.03954 13.602
        1.11199C13.6883 1.18445 13.7462 1.28505 13.7656 1.39606L14.2663 4.25815C14.8266 4.42339 15.3592 4.64665 15.861
        4.9223L18.216 3.22877C18.3081 3.16244 18.4208 3.13101 18.5339 3.14008C18.647 3.14915 18.7532 3.19813 18.8335
        3.27828L20.6944 5.13808C20.774 5.21765 20.8229 5.3227 20.8326 5.43477C20.8424 5.54684 20.8123 5.65876 20.7477
        5.75085L19.0699 8.14122C19.3421 8.64009 19.5618 9.16813 19.7257 9.72266L22.5992 10.1925C22.7111 10.2109 22.8128
        10.2684 22.8862 10.3548C22.9596 10.4412 22.9999 10.5509 23 10.6642V13.2947C23.0002 13.4072 22.9606 13.5162
        22.8884 13.6025C22.8161 13.6888 22.7157 13.7468 22.6048 13.7664L19.7266 14.2708C19.5638 14.826 19.3447 15.355
        19.0727 15.8541L20.7738 18.2155C20.8402 18.3076 20.8716 18.4202 20.8625 18.5333C20.8535 18.6464 20.8045 18.7526
        20.7243 18.833L18.8644 20.6946C18.7848 20.7741 18.6797 20.8231 18.5677 20.8328C18.4556 20.8426 18.3437 20.8125
        18.2515 20.7479L15.8656 19.074C15.3641 19.3507 14.8318 19.5752 14.2729 19.7418L13.7656 22.6049C13.746 22.7157
        13.688 22.8161 13.6017 22.8884C13.5154 22.9606 13.4064 23.0002 13.2938 23H10.6632C10.5499 23 10.4404 22.9598
        10.354 22.8866C10.2676 22.8134 10.21 22.7119 10.1914 22.6002L9.71779 19.7484C9.15649 19.5842 8.62176 19.3631
        8.11754 19.088L5.74752 20.7469C5.65539 20.8112 5.5436 20.8409 5.43173 20.831C5.31985 20.8211 5.21503 20.7722
        5.13563 20.6928L3.27567 18.832C3.19585 18.7519 3.14699 18.6462 3.13776 18.5335C3.12852 18.4208 3.15951 18.3085
        3.22522 18.2165L4.89928 15.8747C4.62111 15.3684 4.3981 14.8317 4.23227 14.268L1.39423 13.7655C1.28355 13.7457
        1.18338 13.6876 1.11129 13.6013C1.0392 13.515 0.999797 13.4061 1 13.2937V10.6633C0.999987 10.5502 1.04005
        10.4408 1.11308 10.3544C1.1861 10.2681 1.28737 10.2104 1.3989 10.1916L4.23507 9.71985C4.4018 9.15522 4.62624
        8.61883 4.90395 8.1132L3.25045 5.74805C3.18584 5.65595 3.15576 5.54404 3.1655 5.43197C3.17524 5.3199 3.22417
        5.21485 3.30369 5.13528L5.16459 3.27641C5.24468 3.1966 5.35047 3.14775 5.46317 3.13851C5.57586 3.12928 5.68819
        3.16026 5.78021 3.22597L8.13062 4.90455C8.63335 4.63109 9.16679 4.41153 9.7262 4.24881L10.1914 1.40073C10.2098
        1.28887 10.2673 1.18717 10.3537 1.11378Z"
        stroke={color}/>
    </Svg>
  </View>
);
