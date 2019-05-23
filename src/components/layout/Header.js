import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types"; // snipet impt

// create with rfc snipet because it doesnt need to have state, and for that is required to explitly add the props param
const Header = props => {
  return (
    // Using bootstrap styles
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {props.brand}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" />
                Home
              </Link>
            </li>
            <li>
              <Link to="/contacts/add" className="nav-link">
                <i className="fas fa-plus" /> Add
              </Link>
            </li>
            <li>
              <Link to="/about/" className="nav-link">
                <i className="fas fa-question" />
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
// Default values for props
Header.defaultProps = {
  brand: "Some App"
};

Header.propTypes = {
  brand: PropTypes.string.isRequired
};

// Props validation types and mandatories
export default Header;
