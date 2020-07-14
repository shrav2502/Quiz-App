import React from "react";

class Answers extends React.Component {
  handleInputChange = (e) => {
    this.props.handleOptionSelection(e.target.value);
  };

  render() {
    const styles = {
      height: "50px",
      fontSize: "25px",
      border: "2px solid #ddd",
      width: "500px",
      margin: "auto",
      marginTop: "30px",
      lineHeight: "50px",
    };

    const inputStyles = {
      transform: "scale(1.5)",
      width: "5%",
    };
    return (
      <div style={styles}>
        <input
          style={inputStyles}
          type="radio"
          name={this.props.id}
          id={this.props.item}
          value={this.props.item}
          checked={this.props.selectionOption === this.props.item}
          onChange={this.handleInputChange}
          ref={(input) => (this.storeInput = input)}
        />
        <label htmlFor={this.props.id}>{this.props.item}</label>
      </div>
    );
  }
}
export default Answers;
