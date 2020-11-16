import React, { useContext } from "react";
import { jsx as _jsx } from 'react/jsx-runtime'

import Ingredients from "./components/Ingredients/Ingredients";
import Auth from "./components/Auth";
import { AuthContext } from "./context/auth-context";

const App = (props) => {
  const authContext = useContext(AuthContext)

  let content = <Auth />
  if(authContext.isAuth) {
    content = <Ingredients />
  }

  return _jsx(
    <AuthContext.Consumer>
      <Auth />
    </AuthContext.Consumer>
  );
};

export default App;
