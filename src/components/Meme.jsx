import React from "react";

/**
 * Challenge:
 * As soon as the Meme component loads the first time,
 * make an API call to "https://api.imgflip.com/get_memes".
 *
 * When the data comes in, save just the memes array part
 * of that data to the `allMemes` state
 *
 * Think about if there are any dependencies that, if they
 * changed, you'd want to cause to re-run this function.
 *
 * Hint: for now, don't try to use an async/await function.
 * Instead, use `.then()` blocks to resolve the promises
 * from using `fetch`. We'll learn why after this challenge.
 */

export default function Meme() {
  let [meme, setMeme] = React.useState({
    TopText: "One does not simply",
    BottomText: "Walk into Mordor",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  let [allMemes, setallMemes] = React.useState([]);
  // console.log(allMemes);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => {
        setallMemes(data.data.memes);
      });
  }, []);

  function updateText() {
    let { name, value } = event.target;
    setMeme({ ...meme, [name]: value });
  }

  function getImage() {
    let rand = Math.floor(Math.random() * allMemes.length);
    // console.log(allMemeImages.length);
    let url = allMemes[rand].url;
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
