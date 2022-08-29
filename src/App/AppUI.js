import React, { useContext, Fragment } from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";

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
    <Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <TodosError error={error} />}
        {loading && new Array(4).fill(1).map((item, key) => <TodosLoading />)}
        {(!loading && !searchedTodos.length) && <EmptyTodos />}
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
    </Fragment>
  );
}

export { AppUI };