import React, { useState } from 'react';
import data from '../data';
import SingleQuestion from './Question';

const Questions = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <section className="info">
      {questions.map((question) => {
        return <SingleQuestion key={question.id} {...question} />;
      })}
    </section>
  );
};

export default Questions;
