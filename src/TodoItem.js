import React from "react";
import './TodoItem.css' ;

function TodoItem(props){

    const onComplete = () => {
        alert('Ya completaste el ToDo ' + props.text);
    };

    const onDelete = () => {
        alert('Borraste el ToDo ' + props.text);
    };

    return(
        <li>
            <div className="infoTaskContainer">
                <span className="checkTask" onClick={onComplete}>
                    <i className={`iconCheck ${props.completed && 'checked'}`}>✔</i>
                </span>
                <p className={`textTask ${props.completed && 'complete'}`}>{props.text}</p>
            </div>
            <span className="deleteTask" onClick={onDelete}>❌</span>
        </li>
    );
}

export { TodoItem };