import React from "react";
import classes from "./Person.module.css";

class Person extends React.Component {
  render() {
    console.log("Person.js rendering...");
    return (
      <div className={classes.Person}>
        <h2 onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </h2>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    );
  }
}

export default Person;
