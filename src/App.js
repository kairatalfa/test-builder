import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      questionText: "что такое css?",
      answerOptions: [
        { answerText: "какое-то язык програмирование", isCorrect: false },
        { answerText: "Это фудбол", isCorrect: false },
        {
          answerText:
            "По сути — язык, который отвечает за описание внешнего вида HTML-документа.",
          isCorrect: true,
        },
        { answerText: "css это и есть java script", isCorrect: false },
      ],
    },
    {
      questionText: " Что такое react?",
      answerOptions: [
        { answerText: " Это язык програмирования css ", isCorrect: false },
        {
          answerText:
            "это популярная библиотека языка программирования Javascript",
          isCorrect: true,
        },
        { answerText: "react это елемент HTML", isCorrect: false },
        { answerText: "react это БОКС ;)", isCorrect: false },
      ],
    },
    {
      questionText: "Что такое Виртуальная DOM? ",
      answerOptions: [
        {
          answerText:
            "Виртуальный DOM (VDOM) — это концепция программирования, в которой идеальное или «виртуальное» представление пользовательского интерфейса хранится в памяти и синхронизируется с «настоящим» DOM при помощи библиотеки, такой как ReactDOM.",
          isCorrect: true,
        },
        {
          answerText:
            "программная платформа, основанная на движке V8 (компилирующем JavaScript в машинный код),",
          isCorrect: false,
        },
        {
          answerText:
            "система управления версиями с распределенной архитектурой",
          isCorrect: false,
        },
        {
          answerText:
            "это код, который используется для структурирования и отображения веб-страницы и её контента",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "что такое node js",
      answerOptions: [
        {
          answerText:
            "Мы рекомендуем использовать его, когда требуется объяснить React, как должен выглядеть UI.",
          isCorrect: false,
        },
        {
          answerText:
            "React – это популярная библиотека языка программирования Javascrip",
          isCorrect: false,
        },
        { answerText: "Это моск для java script", isCorrect: false },
        {
          answerText:
            "Node или Node. js — программная платформа, основанная на движке V8 (компилирующем JavaScript в машинный код",
          isCorrect: true,
        },
      ],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          <div> вопрос :{questions.length}</div>
          <br />
          <div> верно :{score} </div>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question{currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
