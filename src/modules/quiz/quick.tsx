import Button from "@/components/Button/Button";
import { app } from "@/configs/app";
import React from "react";
import { RootState } from "@/configs/store";
import { useDispatch, useSelector } from "react-redux";
import { answerQuestion, changeQuestion } from "./api";
import axios from "axios";

const QuickModule = () => {
  const baseUrl = "https://restcountries.com/v3.1/name/"
  const quiz = useSelector((state: RootState) => state.quiz);

  const dispatch = useDispatch();

  const { currentQuestionIndex, questions } = quiz;

  const currentQuestion = questions[currentQuestionIndex];

  const { answers, country, id, question, title } = currentQuestion;

  const handlerChangeQuestion = (index: number) => {
    dispatch(changeQuestion(index - 1));
  };

  const handlerAnswerQuestion = (capital: string, capitalPos: number) => {
    axios
      .get(baseUrl + country)
      .then((response) => {
        const capitalRes = response.data[0].capital[0];
        if (capital === capitalRes)
          dispatch(
            answerQuestion({ answerId: capitalPos, questionId: currentQuestionIndex, statut: true })
          );
          else dispatch(answerQuestion({ answerId: capitalPos, questionId: currentQuestionIndex, statut: false }));
      })
      .catch((error) => {
        dispatch(answerQuestion({ answerId: capitalPos, questionId: currentQuestionIndex, statut: true }));
      });
  };
  return (
    <>
      <div className="contenaire">
        <div className="title">
          <p className="contry">Contry quick</p>
        </div>

        {app.questionsList.map((question) => (
          <Button
            action={() => handlerChangeQuestion(question.id)}
            title={question.title}
            key={question.id}
            active={currentQuestionIndex === question.id - 1}
          />
        ))}

        <div className="question">
          <p>{question}</p>
        </div>

        {answers.map((q, index) => (
          <button
            className={`texte ${q.isCorrect ? "active" : ""} `}
            key={index}
            onClick={() => handlerAnswerQuestion(q.title, index)}
          >
            <p> {q.title} </p>
          </button>
        ))}
      </div>
    </>
  );
};

export default QuickModule;
