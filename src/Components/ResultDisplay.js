import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Link } from "react-router-dom";

const ModalExample = (props) => {
  const {
    buttonLabel,
    className,
    score,
    restartGame,
    resetResultButton,
    correctAnswer,
    selectedAnswer,
    handleFinalResult,
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
    if (selectedAnswer == correctAnswer) {
      let val = 1;
      handleFinalResult(val);
    }
  };

  const buttonStyles = {
    width: "25%",
    padding: "8px",
    fontSize: "18px",
    marginTop: "90px",
    borderRadius: "6px",
    cursor: "pointer",
    marginLeft: "440px",
    fontWeight: "700",
    backgroundColor: "white",
    border: "2px solid indigo",
    color: "indigo",
  };

  const gameRestart = () => {
    let count = 0;
    let score = 0;
    restartGame(count, score);
    let bool = false;
    resetResultButton(bool);
  };

  const styles = {
    marginLeft: "170px",
    color: "orange",
    fontWeight: "600",
    borderBottom: "none",
  };

  const resultStyle = {
    marginLeft: "130px",
    fontSize: "20px",
    borderBottom: "none",
    fontWeight: "700",
  };

  const againButton = {
    marginRight: "170px",
    color: "#0f8b8d",
    backgroundColor: "indigo",
    borderRadius: "6px",
    color: "white",
  };

  return (
    <div>
      <Button color="danger" onClick={toggle} style={buttonStyles}>
        Get Results
      </Button>
      <Modal centered isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} style={styles}>
          Congratulations
        </ModalHeader>
        <ModalBody style={resultStyle}>
          You scored :{" "}
          <span
            style={{ color: "blue", fontSize: "30px", fontFamily: "cursive" }}
          >
            {score} points
          </span>
        </ModalBody>
        <ModalFooter>
          <Link to="/">
            <Button color="primary" onClick={gameRestart} style={againButton}>
              Play Again
            </Button>
          </Link>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
