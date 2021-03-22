import React from "react";
import "./ModalComponent";
import { Button, Modal } from "react-bootstrap";

class BootstrapModal extends React.Component {
  constructor() {
    super();
    this.state = {
      showHide: false,
    };
  }

  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
  }

  render() {
    return (
      <div>
        <Button variant="info" onClick={() => this.handleModalShowHide()} size="lg" className="btn-modal">
          About this project
        </Button>

        <Modal show={this.state.showHide}>
          <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
            <Modal.Title>To do list</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            This project is my first ever React project. No functions are tested and the database isn't secured. Because
            it was just a little project to get to know React.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.handleModalShowHide()}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default BootstrapModal;
