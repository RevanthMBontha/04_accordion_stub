import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
  const [canShowAnswer, setCanShowAnswer] = useState(true);

  const handleClick = () => {
    setCanShowAnswer(!canShowAnswer);
  };

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={handleClick}>
          {canShowAnswer ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      <p>{!canShowAnswer && info}</p>
    </article>
  );
};

export default Question;
