import React from "react";
import { View, Text } from "react-native";
import { unicodeToChar } from "./Utils";

interface QuestionProps {
  question: string;
  questionNr: number;
}

const Question = ({ question, questionNr }: QuestionProps) => {
  return (
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
        {questionNr}
      </Text>
      <Text
        style={{
          color: "#000",
          fontFamily: "OpenSansRegular",
          textAlign: "left",
          fontSize: 16,
        }}
      >
        {unicodeToChar(question)}
      </Text>
    </View>
  );
};

export default Question;
