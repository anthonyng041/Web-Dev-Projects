import React from "react";

function App() {
  const [mouseOver, setMouseOver] = React.useState(false);

  function changeButton() {
    mouseOver ? setMouseOver(false) : setMouseOver(true);
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onMouseOver={changeButton}
        onMouseOut={changeButton}
        style={mouseOver ? { backgroundColor: "black" } : null}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
