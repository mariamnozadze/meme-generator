import React from 'react';
import trollFace from "../images/Troll Face.png";
import "../App.css";

export default function Header() {
  return (
      <header className='header'>
        <img src={trollFace} alt="trollface" className='header-image'></img>
        <h2 className='header-title'>Meme Generator</h2>
        <h4 className='header-project'>My Project</h4>
      </header>

  )
}




