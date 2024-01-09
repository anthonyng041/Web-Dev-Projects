import React from "react";

function CreateArea(props) {
  const [title, setTitle] = React.useState("");
  const [text, setText] = React.useState("");

  function changeTitle(event) {
    const value = event.target.value;
    setTitle(value);
  }

  function changeText(event) {
    const value = event.target.value;
    setText(value);
  }

  function submitNote(event) {
    props.onAdd({ title: title, text: text });
    setTitle("");
    setText("");
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={changeTitle}
          value={title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={changeText}
          value={text}
        />
        <button onClick={submitNote}></button>
      </form>
    </div>
  );
}

export default CreateArea;
