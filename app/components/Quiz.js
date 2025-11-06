'use client';

import { useState } from 'react';
import { quizDeck } from '../data/modules';

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);

  const question = quizDeck[current];

  const chooseOption = option => {
    if (feedback) return;
    if (option.correct) {
      setScore(prev => prev + 1);
      setFeedback(`✅ Nailed it! ${question.explainer}`);
    } else {
      setFeedback(`🤔 Not quite. ${question.explainer}`);
    }
  };

  const nextQuestion = () => {
    const nextIndex = (current + 1) % quizDeck.length;
    setCurrent(nextIndex);
    setFeedback('');
  };

  return (
    <section className="section" id="quiz">
      <h2 style={{ fontSize: '2rem', marginBottom: '12px' }}>Quiz: Are You Ready for the Next Mission?</h2>
      <p className="muted" style={{ marginBottom: '18px' }}>
        Score: {score} / {quizDeck.length}. Answer the question, then hit next to keep the loop going.
      </p>
      <div className="quiz">
        <article className="quiz-question">
          <h3 style={{ fontSize: '1.2rem', marginBottom: '6px' }}>{question.prompt}</h3>
          <div className="quiz-options">
            {question.options.map(option => (
              <button key={option.label} type="button" onClick={() => chooseOption(option)}>
                {option.label}
              </button>
            ))}
          </div>
          {feedback && (
            <p className="quiz-feedback" style={{ color: feedback.startsWith('✅') ? '#7df29a' : '#ff9f6b' }}>
              {feedback}
            </p>
          )}
        </article>
        <button
          type="button"
          className="cta"
          onClick={nextQuestion}
          style={{ width: 'fit-content' }}
        >
          Next Challenge
        </button>
      </div>
    </section>
  );
}
