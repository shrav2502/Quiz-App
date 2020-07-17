import React from "react";
import Answers from "./Answers";
import mark from "./mark.jpg";

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
      fontSize: "19px",
      marginTop: "20px",
      textAlign: "left",
      fontWeight: "500",
      marginButton: "20px",
      height: "90px",
    };

    const styleQuestionNumber = {
      height: "100px",
      lineHeight: "120px",
      fontSize: "35px",
      fontWeight: "700",
      textAlign: "center",
      width: "100%",
      marginTop: "40px",
    };

    const styleQuiz = {
      height: "450px",
    };

    const gridDisplay = {
      display: "grid",
      gridTemplateColumns: "120px 520px",
      height: "300px",
    };
    return (
      <div style={styleQuiz}>
        <form onSubmit={this.handleSubmit}>
          <div style={styleQuestionNumber}>
            Question No:{this.props.questionNumber}
          </div>

          <div style={gridDisplay}>
            <div>
              <img
                src={mark}
                style={{
                  height: "40px",
                  borderRadius: "50%",
                  marginLeft: "40px",
                  marginTop: "25px",
                }}
              ></img>
            </div>
            <div>
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
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default Quiz;
