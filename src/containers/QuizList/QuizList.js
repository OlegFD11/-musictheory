import React, { Component } from "react";
import "./QuizList.scss";
import { NavLink } from "react-router-dom";

export default class QuizList extends Component {
  renderQuiz() {
    return [1, 2, 3].map((quiz, index) => {
      return (
        <li key={index}>
          <NavLink to={"/quiz/" + quiz}>Тест{quiz}</NavLink>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="QuizList">
        <h1>Список тестов</h1>
        <ul>{this.renderQuiz()}</ul>
      </div>
    );
  }
}
