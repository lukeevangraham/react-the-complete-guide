import React from "react";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends React.Component {
  state = {
    enteredString: "",
  };

  handleInput = (event) => {
    this.setState({
      enteredString: event.target.value,
    });
  };

  deleteCharHandler = (charIndex) => {
    const text = this.state.enteredString.split('');
    text.splice(charIndex, 1);
    const updatedText = text.join('');
    this.setState({
      enteredString: updatedText,
    });
  };

  render() {
    // let characters = null;

    // if (this.state.enteredString) {
    //   characters = (
    //     <div>
    //       {this.state.stringArray.map((char, index) => {
    //         return (
    //           <CharComponent
    //             key={index}
    //             char={char}
    //             click={() => this.deleteCharHandler(index)}
    //           />
    //         );
    //       })}
    //     </div>
    //   );
    // }

    const characters = this.state.enteredString.split('').map((ch, index) => {
      return (
        <CharComponent key={index} char={ch} click={() => this.deleteCharHandler(index)} />
      );
    });

    return (
      <div>
        <input
          type="text"
          value={this.state.enteredString}
          onChange={(event) => this.handleInput(event)}
        />
        <p>{this.state.enteredString.length}</p>
        <ValidationComponent length={this.state.enteredString.length} />
        {characters}
      </div>
    );
  }
}

export default App;
