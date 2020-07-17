import React from "react";
import { Link } from "react-router-dom";

class StartQuiz extends React.Component {
  render() {
    const styles = {
      margin: "auto",
      width: "600px",
      height: "400px",
      border: "1px solid",
      marginTop: "100px",
      padding: "20px",
      backgroundColor: "#E8D5EC",
      color: "darkblue",
    };

    const contentStyling = {
      textAlign: "center",
      height: "80px",
      lineHeight: "80px",
      fontSize: "40px",
      fontWeight: "700",
    };

    const listStyling = {
      listStyle: "square",
      lineHeight: "40px",
      fontSize: "21px",
      fontWeight: "600",
    };
    return (
      <div style={styles}>
        <h2 style={contentStyling}>Quizzer</h2>
        <ul style={listStyling}>
          <li>The quiz consists of 10 questions. </li>
          <li> Each correct answer will have a score of one.</li>
        </ul>
        <Link to="/game">
          <button
            style={{
              marginLeft: "205px",
              padding: "10px",
              width: "100px",
              marginTop: "50px",
              fontSize: "20px",
              width: "150px",
              borderRadius: "6px",
              color: "white",
              border: "none",
              backgroundColor: "indigo",
              fontWeight: "600",
            }}
          >
            Lets Start
          </button>
        </Link>
      </div>
    );
  }
}

export default StartQuiz;
