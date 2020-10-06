import React from "react";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends React.Component {
  state = {
    inputLength: 0,
    enteredString: "",
    stringArray: [],
  };

  handleInput = (event) => {
    this.setState({
      inputLength: event.target.value.length,
      enteredString: event.target.value,
      stringArray: event.target.value.split(""),
    });
  };

  deleteCharHandler = (charIndex) => {
    const stringArray = [...this.state.stringArray];
    stringArray.splice(charIndex, 1);
    this.setState({
      stringArray,
      enteredString: stringArray.join(""),
      inputLength: stringArray.join("").length,
    });
  };

  render() {
    let characters = null;

    if (this.state.inputLength) {
      characters = (
        <div>
          {this.state.stringArray.map((char, index) => {
            return (
              <CharComponent
                key={index}
                char={char}
                click={() => this.deleteCharHandler(index)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div>
        <input type="text" value={this.state.enteredString} onChange={(event) => this.handleInput(event)} />
        <p>{this.state.inputLength}</p>
        <ValidationComponent length={this.state.inputLength} />
        {characters}
      </div>
    );
  }
}

export default App;
