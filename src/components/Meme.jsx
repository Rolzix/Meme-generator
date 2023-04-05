import React from "react";
import data from "../memesData";

export default function Meme() {
  let [meme, setMeme] = React.useState({
    TopText: "One does not simply",
    BottomText: "Walk into Mordor",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  let [allMemeImages, setAllMemeImages] = React.useState(data.data.memes);
  // console.log(allMemeImages);
  function updateText() {
    let { name, value } = event.target;
    setMeme({ ...meme, [name]: value });
  }

  function getImage() {
    let rand = Math.floor(Math.random() * allMemeImages.length);
    // console.log(allMemeImages.length);
    let url = allMemeImages[rand].url;
    setMeme({ ...meme, randomImage: url });
  }
  return (
    <main>
      <div className="inputForm">
        <input
          className="upperInput"
          type="text"
          placeholder="Top text"
          name="TopText"
          onChange={updateText}
          value={meme.TopText}
        />
        <input
          className="lowerInput"
          type="text"
          placeholder="Bottom text"
          name="BottomText"
          onChange={updateText}
          value={meme.BottomText}
        />
        <button onClick={getImage} className="newImage">
          Get a new meme image 🖼
          <br />
        </button>
        <div className="meme">
          <img src={meme.randomImage} className="meme--image" />
          <h2 className="meme--text top">{meme.TopText}</h2>
          <h2 className="meme--text bottom">{meme.BottomText}</h2>
        </div>
      </div>
    </main>
  );
}
