import React from "react";

export default function Meme() {
  return (
    <main>
      <form className="inputForm">
        <input className="upperInput" type="text" placeholder="Top text" />
        <input className="lowerInput" type="text" placeholder="Bottom text" />
        <button className="newImage">
          Get a new meme image 🖼<img></img>
        </button>
      </form>
    </main>
  );
}
