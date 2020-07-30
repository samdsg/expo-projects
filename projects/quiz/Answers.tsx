import React, { Fragment } from "react";
import Button from "./Button";
import { View } from "react-native";
import EventEmitter from "../../src/events";
import { AnswerObject } from "./Quiz";

interface AnswersProps {
  answers: string[];
  setAnswer: any;
  checkAnswer: () => void;
  userAnswer: AnswerObject | undefined;
}

const Answers = ({
  answers,
  setAnswer,
  checkAnswer,
  userAnswer,
}: AnswersProps) => {
  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 14,
        paddingHorizontal: 24.5,
        marginTop: 30,
      }}
    >
      {answers.length > 0 ? (
        <Fragment>
          {answers.map((answer, key) => (
            <Fragment key={answer}>
              <Button
                variant="default"
                correct={userAnswer?.correctAnswer == answer}
                {...{ key, answer }}
                disabled={userAnswer ? true : false}
                onPress={() => {
                  setAnswer.current = answer;
                  checkAnswer();
                }}
              />
            </Fragment>
          ))}
        </Fragment>
      ) : null}
    </View>
  );
};

export default Answers;
