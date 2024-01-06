import React, { useState } from "react";

function App() {
  const [name, setName] = useState({ fName: "", lName: "" });

  function nameChange(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;

    setName((prevValue) => {
      if (inputName === "fName") {
        return { fName: newValue, lName: prevValue.lName };
      } else if (inputName === "lName") {
        return { fName: prevValue.fName, lName: newValue };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {name.fName} {name.lName}
      </h1>
      <form>
        <input
          onChange={nameChange}
          name="fName"
          placeholder="First Name"
          value={name.fName}
        />
        <input
          onChange={nameChange}
          name="lName"
          placeholder="Last Name"
          value={name.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
