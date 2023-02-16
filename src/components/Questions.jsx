import React, { useEffect, useState } from 'react';
import SingleQuestion from './Question';

const url =
  'https://api-for-basic-projects.netlify.app/accordion-project/accordion_data.json';

const Questions = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [questions, setQuestions] = useState([]);

  const fetchFAQ = async () => {
    const response = await fetch(url);
    const faqQuestions = await response.json();
    setQuestions(faqQuestions);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchFAQ();
  }, []);

  if (isLoading) {
    return (
      <section className="info">
        <h3 style={{ textAlign: 'center' }}>FAQ elements are loading...</h3>
      </section>
    );
  } else {
    return (
      <section className="info">
        {questions.map((question) => {
          return <SingleQuestion key={question.id} {...question} />;
        })}
      </section>
    );
  }
};

export default Questions;
