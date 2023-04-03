import React from "react";
import data from "../memesData";

/**
 * Challenge: Update our state to save the meme-related
 * data as an object called `meme`. It should have the
 * following 3 properties:
 * topText, bottomText, randomImage.
 *
 * The 2 text states can default to empty strings for now,
 * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
 *
 * Next, create a new state variable called `allMemeImages`
 * which will default to `memesData`, which we imported above
 *
 * Lastly, update the `getMemeImage` function and the markup
 * to reflect our newly reformed state object and array in the
 * correct way.
 */
s;
export default function Meme() {
  let [meme, setMeme] = React.useState({
    TopText: "",
    BottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  let [allMemeImages, setAllMemeImages] = React.useState(data.data.memes);
  // console.log(allMemeImages);
  function getImage() {
    let rand = Math.floor(Math.random() * allMemeImages.length);
    console.log(allMemeImages.length);
    let url = allMemeImages[rand].url;
    setMeme({ ...meme, randomImage: url });
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
        <img src={meme.randomImage} className="memeImage"></img>
      </div>
    </main>
  );
}
