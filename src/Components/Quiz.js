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
      height: "50px",
      fontSize: "23px",
      marginTop: "10px",
    };
    return (
      <form onSubmit={this.handleSubmit}>
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
    );
  }
}
export default Quiz;
