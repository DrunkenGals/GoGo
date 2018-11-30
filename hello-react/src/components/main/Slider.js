import React, { Component } from "react";
import { Carousel } from "antd";
import { Image } from "gestalt";

function onChange(a, b, c) {
  console.log(a, b, c);
}

class Center extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  render() {
    return (
      <div className="container">
        <Carousel afterChange={onChange}>
          <div>
            <Image
              alt="wide"
              color="#000"
              fit="cover"
              naturalHeight={1}
              naturalWidth={1}
              src="../img/1.png"
            />
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Center;
