import React from "react";
import { Link } from "react-router-dom";

const NavIcons = () => {
  return (
    <React.Fragment>
      <ul className="text-right social">
        <li className="link-text mr-2">
          <Link to="/">Reviews</Link>
        </li>
        <li className="link-text mr-2">
          <Link to="/">Admission</Link>
        </li>
        <li className="link-text mr-2">
          <Link to="/">
            <i className="fa fa-facebook" />
          </Link>
        </li>
        <li className="link-text mr-2">
          <Link to="/">
            <i className="fa fa-twitter" />
          </Link>
        </li>
        <li className="link-text mr-2">
          <Link to="/">
            <i className="fa fa-instagram" />
          </Link>
        </li>
        <li className="link-text mr-2">
          <Link to="/">
          <i className="fa fa-youtube"></i>
          </Link>
        </li>
        <li className="link-text mr-2">
          <Link to="/">
            <i className="fa fa-linkedin" />
          </Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default NavIcons;
