import { useState } from "react";

export default function QuizMaker({ onSaveQuiz }) {
  const [questions, setQuestions] = useState([]);
  const [text, setText] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correct, setCorrect] = useState(null);
  const [error, setError] = useState("");

  const resetForm = () => {
    setText("");
    setOptions(["", "", "", ""]);
    setCorrect(null);
    setError("");
  };

  const addQuestion = () => {
    if (!text.trim()) {
      setError("Enter a question.");
      return;
    }
    if (options.some((o) => !o.trim())) {
      setError("Fill all 4 options.");
      return;
    }
    if (correct === null) {
      setError("Select the correct option.");
      return;
    }
    const q = { text: text.trim(), options: options.map((o) => o.trim()), correct };
    setQuestions((prev) => [...prev, q]);
    resetForm();
  };

  const handleSave = () => {
    if (questions.length === 0) {
      setError("Add at least one question before saving.");
      return;
    }
    onSaveQuiz(questions);
  };

  const updateOption = (idx, value) => {
    setOptions((prev) => prev.map((o, i) => (i === idx ? value : o)));
  };

  return (
    <div className="panel">
      <style>{`
        .panel {
          max-width: 960px;
          margin: 0 auto;
          text-align: left;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 24px 28px;
          box-shadow: var(--shadow-md);
        }
        .form-group { margin-bottom: 16px; }
        .text-input {
          width: 100%;
          padding: 12px 14px;
          border-radius: 10px;
          border: 1px solid var(--border);
          background: var(--bg);
          color: var(--text);
          transition: all 0.2s ease;
        }
        .text-input:focus {
          outline: none;
          border-color: var(--accent);
          box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.2), 0 0 15px rgba(255, 107, 53, 0.3);
        }
        .options { display: flex; flex-direction: column; gap: 12px; margin-bottom: 12px; }
        .option-row {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 12px;
          align-items: center;
        }
        .radio {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--text);
          font-weight: 600;
        }
        .radio input { accent-color: var(--accent); }
        .actions { display: flex; gap: 12px; margin-top: 16px; }
        .muted { color: var(--muted); }
        .small { color: var(--muted); font-size: 0.9rem; }
        .question-list { list-style: none; padding: 0; margin-top: 12px; }
        .question-list li { margin: 0.5rem 0; }
      `}</style>
      <h2>Quiz Maker</h2>

      <div className="form-group">
        <input
          type="text"
          placeholder="Enter question"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="text-input"
        />
      </div>

      <div className="options">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="option-row">
            <input
              type="text"
              placeholder={`Option ${i + 1}`}
              value={options[i]}
              onChange={(e) => updateOption(i, e.target.value)}
              className="text-input"
            />
            <label className="radio">
              <input
                type="radio"
                name="correct"
                checked={correct === i}
                onChange={() => setCorrect(i)}
              />
              Correct
            </label>
          </div>
        ))}
      </div>

      {error && <p className="error">{error}</p>}

      <div className="actions">
        <button className="btn" onClick={addQuestion}>Add Question</button>
        <button className="btn primary" onClick={handleSave}>Save Quiz</button>
      </div>

      <p className="muted">Questions added: {questions.length}</p>

      {questions.length > 0 && (
        <ul className="question-list">
          {questions.map((q, idx) => (
            <li key={idx}>
              <strong>{idx + 1}. {q.text}</strong>
              <div className="small">Correct: {String.fromCharCode(65 + q.correct)}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
