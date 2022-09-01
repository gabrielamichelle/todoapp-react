import React from "react";
import './TodoItem.css' ;
import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";

function TodoItem(props){
    return(
        <li>
            <div className="infoTaskContainer">
                {/* <span className="checkTask" onClick={props.onComplete}>
                    <i className={`iconCheck ${props.completed && 'checked'}`}>✔</i>
                </span> */}
                <CompleteIcon completed={props.completed} onComplete={props.onComplete}/>
                <p className={`textTask ${props.completed && 'complete'}`}>{props.text}</p>
            </div>
            {/* <span className="deleteTask" onClick={props.onDelete}>❌</span> */}
            <DeleteIcon onDelete={props.onDelete}/>
        </li>
    );
}

export { TodoItem };