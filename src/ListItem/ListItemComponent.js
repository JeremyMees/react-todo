import React from "react";
import "./ListItemComponent.css";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import { firestore } from "../firebase";

function Item(props) {
  function deleteItem() {
    firestore.collection("tasks").doc(props.id).delete();
  }

  return (
    <div className="item">
      <span className="left">{props.task}</span>
      <Button variant="info" className="right" size="sm" onClick={deleteItem}>
        x
      </Button>
    </div>
  );
}

Item.propTypes = {
  task: PropTypes.string.isRequired,
};

export default Item;
