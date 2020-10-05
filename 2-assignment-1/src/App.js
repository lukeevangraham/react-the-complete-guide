import React from "react";
import UserInput from "./components/UserInput/UserInput";
import UserOutput from "./components/UserOutput/UserOutput";

class App extends React.Component {
  state = {
    username: [{ name: "Lionel" }, { name: "Regis" }, { name: "Vincent" }],
  };

  nameChangeHandler = (event) => {
    this.setState({
      username: [
        { name: "Lionel" },
        { name: event.target.value },
        { name: "Vincent" },
      ],
    });
  };

  render() {
    return (
      <div>
        <UserInput change={this.nameChangeHandler} name={this.state.username[1].name} />
        <UserOutput userName={this.state.username[0].name} />
        <UserOutput userName={this.state.username[1].name} />
        <UserOutput userName={this.state.username[2].name} />
      </div>
    );
  }
}

export default App;
