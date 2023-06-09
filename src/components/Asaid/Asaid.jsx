import React from "react";
import AsaidOptions from "./AsaidOptions";

const Asaid = (props) => {
  const {options} = props
  return (
    <aside className="w-50">
      <ul>
        { options && options.length > 0 && options.map((option,index) => {
          return <AsaidOptions key={index} option={option}/>
        } )}
      </ul>
    </aside>
  );
};

export default Asaid;
