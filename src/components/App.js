import React, {useEffect, useState} from "react";
import DogBar from "./DogBar";
import DogInfo from "./DogInfo"
import Filter from "./Filter"

function App() {
  const [dogs, setDogs] = useState([])
  const [selectedDogId, setSelectedDogId] = useState(null);
  const [filterOn, setFilterOn] = useState(false)
  useEffect(() => {
    fetch("http://localhost:3001/pups")
    .then(r=>r.json())
    .then(dogs=> setDogs(dogs))
  }, [])
  const selectedDog = dogs.find(dog => dog.id === selectedDogId)
  
  function handleUpdateDogs(dogObj) {
    setDogs(dogs.map(dog => dog.id===dogObj.id? dogObj: dog))
  }
  let dogsToShow = dogs;
  if (filterOn) {
    dogsToShow = dogs.filter(dog=> dog.isGoodDog === true)
  }
  return (
    <div className="App">
      <Filter filterOn={filterOn} onFilter={setFilterOn}/>
      <DogBar dogs={dogsToShow} onClickDog={setSelectedDogId}/>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        {selectedDog === undefined? null: <DogInfo dog={selectedDog} updateDogs={handleUpdateDogs}/>}
        
      </div>
    </div>
  );
}

export default App;
