import React, { useState } from 'react';
import data from './components/data'
import SingleQuestion from './components/Questions';

function App() {

  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className='container'>
        <h3>Question Cards</h3>
        <section className='info'>
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question} />
            )
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
