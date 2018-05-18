import React, { Component } from "react";
import { connect } from "react-redux";
import { removeFromFavourite } from "../actions/actions";
import { PageHeader } from "react-bootstrap";
import FavouriteUserPanel from "./FavouriteUserPanel";
import PropTypes from "prop-types";

class FavouriteUsersMain extends Component {
  unlikeUser = userLogin => {
    this.props.removeFromFavourite(userLogin);
  };

  render() {
    const { favourites } = this.props;

    return (
      <React.Fragment>
        <PageHeader>Your favourite github users:</PageHeader>;
        {Object.keys(favourites).map(key => {
          return (
            <FavouriteUserPanel
              key={key}
              user={favourites[key]}
              unlikeUser={this.unlikeUser}
            />
          );
        })}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, props) => {
  const { favourites } = state;
  return {
    favourites
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeFromFavourite: userLogin => dispatch(removeFromFavourite(userLogin))
  };
};

FavouriteUsersMain.propTypes = {
  removeFromFavourite: PropTypes.func.isRequired,
  favourites: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteUsersMain);
