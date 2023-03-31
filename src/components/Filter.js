import React from "react"

function Filter ({ filterOn, onFilter}) {
    function filterDogs () {
        onFilter(()=>!filterOn)
    }
    return (
        <div id="filter-div">
            <button onClick={filterDogs} id="good-dog-filter">Filter good dogs: OFF</button>
        </div>
    )
}

export default Filter