import React from "react";

const ValidationComponent = (props) => {
  let renderValidation = null;

  if (props.length <= 5) {
    renderValidation = <p>Text too short</p>;
  } else {
    renderValidation = <p>Text long enough</p>;
  }

  return (
    <div>
      <div>{renderValidation}</div>
    </div>
  );
};

export default ValidationComponent;
