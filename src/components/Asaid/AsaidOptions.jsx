import React from "react";

const AsaidOptions = (props) => {
  const { option } = props;
  return (
    <li>
      <p>{option || "Default"}</p>
    </li>
  );
};

export default AsaidOptions;
