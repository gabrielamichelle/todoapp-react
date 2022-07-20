import React from "react";
import './TodoItem.css' ;

function TodoItem(props){

    return(
        <li>
            <div className="infoTaskContainer">
                <span className="checkTask" onClick={props.onComplete}>
                    <i className={`iconCheck ${props.completed && 'checked'}`}>✔</i>
                </span>
                <p className={`textTask ${props.completed && 'complete'}`}>{props.text}</p>
            </div>
            <span className="deleteTask" onClick={props.onDelete}>❌</span>
        </li>
    );
}

export { TodoItem };