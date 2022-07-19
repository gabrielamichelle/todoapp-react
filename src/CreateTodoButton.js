import React from "react";
import './CreateTodoButton.css' ;

function CreateTodoButton(props){

    const onClickButton = (msg) => {
        alert(msg);
    };

    return(
        <button 
        className="btnCreate" 
        onClick={() => onClickButton('Este es el parametro de mensaje que esta esperando la funcion')}
        >
            +
        </button>
    );
}

export { CreateTodoButton };