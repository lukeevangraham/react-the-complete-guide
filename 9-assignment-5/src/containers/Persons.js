import React, { Component } from "react";
import { connect } from "react-redux";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";

import * as actionTypes from "../store/actions";

class Persons extends Component {
  render() {
    console.log(`PROPS: ${this.props}`);
    return (
      <div>
        <AddPerson personAdded={this.props.onAddPerson} />
        {this.props.persons.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onDelPerson(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    persons: state.persons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPerson: () => dispatch({ type: actionTypes.ADD_PERSON }),
    onDelPerson: (id) =>
      dispatch({ type: actionTypes.DEL_PERSON, personElId: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
