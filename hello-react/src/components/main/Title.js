import React, { Component } from "react";

import Searchbar from "./Searchbar";
import Menu from "./Menu";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  render() {
    return (
      <div className="title">
        <Menu className="menu"></Menu>
        <Searchbar className="searchBar"></Searchbar>
      </div>
    );
  }
}

export default Header;
