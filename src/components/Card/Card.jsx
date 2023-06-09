import React from "react";
import default_img from "../../assets/img/react_logo.jpeg";

const Card = (props) => {
  const { img, title, description, button } = props;
  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <img src={img || default_img} className="card-img-top" alt="..." />
      <div className="card-body">
       {title && <h5 className="card-title">{title}</h5>}
        {description && (
          <p className="card-text">{description || "Default Description"}</p>
        )}
        {Object.keys(button).length > 0 && (
          <a href="#" className={`btn btn-${button.btnColor || "primary"}`}>
            {button.btnText || "Default Text"}
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
