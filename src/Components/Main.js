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
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.state.count >= 9) {
      this.handleAnswers();
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

  getResults = () => {};

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
      height: "600px",
      width: "600px",
      border: "1px solid",
      margin: "auto",
    };

    const buttonStyles = {
      marginTop: "40px",
      padding: "8px",
      width: "100px",
    };
    return (
      <div style={styles}>
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
          disabled={this.state.value}
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
        />
      </div>
    );
  }
}
export default Main;
