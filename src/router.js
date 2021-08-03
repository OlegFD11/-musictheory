import React from "react";
import Quiz from "./containers/Quiz/Quiz";
import { Switch, Route, Redirect } from "react-router-dom";
import QuizList from "./containers/QuizList/QuizList";
import Auth from "./containers/Auth/Auth";
import QuizCreator from "./containers/QuizCreator/QuizCreator";

export const useRoutes = (isUser) => {
  if (isUser) {
    return (
      <Switch>
        <Route exact path="/" component={QuizList} />
        <Route path="/auth" component={Auth} />
        <Route path="/quiz-creator" component={QuizCreator} />
        <Route path="/quiz/:id" component={Quiz} />
      </Switch>
    );
  } else {
    return (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Redirect from="/" to="/auth" />
      </Switch>
    );
  }
};
