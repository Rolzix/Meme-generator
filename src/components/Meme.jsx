import React from "react";

export default function Meme() {
  let [meme, setMeme] = React.useState({
    TopText: "One does not simply",
    BottomText: "Walk into Mordor",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  let [allMemes, setallMemes] = React.useState([]);
  // const [sliderValue, setSliderValue] = React.useState(0);
  // const [inputAmount, setInputAmount] = React.useState(2);
  // console.log(allMemes);
  const [elements, setElements] = React.useState([
    { id: 1, text: "One does not simplyy", x: 50, y: 0 },
    {
      id: 2,
      text: "Walk into Mordorr",
      x: 50,
      y: 80,
    },
  ]);

  const handleAddElement = () => {
    const newElement = {
      id: Math.random().toString(36).substring(7),
      x: 0,
      y: 0,
      text: "test",
    };
    setElements([...elements, newElement]);
  };

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => {
        setallMemes(data.data.memes);
      });
  }, []);

  React.useEffect(() => {
    console.log(elements);
  }, [elements]);

  function updateText(id, e) {
    console.log(id, e.target.value);
    console.log(id.BottomText);
    console.log(elements);
    // console.log(elements[id].text);
    // update elements.text based of id
    setElements(
      elements.map((element) => {
        if (element.id === id) {
          return { ...element, text: e.target.value };
        } else {
          return element;
        }
      })
    );
  }

  function getImage() {
    let rand = Math.floor(Math.random() * allMemes.length);
    // console.log(allMemeImages.length);
    let url = allMemes[rand].url;
    setMeme({ ...meme, randomImage: url });
  }

  function inputAndSliders() {
    let inputArray = [];
    elements.map((element) => {
      inputArray.push(
        <div key={element.id}>
          <input
            type="text"
            placeholder="Top text"
            name="TopText"
            onChange={(e) => updateText(element.id, e)}
            value={element.text}
          />
          <input
            type="range"
            min="0"
            max="100"
            // value={sliderValue}
            // onChange={handleSliderChange}
          />
          <input
            type="range"
            min="0"
            max="100"
            // value={sliderValue}
            // onChange={handleSliderChange}
          />
        </div>
      );
    });

    return inputArray;
  }

  function textOnImage() {
    let textArray = [];

    elements.map((element) => {
      textArray.push(
        <div
          className="meme--text"
          key={element.id}
          style={{
            position: "absolute",
            top: `${element.y}%`,
            left: `${element.x}%`,
          }}
        >
          {element.text}
        </div>
      );
    });
    return textArray;
  }

  return (
    <main>
      <div className="textInput">
        <button onClick={handleAddElement}>Add text</button>
        {console.log("render test")}
        {inputAndSliders()}

        <button onClick={getImage} className="newImage">
          Get a new meme image 🖼
          <br />
        </button>
      </div>
      <div className="inputForm">
        <div className="meme">
          <img src={meme.randomImage} className="meme--image" />

          {textOnImage()}
        </div>
      </div>
    </main>
  );
}
