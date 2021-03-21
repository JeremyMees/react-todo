import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

import NavbarComponent from "./Navbar/NavbarComponent";
import Modal from "./Modal/ModalComponent";
import List from "./List/ListComponent";

import { firestore } from "./firebase";

function App() {
  const [todo, setTodo] = useState(" ");
  const [posts, setPosts] = useState([]);
  const input = document.querySelector("#input");
  let dataArray = [];
  const query = firestore.collection("tasks");

  useEffect(() => {
    query.onSnapshot((snapshot) => {
      dataArray = [];
      snapshot.forEach((doc) => {
        dataArray.push({ ...doc.data(), id: doc.id });
      });
      setPosts(dataArray);
      console.log(dataArray);
    });
  }, []);

  function updateInput(e) {
    setTodo(e.target.value);
  }

  function addTodo(e) {
    e.preventDefault();
    firestore.collection("tasks").add({
      task: todo,
    });
    setTodo("");
    input.value = "";
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavbarComponent />
      </header>
      <div className="container">
        <form onSubmit={addTodo}>
          <InputGroup className="mb-3 form">
            <FormControl placeholder="Add todo" type="text" onChange={updateInput} id="input" />
            <InputGroup.Append>
              <Button variant="info" type="submit">
                Add
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </form>
        <List posts={posts} />
        <Modal className="modal-button" />
      </div>
    </div>
  );
}

export default App;
