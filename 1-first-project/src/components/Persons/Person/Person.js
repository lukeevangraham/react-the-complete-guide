import React from "react";
import PropTypes from "prop-types";

import withClass from "../../../hoc/withClass";
import classes from "./Person.module.css";
import AuthContext from '../../../context/auth-context';

class Person extends React.Component {
  constructor(props) {
    super()
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    console.log("Person.js rendering...");
    return (
      <React.Fragment>

          { this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>  }

        {/* <div className={classes.Person}> */}
          <h2 onClick={this.props.click}>
            I'm {this.props.name} and I am {this.props.age} years old!
          </h2>
          <p key="i2">{this.props.children}</p>
          <input
            key="i3"
            // ref={(inputEl) => {this.inputElement = inputEl}}
            ref={this.inputElementRef}

            type="text"
            onChange={this.props.changed}
            value={this.props.name}
          />
        {/* </div> */}
      </React.Fragment>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default withClass(Person, classes.Person);
