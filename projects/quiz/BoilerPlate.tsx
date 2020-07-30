import React from "react";
import { Text, View } from "react-native";
import Next from "./icons/Next";
import { Colors } from "../../src/Constants";
import Button from "./Button";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Quiz = () => {
  const onPress = () => {};

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
        position: "relative",
        padding: 20,
        backgroundColor: "#fff",
      }}
    >
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            marginTop: 70,
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontFamily: "OpenSansSemiBold",
              fontSize: 16,
            }}
          >
            Questions
          </Text>
          <Text
            style={{
              fontFamily: "OpenSansSemiBold",
              fontSize: 16,
              color: "#006996",
            }}
          >
            1/10
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            marginTop: 33,
            paddingRight: 10,
          }}
        >
          <Text
            style={{
              color: "#006996",
              fontFamily: "OpenSansSemiBold",
              fontSize: 16,
              marginRight: 10,
            }}
          >
            1.
          </Text>
          <Text
            style={{
              color: "#000",
              fontFamily: "OpenSansRegular",
              textAlign: "left",
              fontSize: 16,
            }}
          >
            The length of the bridge, which a train 130 metres long and
            travelling at45 km/hrcan cross in 30 seconds, is:
          </Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            paddingTop: 14,
            paddingHorizontal: 24.5,
            marginTop: 30,
          }}
        >
          <Button
            variant="default"
            answer="A."
            label="question"
            {...{ onPress }}
          />
          <Button
            variant="default"
            answer="B."
            label="question"
            {...{ onPress }}
          />
          <Button
            variant="default"
            answer="C."
            label="question"
            {...{ onPress }}
          />

          <Button
            variant="default"
            answer="D."
            label="question"
            {...{ onPress }}
          />
        </View>
      </View>

      <View
        style={{
          padding: 20,
          backgroundColor: "#006996",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 300,
          width: 60,
          height: 60,
          position: "absolute",
          bottom: 20,
          right: 20,
        }}
      >
        <TouchableWithoutFeedback>
          <Next active={true} />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default Quiz;
