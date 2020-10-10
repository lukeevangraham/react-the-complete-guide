import React, { useEffect, useRef, useContext } from "react";

import classes from "./Cockpit.module.css";
import AuthContext from "../../context/auth-context";

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // http request
    // const timer = setTimeout(() => {
    //   alert('saved data to cloud!')
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      // clearTimeout(timer)
      console.log("[cockpit.js] cleanup work in useEffect");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nduseEffect");
    return () => {
      console.log("[Cockpit.js] cleanup work in 2nd useEffect");
    };
  });

  const assignedClasses = [];

  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      <button onClick={authContext.login}>Log in</button>
    </div>
  );
};

export default React.memo(Cockpit);
