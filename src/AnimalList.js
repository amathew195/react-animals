import AnimalShow from "./AnimalShow";
import { useState } from "react";

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

  return animals[Math.floor(Math.random() * animals.length)];
}

function AnimalList() {

  const [animals, setAnimals] = useState([]);

  function handleClick() {
    setAnimals([...animals, getRandomAnimal()]);
  };

  return <div>
    <button onClick={handleClick}>Add Animal</button>
    <div>{animals.map((a, idx) => <AnimalShow type={a} key={idx} />)}</div>
  </div>;
}

export default AnimalList;