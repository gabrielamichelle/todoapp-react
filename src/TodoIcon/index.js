import React from "react";
import "./TodoIcon.css";
import { FaCheck } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

/* Objeto con los iconos a mostrar */
const iconTypes = {
    "check": color => (
        <FaCheck className="Icon-svg Icon-svg--check" color={color}/>
    ),
    "delete": color => (
        <FaTrash className="Icon-svg Icon-svg--delete"  color={color}/>
    )
} 

function TodoIcon({ type, color = 'gray', onClick }) {

    return (
        <span className={`Icon-container Icon-container--${type}`} onClick={onClick}>
            {iconTypes[type](color)}
        </span>
    );
}

export { TodoIcon };