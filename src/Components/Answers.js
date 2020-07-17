import React from "react";

class Answers extends React.Component {
  state = { checked: false };
  handleInputChange = (e) => {
    this.props.handleOptionSelection(e.target.value);
    this.setState({
      checked: !this.state.checked,
    });
  };

  render() {
    const styles = {
      height: "35px",
      fontSize: "19px",
      width: "500px",
      textAlign: "left",
      fontWeight: "600",
      color: "white",
    };

    const inputStyles = {
      transform: "scale(1.2)",
      width: "35px",
    };

    return (
      <div style={styles}>
        <label htmlFor={this.props.id} className="parentLabel">
          <input
            type="radio"
            style={inputStyles}
            name={this.props.id}
            id={this.props.item}
            value={this.props.item}
            checked={this.props.selectionOption === this.props.item}
            onChange={this.handleInputChange}
            ref={(input) => (this.storeInput = input)}
          />
          {this.props.item}
        </label>
      </div>
    );
  }
}
export default Answers;
