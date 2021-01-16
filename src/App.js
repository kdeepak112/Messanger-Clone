import React, { useState, useEffect } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
function App() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    db.collection("message")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setMessage(
          snapshot.docs.map((doc) => ({ id: doc.id, messages: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Enter Your Username"));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection("message").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };
  return (
    <div className="mt-5 container">
      <form className="container text-center form">
        <input
          className="form-control"
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <button
          disabled={!input}
          className="mt-3 btn btn-outline-primary"
          type="submit"
          onClick={sendMessage}
        >
          CLICK ME
        </button>
      </form>

      {message.map(({ id, messages }) => (
        <Message key={id} message={messages} username={username} />
      ))}
    </div>
  );
}

export default App;
