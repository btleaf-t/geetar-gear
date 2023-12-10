import Image from 'next/image'
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import GuitarPage from './GuitarPage.js';
import AccessoriesPage from './AccessoriesPage';

// Define components for different pages
const Home = () => <div>Home Page</div>;
const GuitarPage = () => <div>Guitar Page</div>;
const AccessoriesPage = () => <div>Accessories Page</div>;

const Quiz = () => {
  const [answers, setAnswers] = useState({});
  const [redirect, setRedirect] = useState(null);

  const handleAnswer = (question, answer) => {
    setAnswers({ ...answers, [question]: answer });
  };

  const handleSubmit = () => {
    if (answers['interest'] === 'guitar') {
      setRedirect('/guitar');
    } else if (answers['interest'] === 'accessories') {
      setRedirect('/accessories');
    }
  };

  if (redirect) {
    return <Redirect to={redirect} />;
  }

  return (
    <div>
      <h1>Guitar Quiz</h1>
      <p>Are you looking to know more about:</p>
      <button onClick={() => handleAnswer('interest', 'guitar')}>Guitar</button>
      <button onClick={() => handleAnswer('interest', 'accessories')}>Guitar Accessories</button>
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/quiz" exact component={Quiz} />
      <Route path="/guitar" exact component={GuitarPage} />
      <Route path="/accessories" exact component={AccessoriesPage} />
      {/* Redirect to the quiz page if the path is not matched */}
      <Redirect from="*" to="/quiz" />
    </Router>
  );
};

export default App;