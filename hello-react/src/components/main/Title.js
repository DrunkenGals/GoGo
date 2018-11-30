import React, { Component, Fragment } from "react";

import Searchbar from "./Searchbar";
import Menu from "./Menu";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  render() {
    return (
      <Fragment>
        <Menu />
        <div className="logo">
        
        </div>
        <Searchbar />
      </Fragment>
    );
  }
}

export default Header;
