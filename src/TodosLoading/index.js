import React from "react";
import "./TodosLoading.css"

function TodosLoading({ error }) {
    return (
        <div className="todoLoadingContainer">
            <div className="todoLoadingBox" />
        </div>
    );
}

export { TodosLoading };