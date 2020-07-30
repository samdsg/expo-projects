import React from "react";
import Svg, { Path } from "react-native-svg";
import { Colors, IconProps, ICON_SIZE } from "../../../src/Constants";

const Book = ({ active }: IconProps) => {
  return (
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
      <Path d="M5 12h14M12 5l7 7-7 7" />
    </Svg>
  );
};

export default Book;
