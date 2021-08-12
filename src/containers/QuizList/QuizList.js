import React, { Component } from "react";
import "./QuizList.scss";
import { NavLink } from "react-router-dom";
import Loader from "../../components/UI/Loader/Loader";
import axios from "../../axios/axios-quiz";

export default class QuizList extends Component {
  state = {
    quizes: [],
    loading: true,
  };

  renderQuizes() {
    return this.state.quizes.map((quiz) => {
      return (
        <li key={quiz.id}>
          <NavLink to={"/quiz/" + quiz.id}>{quiz.name}</NavLink>
        </li>
      );
    });
  }

  async componentDidMount() {
    try {
      const response = await axios.get("/quizes.json");
      console.log(response);
      const quizes = [];

      Object.keys(response.data).forEach((key, index) => {
        console.log(response.data);
        quizes.push({
          id: key,
          name: key,
        });
      });

      this.setState({
        quizes,
        loading: false,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className="QuizList">
        <div>
          <h1>Список тестов</h1>

          {this.state.loading ? <Loader /> : <ul>{this.renderQuizes()}</ul>}
        </div>
      </div>
    );
  }
}
