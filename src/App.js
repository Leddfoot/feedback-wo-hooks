import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import LessonsLearned from "./components/LessonsLearned";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import ExamplePropDrilling from "./components/ExamplePropDrilling";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./components/pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import FeedbackData from "./data/FeedbackData";
import LessonsLearnedLink from "./components/LessonsLearnedLink";
import ExamplePropDrillingLink from "./components/ExamplePropDrillingLink";


function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const handleClickExample = (id) => {
    console.log(id);
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are you really sure that you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    console.log("newFeedback: ", newFeedback);

    // setFeedback(prev => prev.concat(newFeedback)) ///this is how i tried to do it it works but didnt get it immediately
    setFeedback([...feedback, newFeedback]);
    console.log("feedback: ", feedback);
  };

  return (
    <Router>
    <LessonsLearnedLink />
    <ExamplePropDrillingLink />
      <Header text="Feedback App" />
  
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          ></Route>
  
          <Route path="/examplePropDrilling" element={<ExamplePropDrilling
            feedback={feedback}
            handleClickExample={handleClickExample}
          />} />
          <Route path="/lessonsLearned" element={<LessonsLearned />} />
  
          <Route path="/about" element={<AboutPage />} />
  
        </Routes>
        <AboutIconLink />
  
      </div>
    </Router>
  )
}

export default App;


