import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton(props) {

  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
  };

  return (
    <button
      className="btnCreate"
      onClick={onClickButton}
    >
      +
    </button>
  );
}

export { CreateTodoButton };