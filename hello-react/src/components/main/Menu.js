import React, { Component } from "react";
import { Box, IconButton, Modal, Heading } from "gestalt";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.handleToggleMedium = this._handleToggleMedium.bind(this);
    this.state = {
      md: false
    };
  }

  _handleToggleMedium() {
    this.setState(prevState => ({ md: !prevState.md }));
  }


  render() {
    const { md } = this.state;
    return (
      <div className="menu">
        <Box
          position="absolute"
          top
          right
          padding={3}
          display="flex"
          direction="row"
          alignItems="center"
        >
          <Box paddingX={2}>
            <IconButton
              accessibilityLabel="Notifications"
              icon="speech-ellipsis"
              size="md"
            />
          </Box>
          <Box paddingX={2}>
            <IconButton accessibilityLabel="Profile" icon="person" size="md" onClick={this.handleToggleMedium}/>
            {md && (
            <Modal
              accessibilityCloseLabel="close"
              accessibilityModalLabel="View default padding and styling"
              heading="Login"
              onDismiss={this.handleToggleMedium}
              footer={<Heading size="sm">Footer</Heading>}
              size="md"
            >
              <Box padding={2}>
                <Heading size="sm">Children</Heading>
              </Box>
            </Modal>
          )}
          </Box>
        </Box>
      </div>
    );
  }
}

export default Menu;
