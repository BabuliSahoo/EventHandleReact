import React, { useState } from "react";

function App() {
  // const [headingText, setHeadingText] = useState("");
  // const [isMousedOver, setMouseOver] = useState(false);

  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }
  function handleClick(event) {
    setHeading(name);
    event.preventDefault();
  }

  // function handleClick() {
  //   setHeadingText("Submitted");
  // }

  // function handleMouseOver() {
  //   setMouseOver(true);
  // }

  // function handleMouseOut() {
  //   setMouseOver(false);
  // }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClick}>
      <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />    
        {/* <button
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      > Submit
      </button> */}
      <button type="submit">Submit</button>
      </form>

    </div>
  );
}

export default App;
