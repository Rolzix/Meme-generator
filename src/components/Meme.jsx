import React from "react";
import data from "../memesData";

export default function Meme() {
  function getImage() {
    let rand = Math.floor(Math.random() * data.data.memes.length);
    console.log(data.data.memes[rand].url);
    url = data.data.memes[rand].url;
  }
  return (
    <main>
      <div className="inputForm">
        <input className="upperInput" type="text" placeholder="Top text" />
        <input className="lowerInput" type="text" placeholder="Bottom text" />
        <button onClick={getImage} className="newImage">
          Get a new meme image 🖼<img></img>
        </button>
      </div>
    </main>
  );
}
