import React from "react";
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {

    // const [searchValue, setSearchValue] = React.useState('');

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return [
        <div className="searchContainer">
            <input 
                placeholder="Cebollas" 
                value={searchValue} 
                onChange={onSearchValueChange} 
            />
            {/* <p>{searchValue}</p> */}
        </div>
    ];
}

export {
    TodoSearch
};
