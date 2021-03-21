import React from "react";
import "./ListComponent.css";
import Item from "../ListItem/ListItemComponent";

function List(props) {
  return (
    <div className="list">
      {props.posts.map((todo) => (
        <Item key={todo.id} task={todo.task} id={todo.id} />
      ))}
    </div>
  );
}

export default List;
