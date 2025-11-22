import * as React from 'react';
import { useState } from 'react';


export default function QuizTaker({ questions = [], onSubmitAnswers }) {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const selectAnswer = (choiceIdx) => {
    if (isSubmitted) return;
    setAnswers((prev) => prev.map((a, i) => (i === currentIndex ? choiceIdx : a)));
  };

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(questions.length - 1, i + 1));

  const handleSubmit = () => {
    setIsSubmitted(true);
    onSubmitAnswers(answers);
  };

  const score = answers.reduce((acc, a, i) => (a === questions[i].correct ? acc + 1 : acc), 0);

  if (!questions || questions.length === 0) {
    return <div className="panel"><p>No quiz available. Please create one.</p></div>;
  }

  const q = questions[currentIndex];

  return (
    <div className="card" style={{ maxWidth: 720, margin: '0 auto' }}>
      <h2 className="title">Quiz Taker</h2>

      {!isSubmitted && (
        <div>
          <p className="muted">Question {currentIndex + 1} of {questions.length}</p>
          <h3>{q.text}</h3>
          <div className="choices">
            {q.options.map((opt, idx) => {
              const isSel = answers[currentIndex] === idx;
              return (
                <button
                  key={idx}
                  className={`choice ${isSel ? "selected" : ""}`}
                  onClick={() => selectAnswer(idx)}
                >
                  {String.fromCharCode(65 + idx)} — {opt}
                </button>
              );
            })}
          </div>
          <div style={{ display: 'flex', gap: 12, margin: '12px 0' }}>
            <button className="btn" onClick={prev} disabled={currentIndex === 0}>Previous</button>
            <button className="btn" onClick={next} disabled={currentIndex === questions.length - 1}>Next</button>
            <button className="btn btn-primary" onClick={handleSubmit} disabled={answers.some((a) => a === null)}>Submit</button>
          </div>
        </div>
      )}

      {isSubmitted && (
        <div>
          <h3>Summary</h3>
          <p>Score: {score} / {questions.length}</p>
          <ul className="summary-list">
            {questions.map((qq, i) => (
              <li key={i}>
                <strong>{qq.text}</strong>
                <div className="small">Your answer: {answers[i] !== null ? String.fromCharCode(65 + answers[i]) : "—"}</div>
                <div className="small">Correct answer: {String.fromCharCode(65 + qq.correct)}</div>
              </li>
            ))}
          </ul>
          <p className="muted">Answers submitted. Use "View Stats" to review.</p>
        </div>
      )}
    </div>
  );
}

// Test usage
// <QuizTaker questions={dummyQuestions} onSubmitAnswers={console.log} />