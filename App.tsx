import * as React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LoadAssets } from "./components";

/* Components */
import { Quiz } from "./projects/quiz";
import { Tabbar } from "./Tabs/TabTwo";

const LandingStack = createStackNavigator();

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Medium": require("./assets/fonts/SFProDisplay-Medium.ttf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
  OpenSansBold: require("./assets/fonts/OpenSans-Bold.ttf"),
  OpenSansRegular: require("./assets/fonts/OpenSans-Regular.ttf"),
  OpenSansLight: require("./assets/fonts/OpenSans-Light.ttf"),
  OpenSansSemiBold: require("./assets/fonts/OpenSans-SemiBold.ttf"),
};

const AuthenticationNavigator = () => (
  <LandingStack.Navigator headerMode="none">
    <LandingStack.Screen name="OnBoarding" component={Tabbar} />
  </LandingStack.Navigator>
);

export default function App() {
  return (
    <LoadAssets {...{ fonts }}>
      <AuthenticationNavigator />
    </LoadAssets>
  );
}
