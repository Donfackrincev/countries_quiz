import questionsList from "@/data/questions";
import { QuizState } from "@/types/quick";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: QuizState = {
  questions: questionsList,
  currentQuestionIndex: 0,
  //   userAnswers: [],
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    answerQuestion(
      state,
      action: PayloadAction<{
        questionId: number;
        answerId: number;
        statut: boolean;
      }>
    ) {
      const { payload } = action;
      const { questionId, statut, answerId } = payload;

      state.questions[questionId].answers[answerId].isCorrect = statut;
      console.log(payload);
    },
    changeQuestion(state, action: PayloadAction<number>) {
      state.currentQuestionIndex = action.payload;
    },
  },
});

export const { answerQuestion, changeQuestion } = quizSlice.actions;

export default quizSlice.reducer;
