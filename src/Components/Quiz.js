import React from "react";
import Answers from "./Answers";

class Quiz extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
  };

  componentDidUpdate = (props) => {
    if (props.id != this.props.id) {
      let value = null;
      this.props.handleCheck(value);
    }
  };
  handleOptionSelection = (val) => {
    this.props.handleSelection(val);
  };

  render() {
    const { answer } = this.props;
    const { id } = this.props;

    const styles = {
      // height: "80px",
      fontSize: "20px",
      marginTop: "30px",
      fontFamily: "Palatino Linotype",
      textAlign: "left",
      padding: "20px",
      marginLeft: "80px",
      fontWeight: "900",
    };

    const styleQuestionNumber = {
      marginTop: "30px",
      height: "50px",
      lineHeight: "50px",
      fontSize: "30px",
      fontWeight: "700",
      textAlign: "center",
    };

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div style={styleQuestionNumber}>
            Question No:{this.props.questionNumber}
          </div>
          <div style={styles}>{this.props.items}</div>
          {answer.map((item) => {
            return (
              <Answers
                item={item}
                id={id}
                handleOptionSelection={this.handleOptionSelection}
                selectionOption={this.props.selectionOption}
              />
            );
          })}
        </form>
      </div>
    );
  }
}
export default Quiz;
