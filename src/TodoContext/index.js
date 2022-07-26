import React, { useState, createContext } from "react";
import useLocalStorage from "./useLocalStorage";

const TodoContext = createContext();

function ToDoProvider(props) {

    const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);

    // estados
    // const [todos, saveTodos] = useLocalStorage('TODOS_V1', []); // Custom hook
    // const [patito, savePatito] = useLocalStorage('PATITO_ V1', 'Fernando');
    const [searchValue, setSearchValue] = useState('');

    // const
    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;
    let searchedTodos = [];

    if (searchValue.length < 0) {
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
        newTodos[todoIndex].completed = ! newTodos[todoIndex].completed; // aqui editamos el campo completed en el todo correspondiente de la nueva lista
        saveTodos(newTodos)
    }

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos]; // le inyectamos todos los todos que teniamos antes
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos)
    }

    return (
    <TodoContext.Provider value={{
        error,
        loading,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        toggleCompleTodo,
        deleteTodo,
    }}> 
        { props.children } 
    </TodoContext.Provider>);
}

{/* <TodoContext.Consumer></TodoContext.Consumer> */}

export { TodoContext, ToDoProvider };