import * as actionTypes from "./actions";

const initialState = {
  persons: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PERSON:
      const newPerson = {
        id: Math.random(), // not really unique but good enough here!
        name: "Max",
        age: Math.floor(Math.random() * 40),
      };
      return {
        ...state,
        persons: state.persons.concat(newPerson)
      };
    case actionTypes.DEL_PERSON:
      // const updatedArray = state.persons.filter(
      //   (person) => person.id !== action.personElId
      // );
      return {
        ...state,
        persons: state.persons.filter(
          (person) => person.id !== action.personElId
        )
      };
    default:
      break;
  }
  return state;
};

export default reducer;
