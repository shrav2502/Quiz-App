import React from "react";
import Questions from "./Questions";
import Quiz from "./Quiz";
import { Link } from "react-router-dom";
import Results from "./Results";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      questionBank: Questions,
      count: 0,
      value: "",
      score: 0,
      selectedOption: null,
      showResult: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.state.count >= 9) {
      this.handleAnswers();
      this.showResultButton();
      e.target.disabled = !this.state.value;
    } else {
      this.handleAnswers();
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    }
  }

  handleAnswers = () => {
    const correctAnswer = this.state.questionBank.map((item) => {
      return item.correctAnswer;
    });

    if (this.state.selectedOption === correctAnswer[this.state.count]) {
      this.setState({
        score: this.state.score + 1,
      });
    }
  };

  showResultButton = () => {
    this.setState({
      showResult: true,
    });
  };

  resetResultButton = () => {
    this.setState({
      showResult: false,
    });
  };

  handleButton = () => {
    this.setState({
      count: this.state.one,
    });
  };
  handleSelection = (val) => {
    this.setState({
      selectedOption: val,
    });
  };

  handleCheck = (val) => {
    this.setState({
      selectedOption: val,
    });
  };

  restartGame = (val, marks) => {
    this.setState({
      count: val,
      score: marks,
    });
  };

  gotoPrevious = () => {
    if (this.state.count > 0) {
      this.setState((prevState) => ({
        count: prevState.count - 1,
      }));
    }
  };
  render() {
    console.log(this.state.score);

    const { questionBank } = this.state;

    const questions = questionBank.map((item) => {
      return item.question;
    });

    const answer = questionBank.map((item) => {
      return item.answer;
    });
    const id = questionBank.map((item) => {
      return item.id;
    });

    const correctAnswer = questionBank.map((item) => {
      return item.correctAnswer;
    });

    const styles = {
      height: "720px",
      width: "600px",
      margin: "auto",
      borderStyle: "double",
      backgroundColor: "#EEFDFF",
      borderRadius: "5px",
    };

    const buttonStyles = {
      marginTop: "40px",
      padding: "8px",
      width: "100px",
      borderRadius: "5px",
      fontSize: "18px",
      cursor: "pointer",
    };
    const display = {
      display: "flex",
      width: "900px",
      margin: "auto",
    };

    return (
      <div style={display}>
        <p className="quizName">QUIZ</p>
        <div style={styles} className="container">
          <Quiz
            items={questions[this.state.count]}
            answer={answer[this.state.count]}
            id={id[this.state.count]}
            correctAnswer={correctAnswer[this.state.count]}
            handleSelection={this.handleSelection}
            selectionOption={this.state.selectedOption}
            handleCheck={this.handleCheck}
          />
          <button
            style={buttonStyles}
            onClick={this.gotoPrevious}
            disabled={this.state.count > 0 ? this.state.value : null}
          >
            Previous
          </button>
          &nbsp;
          <button
            disabled={this.state.count > 0 ? this.state.value : null}
            onClick={this.handleClick}
            style={buttonStyles}
          >
            Next
          </button>
          <br />
          <Results
            count={this.state.count}
            value={this.state.value}
            score={this.state.score}
            restartGame={this.restartGame}
            showResult={this.state.showResult}
            resetResultButton={this.resetResultButton}
          />
        </div>
      </div>
    );
  }
}
export default Main;
