import React from "react";

class Results extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  getResults = () => {
    this.setState({
      show: true,
    });
  };

  gameRestart = () => {
    let count = 0;
    let score = 0;
    this.props.restartGame(count, score);
    this.setState({
      show: false,
    });
    let bool = false;
    this.props.resetResultButton(bool);
  };
  render() {
    const { count } = this.props;
    const { value } = this.props;
    const buttonStyles = {
      width: "25%",
      padding: "8px",
      fontSize: "18px",
      marginTop: "30px",
      borderRadius: "5px",
      cursor: "pointer",
    };
    const scoreDisplay = {
      width: "300px",
      height: "50px",
      margin: "auto",
      marginTop: "30px",
      fontSize: "25px",
      border: "1px solid #ddd",
      lineHeight: "50px",
    };
    return (
      <div>
        <button
          style={buttonStyles}
          disabled={this.props.showResult ? value : !value}
          onClick={this.getResults}
        >
          Get results
        </button>
        {this.state.show ? (
          <div style={scoreDisplay}>Your score is: {this.props.score}</div>
        ) : null}
        {this.state.show ? (
          <button onClick={this.gameRestart} style={buttonStyles}>
            Start Again
          </button>
        ) : null}
      </div>
    );
  }
}
export default Results;
