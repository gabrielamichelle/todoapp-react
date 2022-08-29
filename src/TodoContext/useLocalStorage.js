import React, { useState, useEffect } from "react";

function useLocalStorage(itemName, initialValue) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    // haciendo uso de los hooks de react dentro de nuestro custom hook
    const [item, setItem] = useState(initialValue);
  
    useEffect(() => {
      setTimeout(() => {
        try {
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
  
          setItem(parsedItem);
          setLoading(false);
        } catch (error) {
          setError(error);
        }
      }, 3000);
    });
  
  
  
    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
      } catch (error) {
        setError(error);
      }
    };
  
    // retornamos los elementos del array, tanto el estado viejo del item como el nuevo estado, estamos enviando los datos en un array para tener un mejor control sobre ellos
    return {
      item,
      saveItem,
      loading,
      error
    };
}

export { useLocalStorage };