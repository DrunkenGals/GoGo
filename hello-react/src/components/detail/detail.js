import React, { Component } from 'react';
import { Box, Icon} from 'gestalt';

/* Gestalt */
import "gestalt/dist/gestalt.css";
import "../../App.css";
// import "../main.css";

 class Detail extends Component {
  render() {
    return (
      <Box alignItems="center" display="flex">
      <Box marginRight={1} padding={1}>
      <Icon icon="smiley-outline" color="white" />
      </Box>
      <div className="text"> 
        더 파운틴
      </div>
      </Box>
    )
  }
}

export default Detail;