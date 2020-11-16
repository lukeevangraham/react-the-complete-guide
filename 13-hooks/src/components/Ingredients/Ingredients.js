import React, { useReducer, useEffect, useCallback } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import ErrorModal from "../UI/ErrorModal";
import Search from "./Search";
import useHttp from "../../hooks/http";

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case "SET":
      return action.ingredients;
    case "ADD":
      return [...currentIngredients, action.ingredient];
    case "DELETE":
      return currentIngredients.filter((ing) => ing.id !== action.id);
    default:
      throw new Error("Should not get there!");
  }
};

function Ingredients() {
  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
  const { isLoading, error, data, sendRequest } = useHttp();

  // const [userIngredients, setUserIngredients] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();

  useEffect(() => {
    console.log("rendering ingredients", userIngredients);
  }, [userIngredients]);

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    // setUserIngredients(filteredIngredients);
    dispatch({
      type: "SET",
      ingredients: filteredIngredients,
    });
  }, []);

  const addIngredientHandler = useCallback((ingredient) => {
    // setIsLoading(true);
    // dispatchHttp({ type: "SEND" });
    // fetch("https://react-hooks-update-8a73b.firebaseio.com/ingredients.json", {
    //   method: "POST",
    //   body: JSON.stringify(ingredient),
    //   headers: { "Content-Type": "application/json" },
    // })
    //   .then((response) => {
    //     // setIsLoading(false);
    //     dispatchHttp({ type: "RESPONSE" });
    //     return response.json();
    //   })
    //   .then((responseData) => {
    //     // setUserIngredients((prevIngredients) => [
    //     //   ...prevIngredients,
    //     //   { id: responseData.name, ...ingredient },
    //     // ]);
    //     dispatch({
    //       type: "ADD",
    //       ingredient: { id: responseData.name, ...ingredient },
    //     });
    //   });
  }, []);

  const removeIngredientHandler = useCallback(
    (ingredientID) => {
      // setIsLoading(true);
      // dispatchHttp({ type: "SEND" });
      sendRequest(
        `https://react-hooks-update-8a73b.firebaseio.com/ingredients/${ingredientID}.json`,
        "DELETE"
      );
    },
    [sendRequest]
  );

  const clearError = useCallback(() => {
    // setError(null);
    // dispatchHttp({ type: "CLEAR" });
  }, []);

  return (
    <div className="App">
      {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}
      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={isLoading}
      />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        <IngredientList
          ingredients={userIngredients}
          onRemoveItem={removeIngredientHandler}
        />
      </section>
    </div>
  );
}

export default Ingredients;
