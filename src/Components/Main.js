import React from "react";
import Questions from "./Questions";
import Quiz from "./Quiz";
import ResultDisplay from "./ResultDisplay";

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
      questionNumber: 1,
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
        questionNumber: prevState.questionNumber + 1,
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

  handleFinalResult = (val) => {
    this.setState({
      score: this.state.score + val,
    });
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
        questionNumber: prevState.questionNumber - 1,
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
      backgroundColor: "#47a8bd",
      color: "darkblue",
      padding: 0,
      color: "white",
      height: "540px",
    };

    const nextButtonStyles = {
      padding: "8px",
      width: "100px",
      borderRadius: "6px",
      fontSize: "19px",
      cursor: "pointer",
      color: "#2a787a",
      border: "3px solid #2a787a",
      fontWeight: "600",
    };

    const previousButtonStyles = {
      padding: "8px",
      width: "100px",
      borderRadius: "6px",
      fontSize: "19px",
      cursor: "pointer",
      border: "2px solid #2a787a",
      color: "#2a787a",
      fontWeight: "600",
    };

    const buttonDisplayFlex = {
      display: "flex",
      justifyContent: "space-between",
      width: "580px",
      marginLeft: "50px",
    };

    const display = {
      width: "750px",
      margin: "auto",
      padding: "12px 36px 12px 36px",
      marginTop: "60px",
      height: "600px",
      bottom: "0",
    };

    return (
      <div style={display}>
        <div style={styles} className="container">
          <Quiz
            items={questions[this.state.count]}
            answer={answer[this.state.count]}
            id={id[this.state.count]}
            correctAnswer={correctAnswer[this.state.count]}
            handleSelection={this.handleSelection}
            selectionOption={this.state.selectedOption}
            handleCheck={this.handleCheck}
            questionNumber={this.state.questionNumber}
          />
          <div style={buttonDisplayFlex}>
            {this.state.questionNumber < 10 ? (
              <button style={previousButtonStyles} onClick={this.gotoPrevious}>
                Previous
              </button>
            ) : null}

            {this.state.questionNumber < 10 ? (
              <button onClick={this.handleClick} style={nextButtonStyles}>
                Next
              </button>
            ) : null}
          </div>
          <br />
          {this.state.questionNumber == 10 ? (
            <ResultDisplay
              score={this.state.score}
              restartGame={this.restartGame}
              resetResultButton={this.resetResultButton}
              selectedAnswer={this.state.selectedOption}
              correctAnswer={correctAnswer[this.state.count]}
              handleFinalResult={this.handleFinalResult}
            />
          ) : null}
        </div>
      </div>
    );
  }
}
export default Main;
