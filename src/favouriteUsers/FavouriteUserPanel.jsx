import React, { Component } from "react";
import { Panel, Button } from "react-bootstrap";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledPanel = styled(Panel)`
  display: flex;
  justify-content: space-between;
`;

class FavouriteUserPanel extends Component {
  unlikeUser = () => {
    this.props.unlikeUser(this.props.user.login);
  };

  render() {
    const { user } = this.props;
    return (
      <StyledPanel>
        <Panel.Body>{user.login}</Panel.Body>
        <Panel.Body>
          <Button bsSize="xsmall" bsStyle="primary" onClick={this.unlikeUser}>
            unlike
          </Button>
        </Panel.Body>
      </StyledPanel>
    );
  }
}

FavouriteUserPanel.propTypes = {
  user: PropTypes.object.isRequired,
  unlikeUser: PropTypes.func.isRequired
};

export default FavouriteUserPanel;
