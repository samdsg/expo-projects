import React, { Fragment } from "react";
import { StyleSheet, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { elevate } from "react-native-elevate";
import { LinearGradient } from "react-native-linear-gradient";

interface ButtonProps {
  onPress: () => void;
  answer: string;
  disabled: boolean;
  correct: boolean;
  key: number;
}

const styles = StyleSheet.create({
  container: {
    height: 43,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 14,
    paddingHorizontal: 13,
    borderRadius: 2,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 16,
    fontFamily: "OpenSansRegular",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    color: "#000",
    textTransform: "capitalize",
  },
  answer: {
    fontSize: 16,
    fontFamily: "OpenSansSemiBold",
    color: "#016A9A",
    marginRight: 10,
  },
});

const Button = ({ onPress, answer, disabled, correct }: ButtonProps) => {
  return (
    <RectButton
      {...{ onPress }}
      style={[
        styles.container,
        elevate(5),
        {
          backgroundColor: !disabled ? "#fff" : "#ccc",
        },
      ]}
    >
      <Text style={{ ...styles.label, color: correct ? "red" : "#006996" }}>
        {answer}
      </Text>
    </RectButton>
  );
};

Button.defaultProps = { variant: "defatul" };

export default Button;
