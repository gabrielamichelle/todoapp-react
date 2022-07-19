import React from "react";
import './TodoCounter.css' ;

function TodoCounter(props) {

    const {total, completed} = props;

    return(
        <div className="counterContainer">
            <h1 className="counterTitle">To do list 📜</h1>
            <p className="counterSubTitle">You have completed {completed} tasks out of {total}</p>
        </div>
    );
}

export { TodoCounter };