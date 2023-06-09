import React from "react";

const NavLink = (props) => {
  const { name } = props;
  return (
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="#">
        { name || 'Default' }
      </a>
    </li>
  );
};

export default NavLink;
