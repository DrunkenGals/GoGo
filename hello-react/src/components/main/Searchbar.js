import React, { Component } from "react";
import { SearchField } from "gestalt";

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  render() {
    return (
      <div>
        <SearchField
          accessibilityLabel="Demo Search Field"
          id="searchField"
          onChange={({ value }) => this.setState({ value })}
          placeholder="Search and explore"
          value={this.state.value}
        />
      </div>
    );
  }
}

export default Searchbar;
