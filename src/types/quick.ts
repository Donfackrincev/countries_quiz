export interface QuizState {
    questions: Question[];
    currentQuestionIndex: number;
    //   userAnswers: string[];
  }
  
  export interface Question {
    id: number;
    question: string;
    title: string;
    answers: Answer[];
    country: string;
  }
  
  export interface Answer {
    title: string;
    isCorrect: boolean;
  }