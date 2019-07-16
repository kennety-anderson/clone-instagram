import React, { useState, useEffect } from "react";
import socketIoClient from "socket.io-client";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [url, setUrl] = useState("http://localhost:8080");

  fetch(url)
    .then(res => res.json())
    .then(res => console.log(res));

  const socket = socketIoClient(url);
  socket.on("msg", data => console.log(data));
  socket.emit("test", { ok: true });

  useEffect(() => {
    socket.emit("new-msg", { ok: true });

    socket.on("abc", function(data) {
      console.log(data, "data socket");

      setPosts(data);
    });
  });

  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" alt="logo" />
        {/* <div className="resp-api"> {response.map((item, index) =>
          <p key={index}>{item}</p>
        )} </div> */}
        {/* <div>{response}</div> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
