import React, { useState, useEffect, useRef, Fragment } from "react";
import { Text, View } from "react-native";
import Next from "./icons/Next";
import Play from "./icons/Play";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Question from "./Question";
import Answers from "./Answers";
import { Spinner } from "native-base";
import { getQuizQuestions, Difficulty, QuestionState } from "./Utils";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const Quiz = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [number, setNumber] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [TOTAL_QUESTIONS] = useState(10);
  const setAnswer = useRef(null);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await getQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = () => {
    if (!gameOver) {
      // User's answer
      const answer = setAnswer.current;

      // Check answer against correct answer
      const correct = questions[number].correct_answer === answer;

      // Add score if answer is correct
      if (correct) setScore((prev) => prev + 1);

      //Save answer in teh array for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };

      setUserAnswers((prev) => [...prev, answerObject]);
      setTimeout(() => {
        nextQuestion();
      }, 800);
    }
  };

  const nextQuestion = () => {
    // Move on to the next question if nto the last question
    const nextQ = number + 1;

    if (nextQ === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQ);
    }
  };

  useEffect(() => {
    startTrivia();
  }, []);

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
        {!loading ? (
          <Fragment>
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
              {questions.length > 0 ? (
                <Text
                  style={{
                    fontFamily: "OpenSansSemiBold",
                    fontSize: 16,
                    color: "#006996",
                  }}
                >
                  {number + 1}/{questions.length}
                </Text>
              ) : null}
            </View>
            <View style={{ marginVertical: 20 }}>
              <Text
                style={{
                  fontFamily: "OpenSansSemiBold",
                  fontSize: 16,
                  color: "#006996",
                }}
              >
                Score {score}
              </Text>
            </View>
            {questions.length > 0 ? (
              <>
                <Question
                  questionNr={number + 1}
                  question={questions[number].question}
                />
                <Answers
                  answers={questions[number].answers}
                  {...{ setAnswer, checkAnswer }}
                  userAnswer={userAnswers ? userAnswers[number] : undefined}
                />
              </>
            ) : null}
          </Fragment>
        ) : (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Spinner color="#006996" size={30} />
          </View>
        )}
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
        <TouchableWithoutFeedback onPress={nextQuestion}>
          {!gameOver && !loading && number !== TOTAL_QUESTIONS - 1 ? (
            <Next active={true} />
          ) : (
            <Play active={true} onPress={() => startTrivia()} />
          )}
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default Quiz;
