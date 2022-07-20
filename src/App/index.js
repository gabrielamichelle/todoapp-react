import React from "react";
import { AppUI } from "./AppUI";

const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Chapodar', completed: false },
  { text: 'Llorar con la llorona', completed: true },
  { text: 'Un texto es una composición de signos', completed: false }
];

function App() {
  // estados
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  // const 
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;
  let searchedTodos = [];

  if(searchValue.length < 0) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  const toggleCompleTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos]; // le inyectamos todos los todos que teniamos antes
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed; // aqui editamos el campo completed en el todo correspondiente de la nueva lista
    setTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos]; // le inyectamos todos los todos que teniamos antes
    newTodos.splice(todoIndex, 1); 
    setTodos(newTodos)
  }

  return (
    <AppUI 
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue} 
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      toggleCompleTodo={toggleCompleTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
