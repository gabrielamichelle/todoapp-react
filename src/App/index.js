import React, { useState } from "react";
import { AppUI } from "./AppUI";
import { ToDoProvider } from "../TodoContext";

/* const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Chapodar', completed: false },
  { text: 'Llorar con la llorona', completed: true },
  { text: 'Un texto es una composición de signos', completed: false }
]; */

// custom react hook
// Recibimos nuestro dos parametros el nombre y el estado inicial del item


function App() {

  return (
    <ToDoProvider>
      <AppUI />
    </ToDoProvider>
  );
}

export default App;