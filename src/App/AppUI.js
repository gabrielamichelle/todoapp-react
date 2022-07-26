import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";

function AppUI({
  loading,// variables para useEffect
  error,
  totalTodos,// estas son props que estamos recibiendo desde el idex.
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  toggleCompleTodo,
  deleteTodo
}) {

  return(
    <React.Fragment>
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch 
        searchValue={searchValue} 
        setSearchValue={setSearchValue}
      />
      
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

      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };