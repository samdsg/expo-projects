import React, { Fragment } from "react";
import {
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
  Animated,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

const { width } = Dimensions.get("window");

interface Tab {
  name: string;
}

interface StaticTabbarProps {
  tabs: Tab[];
  value: Animated.Value<number>;
}

export const tabHeight = 64;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: tabHeight,
  },
  activeIcon: {},
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const StaticTabbar = ({ tabs, value }: StaticTabbarProps) => {
  const tabWidth = width / tabs.length;
  const onPress = (index: number) => {
    value.setValue(tabWidth * index);
    // Animated.parallel([
    //   Animated.spring(value, {
    //     toValue: tabWidth * index,
    //     useNativeDriver: true,
    //   }),
    // ]).start();
  };

  return (
    <View style={{ ...styles.container }}>
      {tabs.map(({ name }, index) => {
        // const opacity = value.interpolate({
        //   inputRange: [
        //     -width + tabWidth * (key - 1),
        //     -width + tabWidth * key,
        //     -width + tabWidth * (key + 1),
        //   ],
        //   outputRange: [1, 0, 1],
        //   extrapolate: "clamp",
        // });

        return (
          <Fragment key={index}>
            <TouchableWithoutFeedback onPress={() => onPress(index)}>
              <Animated.View style={{ ...styles.tab }}>
                <Icon size={25} {...{ name }} />
              </Animated.View>
            </TouchableWithoutFeedback>
            <View
              style={{
                position: "absolute",
                width: tabWidth,
                left: tabWidth * index,
                height: tabHeight,
                justifyContent: "center",
                alignItems: "center",
                zIndex: -1,
              }}
            >
              <View style={{ ...styles.circle }}>
                <Icon size={25} {...{ name }} />
              </View>
            </View>
          </Fragment>
        );
      })}
    </View>
  );
};

export default StaticTabbar;
