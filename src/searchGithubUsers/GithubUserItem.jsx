import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  changeFocused,
  addToFavourite,
  removeFromFavourite
} from "./../actions/actions";
import { Button } from "react-bootstrap";

const ItemContainer = styled.div`
  display: flex;
  padding: 5px;
  min-height: 35px;
  justify-content: space-between;
  background: ${props => (props.isFocused ? "#597ba7" : "white")};
`;

const Avatar = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const Boldable = styled.span`
  font-weight: ${props => (props.isBolded ? "bold" : "normal")};
`;

const getHighlightedUsername = (login, searchPhrase) => {
  return (
    <React.Fragment>
      {login
        .split(new RegExp(`(${searchPhrase})`, "i"))
        .filter(x => x !== "")
        .map((part, i) => {
          const isBolded = part.toLowerCase() === searchPhrase.toLowerCase();
          return (
            <Boldable key={i} isBolded={isBolded}>
              {part}
            </Boldable>
          );
        })}
    </React.Fragment>
  );
};

class GithubUserItem extends React.Component {
  onMouseEnter = () => {
    this.props.changeFocused(this.props.index);
  };

  toggleState = () => {
    if (this.props.isInFavorites) {
      this.props.removeFromFavourite(this.props.user.login);
    } else {
      this.props.addToFavourite(this.props.user);
    }
  };

  render() {
    const {
      user: { login, avatar_url },
      index,
      focusedIndex,
      searchPhrase
    } = this.props;

    const isFocused = focusedIndex === index;
    const buttonMsg = this.props.isInFavorites ? "unlike" : "like";
    return (
      <ItemContainer isFocused={isFocused} onMouseEnter={this.onMouseEnter}>
        <div>
          <Avatar src={avatar_url} />
          {getHighlightedUsername(login, searchPhrase)}
        </div>
        <Button bsSize="xsmall" bsStyle="primary" onClick={this.toggleState}>
          {buttonMsg}
        </Button>
      </ItemContainer>
    );
  }
}

GithubUserItem.propTypes = {
  user: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  focusedIndex: PropTypes.number.isRequired,
  searchPhrase: PropTypes.string.isRequired,
  changeFocused: PropTypes.func.isRequired,
  addToFavourite: PropTypes.func.isRequired,
  removeFromFavourite: PropTypes.func.isRequired
};

const mapStateToProps = (state, props) => {
  const { searchPhrase, focusedIndex } = state;
  const isInFavorites = state.favourites[props.user.login] !== undefined;
  return {
    searchPhrase,
    focusedIndex,
    isInFavorites
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeFocused: index => dispatch(changeFocused(index)),
    addToFavourite: user => dispatch(addToFavourite(user)),
    removeFromFavourite: userLogin => dispatch(removeFromFavourite(userLogin))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GithubUserItem);
