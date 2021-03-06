import React from "react";
import "./AnswerItem.scss";

const AnswersItem = (props) => {
  return (
    <li
      className={`AnswersItem ${props.state ? props.state : ""}`}
      onClick={() => props.onAnswerClick(props.answer.id)}
    >
      {props.answer.text}
    </li>
  );
};
export default AnswersItem;
