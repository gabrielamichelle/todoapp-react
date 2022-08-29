import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    toggleCompleTodo,
    deleteTodo,
    openModal,
    setOpenModal } = useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && <p>Estamos cargando!!!</p>}
        {error && <p>Te fallamos!!!</p>}
        {(!loading && !searchedTodos.length) && <p>Crea tu primer Todo!!!</p>}
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => toggleCompleTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI };