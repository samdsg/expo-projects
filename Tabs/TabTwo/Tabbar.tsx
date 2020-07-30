import React from "react";
import {
  Text,
  StyleSheet,
  Dimensions,
  Animated as RNNANIMATED,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg";
import Animated, { interpolate } from "react-native-reanimated";
const { View, Value } = Animated;
import { withTransition, timing } from "react-native-redash";
const { width } = Dimensions.get("window");
import * as shape from "d3-shape";

import StaticTabbar, { tabHeight as height } from "./StaticTabbar";

const AnimatedSvg = RNNANIMATED.createAnimatedComponent(Svg);

const tabs = [
  {
    name: "grid",
  },
  {
    name: "list",
  },
  {
    name: "repeat",
  },
  {
    name: "map",
  },
  {
    name: "user",
  },
];

const tabWidth = width / tabs.length;
const left = shape
  .line()
  .x((d) => d.x)
  .y((d) => d.y)([
  { x: 0, y: 0 },
  { x: width, y: 0 },
]);
const tab = shape
  .line()
  .x((d) => d.x)
  .y((d) => d.y)
  .curve(shape.curveBasis)([
  { x: width, y: 0 },
  { x: width + 5, y: 0 },
  { x: width + 10, y: 10 },
  { x: width + 15, y: height },
  { x: width + tabWidth - 15, y: height },
  { x: width + tabWidth - 10, y: 10 },
  { x: width + tabWidth - 5, y: 0 },
  { x: width + tabWidth, y: 0 },
]);
const right = shape
  .line()
  .x((d) => d.x)
  .y((d) => d.y)([
  { x: width + tabWidth, y: 0 },
  { x: width * 2.5, y: 0 },
  { x: width * 2.5, y: height },
  { x: 0, y: height },
  { x: 0, y: 0 },
]);

const d = `${left} ${tab} ${right}`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ea3345",
    justifyContent: "flex-end",
  },
  safeArea: {
    backgroundColor: "#fff",
  },
});

function TabTwo() {
  const value = new Value(0);
  const transition = withTransition(value, { duration: 100 });
  //   const value = new Animated.Value(0);
 
  //   console.log(translateX);

  // const translateX = value.interpolate({
  //   inputRange: [0, width],
  //   outputRange: [-width, 0],
  // });

  return (
    <View style={{ ...styles.container }}>
      <View {...{ width, height }}>
        <AnimatedSvg
          width={width * 2.5}
          style={{
            transform: [{ translateX: 0 }],
          }}
          {...{ height }}
        >
          <Path {...{ d }} fill="white" />
        </AnimatedSvg>
        <View style={StyleSheet.absoluteFill}>
          <StaticTabbar {...{ tabs, value }} />
        </View>
      </View>

      <SafeAreaView style={styles.safeArea} />
    </View>
  );
}

export default TabTwo;
