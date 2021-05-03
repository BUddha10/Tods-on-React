import React, { useState } from "react";
import "./AddCard.css";
import SingleList from "./SingleList";

import DoneIcon from "@material-ui/icons/Done";
import { IconButton } from "@material-ui/core";

function AddCard() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleClick = (event) => {
    event.preventDefault();
    if (input !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  return (
    <div className="addCard">
      <h1>Your ToDO Lists</h1>
      {todos.map((data) => (
        <SingleList toAdd={data} />
      ))}

      <div className="addCard__input">
        <input
          type="text"
          placeholder="+ Enter a New Task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <IconButton>
          <DoneIcon onClick={handleClick} />
        </IconButton>
      </div>
    </div>
  );
}

export default AddCard;
