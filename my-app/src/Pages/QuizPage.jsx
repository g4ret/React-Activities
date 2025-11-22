import React from 'react';
import QuizTaker from '../Components/QuizTaker.jsx';

const questions = [
  { text: "What's my favorite pet", options: ["Dog", "Pig", "Cat", "Rhinosaurus"], correct: 2 },
  { text: "Tagaasa ko?", options: ["Earth", "Mars", "Jupiter", "Venus"], correct: 0 },
  { text: "What is 5 + 7?", options: ["10", "11", "12", "13"], correct: 2 },
];

export default function QuizPage() {
  return <QuizTaker questions={questions} onSubmitAnswers={console.log} />;
}