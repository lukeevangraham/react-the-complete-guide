import React from "react";

const ValidationComponent = (props) => {
  let renderValidation = null;

  if (props.length <= 5) {
    renderValidation = <div>Text too short</div>;
  } else if (props.length > 5) {
    renderValidation = <div>Text long enough</div>;
  }

  return (
    <div>
      <p>{renderValidation}</p>
    </div>
  );
};

export default ValidationComponent;
