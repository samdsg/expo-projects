import { Dimensions, PixelRatio } from "react-native";

const { width } = Dimensions.get("window");

export interface IconProps {
  active?: boolean;
  onPress?: () => void
}

const numberOfIcons = 5;
const horizontalPadding = 48;
export const DURATION = 100;
export const PADDING = 16;
export const SEGMENT = PixelRatio.roundToNearestPixel(width / numberOfIcons);
export const ICON_SIZE = SEGMENT - horizontalPadding;

export const Colors = {
  primary: "#21315A",
  border: "#3F5AAE",
  cyan: "cyan",
  white: "#fff",
};
