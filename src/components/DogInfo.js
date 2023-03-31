import React from 'react'

function DogInfo({ dog, updateDogs }) {
    const {id, image, name, isGoodDog} = dog
    function handleClick() {
        fetch(`http://localhost:3001/pups/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({isGoodDog: !isGoodDog})
        })
        .then(r=>r.json())
        .then(newDogObj => updateDogs(newDogObj))
    }
    return(
        <div id="dog-info">
            <img src={image} alt={name}></img>
            <h2>{name}</h2>
            <button onClick={handleClick}>{isGoodDog? "Good Dog!": "Bad Dog!"}</button>
        </div>
    )
}

export default DogInfo