import React from "react";
import { AppUI } from "./AppUI";

/* const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Chapodar', completed: false },
  { text: 'Llorar con la llorona', completed: true },
  { text: 'Un texto es una composición de signos', completed: false }
]; */

// custom react hook
// Recibimos nuestro dos parametros el nombre y el estado inicial del item
function useLocalStorage(itemName, initialValue) {
  // guardamos en una constante el item
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  /* 
  aqui la logica es la siguiente, si no hemos creado ningun todo entonces
  vamos a crear un  array por defecto, en el caso que si haya TODOS entonces
  solo a ese array por defecto le vamos a mandar los TODOS
  */
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue)); // creando un array por defecto de una lista de TODOS en el caso que no haya ningun TODO
    parsedItem = [];
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  // haciendo uso de los hooks de react dentro de nuestro custom hook
  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  return [
    item,
    saveItem
  ];
}

function App() {
  // estados
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
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
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos]; // le inyectamos todos los todos que teniamos antes
    newTodos.splice(todoIndex, 1); 
    saveTodos(newTodos)
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
