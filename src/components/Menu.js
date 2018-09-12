import React from "react";
import Link from "gatsby-link";

const Menu = props => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link onClick={props.onToggleMenu} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/learning">
            Machine Learning
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/ajavascript">
            JavaScript
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/python">
            Python
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/maths">
            Maths
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/hobbies">
            Hobbies
          </Link>
        </li>
      </ul>
    </div>
    <a className="close" onClick={props.onToggleMenu} href="javascript:;">
      Close
    </a>
  </nav>
);

Menu.propTypes = {
  onToggleMenu: React.PropTypes.func
};

export default Menu;
