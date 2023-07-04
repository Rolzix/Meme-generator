import React from "react";
import imgUrl from "/src/assets/brain.jpg";
export default function Header() {
  return (
    <div className="nav--main">
      <img className="nav--image" src={imgUrl} alt="" />
      <h1>Meme Generator</h1>
    </div>
  );
}
