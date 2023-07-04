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
    { id: 1, text: "One does not simply", fontSize: 30, x: 50, y: 0 },
    {
      id: 2,
      text: "Walk into Mordor",
      fontSize: 30,
      x: 50,
      y: 80,
    },
  ]);

  const handleAddElement = () => {
    const newElement = {
      id: Math.random().toString(36).substring(7),
      fontSize: 30,
      x: 50,
      y: 50,
      text: "New text",
    };
    setElements([...elements, newElement]);
  };

  const handleRemoveElement = (id, e) => {
    e.preventDefault();
    setElements(elements.filter((element) => element.id !== id));
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
    const { name, value } = e.target;
    console.log(name, value);
    console.log(id, e.target.value);
    console.log(elements);
    // console.log(elements[id].text);
    // update elements.text based of id
    setElements(
      elements.map((element) => {
        if (element.id === id) {
          return { ...element, [name]: value };
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
        <div key={element.id} className="inputs">
          <input
            type="text"
            placeholder="Top text"
            name="text"
            onChange={(e) => updateText(element.id, e)}
            value={element.text}
          />
          <input
            type="number"
            className="fontSize"
            name="fontSize"
            onChange={(e) => updateText(element.id, e)}
            value={element.fontSize}
          />
          <input
            name="x"
            type="range"
            min="0"
            max="100"
            // value={sliderValue}
            onChange={(e) => updateText(element.id, e)}
            value={element.x}
          />
          <input
            name="y"
            type="range"
            min="0"
            max="100"
            // value={sliderValue}
            onChange={(e) => updateText(element.id, e)}
            value={element.y}
          />
          <button onClick={(e) => handleRemoveElement(element.id, e)}>X</button>
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
            fontSize: `${element.fontSize}px`,
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
        <button className="addText--button" onClick={handleAddElement}>
          Add text
        </button>
        <div className="legend--container">
          <div className="legend--text">Input text:</div>
          <div className="legend--text">Left/Right</div>
          <div className="legend--text">Up/Down</div>
        </div>
        {inputAndSliders()}

        <button onClick={getImage} className="newImage">
          Get a new meme image 🖼
          <br />
        </button>
      </div>
      <div className="imageField">
        <div className="meme">
          <img src={meme.randomImage} className="meme--image" />

          {textOnImage()}
        </div>
      </div>
    </main>
  );
}
