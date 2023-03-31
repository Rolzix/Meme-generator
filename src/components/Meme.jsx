import React from "react";
import data from "../memesData";

/**
 * Challenge: Save the random meme URL in state
 * - Create new state called `memeImage` with an
 *   empty string as default
 * - When the getMemeImage function is called, update
 *   the `memeImage` state to be the random chosen
 *   image URL
 * - Below the div.form, add an <img /> and set the
 *   src to the new `memeImage` state you created
 */

export default function Meme() {
  let [memeImage, setMemeImage] = React.useState("");
  // console.log(React.useState(""));
  function getImage() {
    let rand = Math.floor(Math.random() * data.data.memes.length);
    // console.log(data.data.memes[rand].url);
    let url = data.data.memes[rand].url;
    setMemeImage(url);
  }
  return (
    <main>
      <div className="inputForm">
        <input className="upperInput" type="text" placeholder="Top text" />
        <input className="lowerInput" type="text" placeholder="Bottom text" />
        <button onClick={getImage} className="newImage">
          Get a new meme image 🖼
          <br />
        </button>
        <img src={memeImage} className="memeImage"></img>
      </div>
    </main>
  );
}
