import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css';

function TodoCounter(props) {

  const { totalTodos, completedTodos } = useContext(TodoContext);

  return (
    <div className="counterContainer">
      <h1 className="counterTitle">To do list 📜</h1>
      <p className="counterSubTitle">You have completed {completedTodos} tasks out of {totalTodos}</p>
    </div>
  );
}

export { TodoCounter };