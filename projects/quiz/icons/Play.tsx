import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import Svg, { Path } from "react-native-svg";
import { Colors, IconProps, ICON_SIZE } from "../../../src/Constants";

const Play = ({ active, onPress }: IconProps) => {
  return (
    <TouchableWithoutFeedback {...{ onPress }}>
      <Svg
        width={ICON_SIZE}
        height={ICON_SIZE}
        viewBox="0 0 24 24"
        stroke={active ? Colors.white : Colors.border}
        // fill={active ? Colors.primary : "none"}
        fillRule="evenodd"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M5 3l14 9-14 9V3z" />
      </Svg>
    </TouchableWithoutFeedback>
  );
};

export default Play;
