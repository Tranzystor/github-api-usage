import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import DefaultInput from "./DefaultInput";
import { connect } from "react-redux";
import { changeSearchPhrase, changeFocused } from "../actions/actions";

const ExtendableContainer = styled.div`
  outline: none;
  position: relative;
  background: white;
`;

const PopupWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  max-height: 300px;
  overflow: auto;
  position: absolute;
  width: 100%;
  background: #ffffff;
  border: 1px solid #e5e5e5;
`;

const UP_ARROW = 38;
const DOWN_ARROW = 40;
// const ENTER_KEY = 13;

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.currentSearchphrase = "";
  }

  onSearchPhraseChanged = searchPhrase => {
    this.currentSearchphrase = searchPhrase;
    this.props.search(searchPhrase).then(items => {
      if (this.currentSearchphrase === searchPhrase) {
        this.setState({
          items
        });
        this.props.changeSearchPhrase(searchPhrase);
        this.props.changeFocused(0);
      }
    });
  };

  onKeyDown = e => {
    const key = e.keyCode;
    const { items } = this.state;
    const { focusedIndex } = this.props;

    if (key === DOWN_ARROW && focusedIndex < items.length - 1) {
      this.setFocusedIndexWithDelta(1);
    } else if (key === UP_ARROW && focusedIndex > 0) {
      this.setFocusedIndexWithDelta(-1);
    }
  };

  setFocusedIndexWithDelta = delta => {
    this.props.changeFocused(this.props.focusedIndex + delta);
  };

  render() {
    const { items } = this.state;
    const isPopupVisible = items.length > 0;
    return (
      <ExtendableContainer onKeyDown={this.onKeyDown} tabIndex="0">
        <DefaultInput
          onChange={this.onSearchPhraseChanged}
          placeholder={"Type a github username"}
        />
        {isPopupVisible && (
          <PopupWrapper>
            {items.map((item, i) => {
              return this.props.renderItem(item, i);
            })}
          </PopupWrapper>
        )}
      </ExtendableContainer>
    );
  }
}

Autocomplete.ropTypes = {
  renderItem: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    changeSearchPhrase: searchPhrase =>
      dispatch(changeSearchPhrase(searchPhrase)),
    changeFocused: index => dispatch(changeFocused(index))
  };
};

const mapStateToProps = state => {
  return {
    focusedIndex: state.focusedIndex
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Autocomplete);
