import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = useState('');

  const {
    addTodo,
    setOpenModal,
  } = useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  const onCancel = () => {
    setOpenModal(false);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Agregar Todo</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar la cebolla para el alumerzo"
      />
      <div className="btnContainer">
        <button className="btn btnCancel" type="button" onClick={onCancel}>Cancelar</button>
        <button className="btn btnAdd" type="submit">Añadir Todo</button>
      </div>
    </form>
  );
}

export { TodoForm };