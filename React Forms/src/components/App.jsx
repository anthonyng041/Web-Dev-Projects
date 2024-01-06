import React from "react";

function App() {
  const [name, setName] = React.useState("");
  const [displayedName, setDisplayedName] = React.useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function displayName() {
    setDisplayedName(name);
  }

  return (
    <div className="container">
      <h1>Hello {displayedName}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={displayName}>Submit</button>
    </div>
  );
}

export default App;
