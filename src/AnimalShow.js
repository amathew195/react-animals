import { useState } from 'react';
import bird from './svg/bird.svg';
import dog from './svg/dog.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';
import './AnimalShow.css';

const SVGMap = { bird, dog, cat, cow, gator, heart, horse };

function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);

  function handleClick() {
    setClicks(clicks + 1);
    console.log(clicks);
  }

  return <div onClick={handleClick} className='AnimalShow'>
    <img className='AnimalShow-image' src={SVGMap[type]} alt={type} />
    <img
      className='AnimalShow-heart'
      src={heart}
      alt="heart"
      style={{ width: 10 + 10 * clicks }}
    />
  </div>;
}

export default AnimalShow;